const ALLERGIES = {cats: 128, pollen: 64, chocolate: 32, tomatoes: 16, strawberries: 8, shellfish: 4, peanuts: 2, eggs: 1};

export class Allergies {
  constructor(val) {
    this.allergies = [];
    while(val > 256) val = val - 256;
    for(let [k, v] of Object.entries(ALLERGIES)) {
      if(val >= v) {
        this.allergies.push(k);
        val -= v;
      }
    }
  }

  list() {
    return this.allergies.reverse();
  }

  allergicTo(allergy) {
    return this.allergies.includes(allergy) ? true : false;
  }
}
