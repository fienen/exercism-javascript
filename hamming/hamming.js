//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = ( s1, s2 ) => {
  let strand1 = s1.split('');
  let strand2 = s2.split('');
  let dist = 0;

  if ( s1 === '' && s2.length > 0 ) {
    throw Error('left strand must not be empty');
  } else if ( s2 === '' && s1.length > 0 ) {
    throw Error('right strand must not be empty');
  } else if ( s1.length !== s2.length ) {
    throw Error('left and right strands must be of equal length');
  } else {
    strand1.forEach(function(rna, i) {
      dist = rna != strand2[i] ? dist + 1 : dist;
    });

    return dist;
  }
};
