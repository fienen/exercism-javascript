// Reverse ordered object of allergies and values
const ALLERGIES = {cats: 128, pollen: 64, chocolate: 32, tomatoes: 16, strawberries: 8, shellfish: 4, peanuts: 2, eggs: 1};

export class Allergies {
  constructor(val) {
    this.allergies = [];
    // Cut down the value to eliminate "unkonwn" allergies
    while(val > 256) val = val - 256;

    // Use the descending value order of the object to our advantage for the loop
    for(let [k, v] of Object.entries(ALLERGIES)) {
      if(val >= v) {
        // If our value is greater or equal, push it into our list, reduce, and keep going
        this.allergies.push(k);
        val -= v;
      }
    }
  }

  list() {
    // Change to ascending value order for test matching
    return this.allergies.reverse();
  }

  allergicTo(allergy) {
    // Just look for the value in the array
    return this.allergies.includes(allergy) ? true : false;
  }
}
