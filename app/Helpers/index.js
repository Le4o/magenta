'use strict'

const subject = class Subject {

    constructor () {
        this._observers = []    
    }

    subscribe (observer) {
        this._observers.push(observer)
    }

    unsubscribe (observer) {
        this._observers = this._observers.filter(obs => observer !== obs)
    }

    notifyAll (change) {
        this._observers.forEach(observer => {
            observer.update(change)
        });
    }
}

const observer = class Observer {

    constructor (state) {
        this.state = state
        this.initialtate = state
    }

    update (change) {
        this.state = change
    }
}

module.exports = {
    subject,
    observer
}