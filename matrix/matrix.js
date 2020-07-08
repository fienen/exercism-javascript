export class Matrix {
  constructor(str) {
    // Split the string by newlines, then each of those by spaces, parsing the string into an integer
    this.matrix = str.split('\n').map(row => row.split(' ').map(i => parseInt(i)));
  }

  get rows() {
    // Returning rows is just returning the normal, parsed out matrix
    return this.matrix;
  }

  get columns() {
    // Find out how tall and wide the matrix is to rotate it 90 degrees
    const height = this.matrix.length;
    const width = this.matrix[0].length;
    let columned = [];
    
    // This feels inefficient, but does work. Maybe a smarter way to do it with map() or splice()...
    for(let i = 0; i < width; i++) {
      let row = [];
      
      for(let ii = 0; ii < height; ii++) {
        row.push(this.matrix[ii][i]);
      }
      
      columned.push(row);
    }
    
    return columned;
  }
}
