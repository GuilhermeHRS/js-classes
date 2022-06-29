const now = new Date();

console.log(now);
console.log(typeof now);

// years, months, days, hours, minutes, seconds

console.log('getFullYear:', now.getFullYear());
console.log('getMouth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());
console.log('getMilliseconds:', now.getMilliseconds());

// timestamps format

console.log('timestamp:', now.getTime());

// date strings

console.log(now.toDateString());
console.log(now.toTimeString());



