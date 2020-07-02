//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  isValid() {
    if(this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0 ||
      this.s1 > this.s2 + this.s3 || this.s2 > this.s1 + this.s3 || this.s3 > this.s2 + this.s1) {
      return false;
    } else {
      return true;
    }
  }

  kind() {
    if (this.isValid()) {
      let type;

      if(this.s1 === this.s2 && this.s1 === this.s3) {
        type = 'equilateral';
      } else if(this.s1 === this.s2 || this.s1 === this.s3 || this.s2 === this.s3) {
        type = 'isosceles';
      } else if(this.s1 != this.s2 && this.s1 != this.s3 && this.s2 != this.s3) {
        type = 'scalene';
      }

      return type;
    }

    throw Error('Triangle is not valid');
  }
}
