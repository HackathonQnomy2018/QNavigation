import { GraphOptions } from './graph-options';
import { GridNode } from './grid-node';
import { Astar } from './astar';

export class Graph {

    nodes: any[];
    diagonal: boolean;
    grid: any[];
    dirtyNodes: any[];

    constructor(gridIn, options: GraphOptions = {}) {
        options = options || {};
        this.nodes = [];
        this.diagonal = !!options.diagonal;
        this.grid = [];
        for (let x = 0; x < gridIn.length; x++) {
            this.grid[x] = [];

            for (let y = 0, row = gridIn[x]; y < row.length; y++) {
                const node = new GridNode(x, y, row[y]);
                this.grid[x][y] = node;
                this.nodes.push(node);
            }
        }
        this.init();
    }


    init(): void {
        this.dirtyNodes = [];
        for (let i = 0; i < this.nodes.length; i++) {
            Astar.cleanNode(this.nodes[i]);
        }
    }

    cleanDirty(): void {
        for (let i = 0; i < this.dirtyNodes.length; i++) {
            Astar.cleanNode(this.dirtyNodes[i]);
        }
        this.dirtyNodes = [];
    }
}
