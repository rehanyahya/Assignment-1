const make_shirt = (
  size: string = "large",
  message: string = "I love TypeScript"
) => {
  console.log(
    `The size of shirt is ${size} and the message printed on shirt is \'${message}\'`
  );
};

make_shirt();
make_shirt("medium");
make_shirt("small", "My Shirt");
