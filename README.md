# Cyclotron Logic Implementation

This repository contains a JavaScript implementation of a cyclotron logic simulation. The cyclotron is a particle accelerator that can accelerate different particles (electron, proton, neutron) within a matrix. The particles follow specific patterns while circulating inside the cyclotron.

## Usage

To run the cyclotron simulation, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone this repository or copy the JavaScript code from the provided implementation.
3. Open your terminal or command prompt and navigate to the project directory.
4. Run the following command to execute the simulation:

   ```sh
   node cyclotron.js
   ```

## Particle Patterns

Electron: The electrons circulate along the outer edge of the matrix, filling the first row with the electron symbol ('e').

Proton: The protons create a square pattern within the matrix. The first and last rows are filled with proton symbols ('p'). The first and last columns, except for the corners, are also filled with proton symbols ('p').

Neutron: The neutrons form a pattern along the first column and the second row of the matrix. The first column is filled with neutron symbols ('n'), and the first cell of the second row is also filled with a neutron symbol ('n').

## Functions

initializeMatrix(size): Creates a matrix of size size x size with all elements initialized to 1.

accelerateElectron(matrix): Accelerates electrons within the matrix by filling the first row with electron symbols ('e').

accelerateProton(matrix): Accelerates protons within the matrix by creating the proton pattern as described above.

accelerateNeutron(matrix): Accelerates neutrons within the matrix by creating the neutron pattern as described above.

printMatrix(matrix): Prints the contents of the matrix to the console.

ciclotron(particle, size): The main function that simulates the cyclotron behavior. It initializes the matrix, accelerates the specified particle, and then prints the resulting matrix.

## License

This project is licensed under the MIT License.
