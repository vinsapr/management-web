import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {
  public async index({ view }: HttpContextContract) {
    const employees = await Employee.query().preload('owner')
    return view.render('dashboard', { employees })
  }
  public async show({ params, view }: HttpContextContract) {
    try {
      const employee = await Employee.find(params.id)
      if (employee) {
        return view.render('dashboard', { employee })
      } else {
        return view.render('dashboard', {
          status: 200,
          message: `Data employee with ${params.id} not found`,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async update({ request, params, view }: HttpContextContract) {
    const employee = await Employee.find(params.id)
    if (employee) {
      employee.user_id = request.input('user_id')
      employee.first_name = request.input('first_name')
      employee.last_name = request.input('last_name')
      employee.gender = request.input('gender')
      employee.division = request.input('division')
      employee.level = request.input('level')

      if (await employee.save()) {
        await employee.preload('owner')
        return view.render('dashboard', { employee })
      }
      return { status: 'failed', message: 'Please retry!' }
    }
    return { status: 'failed', message: 'Please retry!' }
  }

  public async edit({ view, params }: HttpContextContract) {
    const employee = await Employee.find(params.id)
    return view.render(`edit`, { employee })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('add')
  }

  public async store({ request, response }: HttpContextContract) {
    const employee = new Employee()
    employee.user_id = request.input('user_id')
    employee.first_name = request.input('first_name')
    employee.last_name = request.input('last_name')
    employee.gender = request.input('gender')
    employee.division = request.input('division')
    employee.level = request.input('level')
    await employee.save()
    response.redirect(`/employee/${employee.id}`)
  }

  public async destroy({ response, params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    await Employee.query().where('user_id', user.id).where('id', params.id).delete()
    return response.redirect('/dashboard')
  }
}
