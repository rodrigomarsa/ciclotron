const { initializeMatrix, printMatrix } = require('./utils/matrix');
const { accelerateElectron } = require('./utils/electron');
const { accelerateProton } = require('./utils/proton');
const { accelerateNeutron } = require('./utils/neutron');

const PARTICLES = {
  ELECTRON: 'e',
  PROTON: 'p',
  NEUTRON: 'n',
};

function ciclotron(particle, size) {
  if (Object.values(PARTICLES).includes(particle)) {
    const matrix = initializeMatrix(size);

    if (particle === PARTICLES.ELECTRON) {
      accelerateElectron(matrix);
    } else if (particle === PARTICLES.PROTON) {
      accelerateProton(matrix);
    } else if (particle === PARTICLES.NEUTRON) {
      accelerateNeutron(matrix);
    }

    printMatrix(matrix);
  } else {
    printMatrix(initializeMatrix(size));
  }
}

ciclotron('Cyclotron without particles', 4);
ciclotron(PARTICLES.ELECTRON, 4);
ciclotron(PARTICLES.PROTON, 4);
ciclotron(PARTICLES.PROTON, 6);
ciclotron(PARTICLES.NEUTRON, 4);
