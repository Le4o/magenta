'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const View = use('View')

const validator = require('email-validator')

class RegisterController {
    async store ({request, response}) {
        const data = request.only([
            'username',
            'email',
            'password'
        ])

        //Validando e-mail com email-validator
        if (!validator.validate(data.email)) 
            return response.status(401).json({error: ' Invalid format of Email.', error_token: 42})

        //Validando tamanho da senha
        const passwordLenght = data.password.length
        if (passwordLenght < 6 || passwordLenght > 25) 
            return response.status(401).json({error: 'Invalid password length.', error_token: 43})

        //Chechando se existe algum email igual já armazenado na base de dados
        const same_email = await Database
            .table('users')
            .where('email', data.email)
            .first()

        if (same_email != undefined)
        return response.status(400).json({error: 'This email is already used.', error_token: 44}) 

        const user = await User.create(data)
        response.status(201)
        return View.render('welcome')

    }
}

module.exports = RegisterController
