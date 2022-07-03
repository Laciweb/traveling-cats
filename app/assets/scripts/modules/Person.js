class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log("Hello there here is " + this.favoriteColor + " " + this.name);
    }
}


export default Person