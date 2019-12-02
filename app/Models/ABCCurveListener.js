'use strict'

const APIListener = use('App/Models/APIListener')

class ABCCurveListener extends APIListener {

    constructor () {
        super('curva')
    }

}

module.exports = ABCCurveListener