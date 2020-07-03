//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = ( codon ) => {
  let proteins = [];
  let stop = false;

  switch( codon ) {
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      proteins.push('Serine');
      break;
    case 'UUU':
    case 'UUC':
      proteins.push('Phenylalanine');
      break;
    case 'UUA':
    case 'UUG':
      proteins.push('Leucine');
      break;
    case 'UAU':
    case 'UAC':
      proteins.push('Tyrosine');
      break;
    case 'UGU':
    case 'UGC':
      proteins.push('Cysteine');
      break;
    case 'AUG':
      proteins.push('Methionine');
      break;
    case 'UGG':
      proteins.push('Tryptophan');
      break;
    case 'UAA':
    case 'UAG':
    case 'UGA':
      stop = true;
      break;
  }

  return proteins;
};
