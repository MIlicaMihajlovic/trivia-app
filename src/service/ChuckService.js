import Chuck from 'chucknorris-io'

class ChuckService {
    constructor() {
        this.client = new Chuck(); //biblioteku smestamo ovde
    }

    //
    getRandomJoke() {
        return this.client.getRandomJoke()
    }

}

export const chuckService = new ChuckService();
