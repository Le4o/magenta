'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

//import axios from 'axios'
const axios = use('axios')

class HomeController {

    async home({view}) {
        await this.loadApriori()
        return view.render('home')
    }

    async loadApriori() {
        // Request.get('http://127.0.0.1:5000').then((result) => {
        //     console.log(result)
        // })

        axios.get('http://127.0.0.1:5000')
            .then((response) => {
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

module.exports = HomeController
