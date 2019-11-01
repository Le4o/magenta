'use strict'

const View = use('View')

class UserController {

    async login ({ request, auth, response }) {
        const { email, password } = request.all()
        try {
            const { token } =  await auth.attempt(email, password)
        } catch (error) {
            return response.status(400).json({error: error})
        }

        return View.render('dashboard')
    }

    async logout ({ auth }) {

        const isLoggedIn = await auth.check()
        if (isLoggedIn) {
            await auth.logout()
            return View.render('welcome')
        }
    }

    show ({auth, params}) {
        if (auth.user.id !== Number(params.id)) {
            return 'Login não autorizado'
        }

        return auth.user
    }
}

module.exports = UserController
