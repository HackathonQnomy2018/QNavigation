export class GridNode {
    f: number;
    g: number;
    h: number;
    visited: boolean;
    closed: boolean;
    parent: boolean;

    constructor(public x, public y, public weight) { }

    toString() {
        return '[' + this.x + ' ' + this.y + ']';
    }

    getCost(fromNeighbor: GridNode) {
        if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
            return this.weight * 1.41421;
        }
        return this.weight;
    }

    isWall() {
        return this.weight === 0;
    }
}
