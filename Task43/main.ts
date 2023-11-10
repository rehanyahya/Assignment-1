const names = ["John", "Susan", "Alex"];
const modifiedNames = make_great();

function make_great() {
  return names.map((item) => `${item} the Great`);
}

const show_magicians = (_names: string[]) => {
  _names.forEach((item) => {
    console.log(item);
  });
};

show_magicians(names);
show_magicians(modifiedNames);
