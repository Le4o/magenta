'use strict'

const axios = use('axios')
const { subject } = use('App/Helpers')
const Env = use('Env')
const url = Env.get('API_URL')

class APIListener extends subject {

    constructor (route) {
        super()
        this.data = []
        this.route = route
    }

    //Calls API route and return data
    async loadApi() {
        return axios.get(url + this.route)
            .then(response => {
                this.data = response.data.data
                return response.data.data   
            })
            .catch(err => {
                return 'Api está fechada / ' + err
            })
    }

}

module.exports = APIListener