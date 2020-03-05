const ages = [ 15, 14, 16];
const ages2 = [ 40, 50, 60];
ages3 = [ 90, 50];
//const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [ ...ages, ...ages, 5, ...ages3];
console.log(allAges2);