import { width, height } from './data/global-variables.js';

import { matrix } from './helpers/create-matrix/create-matrix.js';
import { mapCells } from './helpers/map-cells/map-cells.js';

const life = true;

// LA MANIPULACIÓN HA DE SER TODA EN EL MISMO ARCHIVO…
// LOS MÓDULOS IMPORTARÁN SOLAMENTE EL CÓDIGO PARA SER TESTADO INDIDVIDUALMENTE

mapCells(matrix);
console.log(matrix[15]);
