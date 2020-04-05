export class Pokemodel {
    id: any
    name: null
    url: null
    img : string
    types: []
    stats: []

    image() {
        return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
    }

}

