import Chuck from 'chucknorris-io'

class ChuckService {
    constructor() {
        this.client = new Chuck(); //biblioteku smestamo ovde
    }

    //
    getRandomJoke(categ) {
        return this.client.getRandomJoke(categ)
    }

    getRandomCategories() {
        return this.client.getJokeCategories()
    }

}

export const chuckService = new ChuckService();
