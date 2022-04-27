const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  return function fareMultiplier(integer) {
    return integer * 5;
  }
}

const fareDoubler = (fare) => {
  return fare * 2;
}

const fareTripler = (fare) => {
  return fare * 3;
}

function selectDifferentDrivers(drivers, fn) {
  if (fn === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  }
  else if (fn === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }};