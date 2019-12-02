'use strict'

const { observer } = use('App/Helpers')
const InventoryService = use('App/Services/InventoryService')

class Notification extends observer {

    constructor (state) {
        super(state)
    }

    async formatNotification () {

        if (this.state !== 'off') return await InventoryService.getDescriptionById(this.state[1])
        else return 'Notificação não criada'
        
    }

}

module.exports = Notification