function initializeMatrix(size) {
  return Array.from({ length: size }, () => Array(size).fill(1));
}

function printMatrix(matrix) {
  for (const row of matrix) {
    console.log(row.join(' '));
  }
  console.log();
}

module.exports = { initializeMatrix, printMatrix };
