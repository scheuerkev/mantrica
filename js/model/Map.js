import Canvas from "./Canvas.js";
import Square from './Square.js';

export default class Map {
    constructor() {
        this.listSquare = Array();
        this.canvas = new Canvas();
    }

    async loadMap(file){
        let result = await fetch(`./data/${file}.json`);
        let data = await result.json();
        Object.assign(this, data);
        this.canvas.setStep(this.size);

        for (let x=0; x<this.size.width; x++) {
            for (let y=0; y<this.size.height; y++) {
                this.listSquare.push(new Square(x,y));
            }
        }
    }

    display() {
        for (let square of this.listSquare) {
            square.display(this.canvas);
        }
    }

}