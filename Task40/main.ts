const make_album = (
  artistName: string,
  albumTitle: string,
  numberOftracks?: number
) => {
  const obj = {
    artistName,
    albumTitle,
  };

  if (numberOftracks) {
    obj["numberOftracks"] = numberOftracks;
  }

  return obj;
};

console.log(make_album("John", "Johns album"));
console.log(make_album("Susan", "Susans album"));
console.log(make_album("Alex", "Alexs album", 10));
