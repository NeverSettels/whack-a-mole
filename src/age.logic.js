export class Planet {
  checkIfNumber(input) {
    if (typeof input === "string") {
      return false;
    } else {
      return true;
    }
  }
  clacMercuryYears = numYears => numYears * 0.24;
  calcVenusYears = numYears => numYears * 0.62;
  calcMarsYears = numYears => numYears * 1.88;
  calcJupiterYears = numYears => numYears * 11.86;

  getLifeExpectancy(country) {
    if (country === 'mexico') {
      return 77;
    } else if (country === 'usa') {
      return 79;
    } else if (country === 'canada') {
      return 82;
    }
  }
  leftToLive = (age, expectancy) => {
    let yearsLeft = expectancy - age
    if (yearsLeft > 0) {
      return [yearsLeft, 'left'];
    } else if (yearsLeft < 0) {
      return [-1 * yearsLeft, 'past'];
    } else if (yearsLeft === 0) {
      return [yearsLeft, 'soon'];
    }
  }
}