const names = ["John", "Susan", "Alex"];

const make_great = () => {
  for (let i = 0; i < names.length; i++) {
    names[i] = `${names[i]} the Great`;
  }
};

const show_magicians = (_names: string[]) => {
  _names.forEach((item) => {
    console.log(item);
  });
};

make_great();
show_magicians(names);
