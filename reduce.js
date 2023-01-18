// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  //   let sneaks = [];
  //   for (let brand of brands) {
  //     sneaks = [...sneaks, ...brand.shoes];
  //     console.log('sneaks at end of loop', sneaks);
  //   }
  //   return sneaks;
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {};
