'use strict'

const APIListener = use('App/Models/APIListener')

class AprioriListener extends APIListener {

    constructor () {
        super('/apriori')
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

module.exports = AprioriListener