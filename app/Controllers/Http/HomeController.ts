
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { prisma } from '@ioc:Adonis/Addons/Prisma'
export default class HomeController {
  public async index({ inertia }) {
    const users = await prisma.user.findMany({
      select: {
        id:true,
        name: true,
        email: true,
        createdAt: true,
      }
    });
    return inertia.render('Home', {
        users
    })
  }
}
