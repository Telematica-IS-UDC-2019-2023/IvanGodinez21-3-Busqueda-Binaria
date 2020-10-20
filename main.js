class Binary {
    constructor() {
        this.vector = new Array;
    }
    llenarVector() {
        for (let i = 1; i <= 100; i++) {
            if ((i % 2) == 0) {
                this.vector.push(i);
            }
        }
        return this.vector
    }
    busquedaBinaria(value) {
        let first = 0;
        let last = this.vector.length - 1;
        let position = -1;
        let found = false;
        var middle = undefined;

        while (found === false && first <= last) {
            middle = Math.floor((first + last) / 2);
            if (this.vector[middle] == value) {
                found = true;
                position = middle;
            } else if (this.vector[middle] > value) {
                last = middle - 1;
            } else {
                first = middle + 1;
            }
        }
        return position;
    }

}
let app = new Binary;
console.log(app.llenarVector());
console.log(app.busquedaBinaria(22));