import { GraphOptions } from './graph-options';
import { GridNode } from './grid-node';
import { Astar } from './astar';

export class Graph {

    nodes: GridNode[];
    diagonal: boolean;
    grid: GridNode[][];
    dirtyNodes: GridNode[];

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

    markDirty(node: GridNode) {
        this.dirtyNodes.push(node);
    }

    neighbors(node: GridNode) {
        const ret = [];
        const x = node.x;
        const y = node.y;
        const grid = this.grid;

        // West
        if (grid[x - 1] && grid[x - 1][y]) {
            ret.push(grid[x - 1][y]);
        }

        // East
        if (grid[x + 1] && grid[x + 1][y]) {
            ret.push(grid[x + 1][y]);
        }

        // South
        if (grid[x] && grid[x][y - 1]) {
            ret.push(grid[x][y - 1]);
        }

        // North
        if (grid[x] && grid[x][y + 1]) {
            ret.push(grid[x][y + 1]);
        }

        if (this.diagonal) {
            // Southwest
            if (grid[x - 1] && grid[x - 1][y - 1]) {
                ret.push(grid[x - 1][y - 1]);
            }

            // Southeast
            if (grid[x + 1] && grid[x + 1][y - 1]) {
                ret.push(grid[x + 1][y - 1]);
            }

            // Northwest
            if (grid[x - 1] && grid[x - 1][y + 1]) {
                ret.push(grid[x - 1][y + 1]);
            }

            // Northeast
            if (grid[x + 1] && grid[x + 1][y + 1]) {
                ret.push(grid[x + 1][y + 1]);
            }
        }

        return ret;
    }

    toString() {
        const graphString = [];
        const nodes = this.grid;
        for (let x = 0; x < nodes.length; x++) {
            const rowDebug = [];
            const row = nodes[x];
            for (let y = 0; y < row.length; y++) {
                rowDebug.push(row[y].weight);
            }
            graphString.push(rowDebug.join(' '));
        }
        return graphString.join('\n');
    }
}
