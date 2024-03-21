export class Queue<T> {
    private _items: T[] = [];

    public enqueue(value: T) {
        this._items.push(value);
    }

    public dequeue(): T | undefined {
        return this._items.shift();
    }

    public isEmpty(): boolean {
        return this._items.length === 0;
    }
}

export enum CellType {
    Space = 0,
    Wall = 1,
}

export interface Point {
    row: number;
    column: number;

    parentPath?: Point;
}

export class Graph {
    constructor(
        public cells: CellType[][]
    ) {
    }

    public getNeighbors(point: Point): Point[] {
        const neighbors: Point[] = [];

        // check left neighbor
        if (point.column > 0 && this.cells[point.row][point.column - 1] === CellType.Space) {
            neighbors.push({row: point.row, column: point.column - 1});
        }

        // check right neighbor
        if (point.column < this.cells[0].length - 1 && this.cells[point.row][point.column + 1] === CellType.Space) {
            neighbors.push({row: point.row, column: point.column + 1});
        }

        // check top neighbor
        if (point.row > 0 && this.cells[point.row - 1][point.column] === CellType.Space) {
            neighbors.push({row: point.row - 1, column: point.column});
        }

        // check bottom neighbor
        if (point.row < this.cells.length - 1 && this.cells[point.row + 1][point.column] === CellType.Space) {
            neighbors.push({row: point.row + 1, column: point.column});
        }

        return neighbors;
    }
}

export function bfs(graph: Graph, start: Point, end: Point): Point | null {
    const queue = new Queue<Point>();
    const visited = [];

    queue.enqueue(start);
    visited.push(start);

    while (!queue.isEmpty()) {
        const current = queue.dequeue()!;

        for (const point of graph.getNeighbors(current)) {
            const isVisited = visited.some((p) => p.row === point.row && p.column === point.column);
            if (!isVisited) {
                queue.enqueue(point);
                visited.push(point);
                point.parentPath = current;
            }

            if (point.row === end.row && point.column === end.column) {
                return point;
            }
        }
    }

    return null;
}
