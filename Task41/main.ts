const names = ["John", "Susan", "Alex"];

const show_magicians = (_names: string[]) => {
  _names.forEach((item) => {
    console.log(item);
  });
};

show_magicians(names);

export {};
