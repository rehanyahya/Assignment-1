const about_car = (manufacturer: string, model: string, ...args: any[]) => {
  let carDetail = {
    manufacturer,
    model,
  };

  if (args.length > 0) {
    args.forEach((item) => {
      carDetail = {
        ...carDetail,
        ...item,
      };
    });
  }

  return carDetail;
};

console.log(about_car("Toyota", "Corolla"));
console.log(about_car("Honda", "Civic", { color: "white" }));
console.log(
  about_car("Suzuki", "Alto", { color: "black" }, { transmission: "auto" })
);
