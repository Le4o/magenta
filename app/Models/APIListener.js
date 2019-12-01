'use strict'

const axios = use('axios')
const { subject } = use('App/Helpers')
const Env = use('Env')
const url = Env.get('API_URL')

class APIListener extends subject {

    constructor () {
        super()
        this.data = []
    }

    //Calls Apriori API made in Python Flask
    async loadApriori() {
        return axios.get(url)
            .then(response => {
                this.data = response.data.data
                return response.data.data
            })
            .catch(err => {
                return 'Api está fechada'
            })
    }

    searchForBest() {
        this.data.map(el => {
            if (el[0] > 0.046875 && el[1].length > 1) {
                this.notifyAll(el)
                return
            }
        })
    }

}

module.exports = APIListener