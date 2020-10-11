export class NucleotideCounts {
  static parse( rna ) {
    let a = 0, c = 0, g = 0, t = 0;

    [...rna].map(letter => {
      switch (letter) {
        case 'A':
          a++;
          break;
        case 'C':
          c++;
          break;
        case 'G':
          g++;
          break;
        case 'T':
          t++;
          break;
        default:
          throw Error('Invalid nucleotide in strand');
      }
    });

    return `${a} ${c} ${g} ${t}`;
  }
}
