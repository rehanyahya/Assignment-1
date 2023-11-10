var city_country = function (city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "United States of America"));
console.log(city_country("Paris", "France"));
