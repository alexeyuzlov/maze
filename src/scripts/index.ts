import '../styles/style.scss';

interface Item {
    id: number;
    name: string;
    weight: number;
    value: number;
}

function generateInitialPopulation(populationSize: number, individualSize: number) {
    const population = [];
    for (let i = 0; i < populationSize; i++) {
        const individual = [];
        for (let j = 0; j < individualSize; j++) {
            individual.push(Math.round(Math.random()));
        }
        population.push(individual);
    }

    return population;
}

function calculateIndividualFitness(individual: number[], items: Item[], maxWeight: number) {
    let weight = 0;
    let value = 0;
    for (let i = 0; i < individual.length; i++) {
        if (individual[i] === 1) {
            weight += items[i].weight;
            value += items[i].value;
        }
    }
    if (weight > maxWeight) {
        return 0;
    }

    return value;
}

function setProbabilitiesOfPopulation(population: number[][], items: Item[], maxWeight: number) {
    const probabilities = [];
    let totalFitness = 0;
    for (let i = 0; i < population.length; i++) {
        const fitness = calculateIndividualFitness(population[i], items, maxWeight);
        totalFitness += fitness;
    }

    for (let i = 0; i < population.length; i++) {
        const fitness = calculateIndividualFitness(population[i], items, maxWeight);
        probabilities.push(fitness / totalFitness);
    }
    return probabilities;
}

function rouletteWheelSelection(population: number[][], numberOfSelections: number, items: Item[], maxWeight: number) {
    const probabilities = setProbabilitiesOfPopulation(population, items, maxWeight);

    let slices = [];
    let total = 0;

    for (let i = 0; i < probabilities.length; i++) {
        total += probabilities[i];
        slices.push(total);
    }

    let result = [];
    let attemps = 0;
    let maxAttemps = 10000;
    while (result.length < numberOfSelections) {
        const random = Math.random();
        for (let i = 0; i < slices.length; i++) {
            if (random < slices[i]) {
                result.push(population[i]);
                break;
            }
        }

        attemps++;
        if (attemps > maxAttemps) {
            console.info(probabilities, slices, total, population, items, maxWeight);
            throw Error('Max attemps reached');
        }
    }

    return result;
}

function twoPointCrossover(parent1: number[], parent2: number[]) {
    const point1 = Math.floor(Math.random() * parent1.length);
    const point2 = Math.floor(Math.random() * parent1.length);

    const start = Math.min(point1, point2);
    const end = Math.max(point1, point2);

    const child1 = parent1.slice(0, start).concat(parent2.slice(start, end)).concat(parent1.slice(end));
    const child2 = parent2.slice(0, start).concat(parent1.slice(start, end)).concat(parent2.slice(end));

    return [child1, child2];
}

function mutation(individual: number[], mutationRate: number) {
    for (let i = 0; i < individual.length; i++) {
        if (Math.random() < mutationRate) {
            individual[i] = 1 - individual[i];
        }
    }
    return individual;
}

function runGeneticAlgorithm(populationSize: number, individualSize: number, items: Item[], maxWeight: number, generations: number, mutationRate: number) {
    let population: number[][] = [];
    let totalFitness = 0;
    while (totalFitness === 0) {
        population = generateInitialPopulation(populationSize, individualSize);
        for (let i = 0; i < population.length; i++) {
            totalFitness += calculateIndividualFitness(population[i], items, maxWeight);
        }
    }

    for (let i = 0; i < generations; i++) {
        const selectedPopulation = rouletteWheelSelection(population, populationSize, items, maxWeight);
        const newPopulation = [];

        for (let j = 0; j < selectedPopulation.length; j += 2) {
            const [child1, child2] = twoPointCrossover(selectedPopulation[j], selectedPopulation[j + 1]);
            newPopulation.push(mutation(child1, mutationRate));
            newPopulation.push(mutation(child2, mutationRate));
        }

        console.info('Generation:', i, 'Population:', newPopulation);
        population = newPopulation;
    }

    const bestIndividual = population.reduce((acc, curr) => {
        const currFitness = calculateIndividualFitness(curr, items, maxWeight);
        const accFitness = calculateIndividualFitness(acc, items, maxWeight);
        return currFitness > accFitness ? curr : acc;
    }, population[0]);

    return bestIndividual;
}

const items = [
    {id: 1, name: 'жемчуг', weight: 3, value: 4},
    {id: 2, name: 'золото', weight: 7, value: 7},
    {id: 3, name: 'корона', weight: 4, value: 5},
    {id: 4, name: 'монета', weight: 1, value: 1},
    {id: 5, name: 'топор', weight: 5, value: 4},
    {id: 6, name: 'меч', weight: 4, value: 3},
    {id: 7, name: 'кольцо', weight: 2, value: 5},
    {id: 8, name: 'чашка', weight: 3, value: 1},
];

const populationSize = 10;
const individualSize = items.length;
const maxWeight = 9;
const generations = 5;
const mutationRate = 0.1;

const result = runGeneticAlgorithm(
    populationSize,
    individualSize,
    items,
    maxWeight,
    generations,
    mutationRate,
);

// print max weight, population size, generations, mutation rate
const params = document.createElement('div');
params.textContent = `Max weight: ${maxWeight}, Population size: ${populationSize}, Generations: ${generations}, Mutation rate: ${mutationRate}`;
document.body.appendChild(params);

// print weight and value
const weight = result.reduce((acc, curr, index) => {
    return curr === 1 ? acc + items[index].weight : acc;
}, 0);
const value = result.reduce((acc, curr, index) => {
    return curr === 1 ? acc + items[index].value : acc;
}, 0);

const info = document.createElement('div');
info.textContent = `Weight: ${weight}, Value: ${value}`;
document.body.appendChild(info);

// generate table for items
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
for (let i = 0; i < items.length; i++) {
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = items[i].name;
    tr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.textContent = items[i].weight.toString();
    tr.appendChild(th2);
    const th3 = document.createElement('th');
    th3.textContent = items[i].value.toString();
    tr.appendChild(th3);
    tbody.appendChild(tr);
}
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
table.classList.add('table');

// mark selected items
for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
        tbody.children[i].classList.add('selected');
    }
}
