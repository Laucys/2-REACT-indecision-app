const add = (a, b) => {
    //console.log(arguments)
    return a + b;
}

console.log(add(55, 1, 1001));

const user = {
    name: 'Dainius',
    cities: ['Vilnius', 'Telsiai', 'Kaunas'],
    printPlacesLived () {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());