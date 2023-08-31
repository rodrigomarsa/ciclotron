function accelerateProton(matrix) {
  const size = matrix.length;
  const firstRow = 0;
  const lastPosition = size - 1;
  const penultimateRowColumn = size - 2;

  matrix[firstRow].fill('p');
  matrix[lastPosition].fill('p');
  matrix.forEach((row) => {
    row[lastPosition] = 'p';
    row[firstRow] = 'p';
  });
  matrix[lastPosition][lastPosition] = 1;
  matrix[penultimateRowColumn][penultimateRowColumn] = 'p';
}

module.exports = { accelerateProton };
