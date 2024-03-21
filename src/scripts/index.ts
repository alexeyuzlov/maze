import '../styles/style.scss';

import { bfs, Graph } from './bfs';
import { renderDOM, renderPath } from './render';

const start = {row: 1, column: 0};
const end = {row: 9, column: 9};

const matrix = [
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
];

const graph = new Graph(matrix);
const result = bfs(graph, start, end);

const maze = renderDOM(matrix);
renderPath(maze, result, start, end);

