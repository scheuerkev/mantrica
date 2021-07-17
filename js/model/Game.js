import Map from './Map.js';
import Canvas from './Canvas.js';
import TileManager from './TileManager.js';
import Character from "./Character.js";


export default class Game {
    constructor() {
    }

    async init() {
        this.tileManager = new TileManager();
        await this.tileManager.loadFile("map", "tiles2", 5, 1);
        await this.tileManager.loadFile("character", "char1", 4, 4);
        await this.tileManager.loadFile("character", "char2", 4, 4);
        await this.tileManager.loadFile("character", "char3", 4, 4);

        this.map = new Map();
        await this.map.loadMap("map2");
        this.map.display();

        this.character = Array();

        let char1 = new Character("Bozo", "Man", 4, 2, "BOTTOM");
        char1.display();
        char1.animate();
        this.character.push(char1);

        let char2 = new Character("Eowyn", "Monk", 10, 5, "RIGHT");
        char2.display();
        char2.animate();
        this.character.push(char2);

        let char3 = new Character("Mantricks", "Vampyre", 1, 1, "LEFT");
        char3.display();
        char3.animate();
        this.character.push(char3);
    }

}