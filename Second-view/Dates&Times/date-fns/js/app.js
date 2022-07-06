
const now = new Date();

// console.log(dateFns.isPast(now));

// formatting options
console.log(dateFns.format(now, 'DD/MMMM/YYYY'));

// comparing dates
const before = new Date('June 20, 2022 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: 'true'}));