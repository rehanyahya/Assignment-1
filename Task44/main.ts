const make_sandwich = (...items: string[]) => {
  console.log(`A person wants a ${items.join(", ")} on a sandwich`);
};

make_sandwich("cucumber");
make_sandwich("cucumber", "tomatoes");
make_sandwich("cucumber", "jalapeno", "olives");
