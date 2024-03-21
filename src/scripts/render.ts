import { CellType, Point } from './bfs';

export function renderDOM(matrix: CellType[][]) {
    const body = document.querySelector('body')!;
    const maze = document.createElement('div');
    maze.classList.add('maze');
    body.appendChild(maze);

    for (let i = 0; i < matrix.length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        maze.appendChild(row);

        for (let j = 0; j < matrix[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add(matrix[i][j] === CellType.Space ? 'space' : 'wall');
            row.appendChild(cell);
        }
    }

    return maze;
}

export function renderPath(maze: HTMLElement, result: Point | null | undefined, start: Point, end: Point) {
    if (result) {
        let current = result;
        while (current.parentPath) {
            const row = maze.children[current.row] as HTMLElement;
            const cell = row.children[current.column] as HTMLElement;
            cell.classList.add('path');
            current = current.parentPath;
        }
    } else {
        const startRow = maze.children[start.row] as HTMLElement;
        const startCell = startRow.children[start.column] as HTMLElement;
        startCell.classList.add('no-path');
    }

    // add class to start and end
    const startRow = maze.children[start.row] as HTMLElement;
    const startCell = startRow.children[start.column] as HTMLElement;
    startCell.classList.add('start');

    const endRow = maze.children[end.row] as HTMLElement;
    const endCell = endRow.children[end.column] as HTMLElement;
    endCell.classList.add('end');
}
