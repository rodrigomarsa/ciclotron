function accelerateElectron(matrix) {
  const size = matrix.length;
  const firstRow = 0;
  const lastColumn = size - 1;

  matrix[firstRow].fill('e');
  matrix.forEach((row) => {
    row[lastColumn] = 'e';
  });
}

module.exports = { accelerateElectron };
