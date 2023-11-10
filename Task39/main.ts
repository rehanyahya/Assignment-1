const city_country = (city: string, country: string) => {
  return `\"${city}, ${country}\"`;
};

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "United States of America"));
console.log(city_country("Paris", "France"));
