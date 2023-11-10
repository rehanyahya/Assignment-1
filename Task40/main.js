var make_album = function (artistName, albumTitle, numberOftracks) {
    var obj = {
        artistName: artistName,
        albumTitle: albumTitle,
    };
    if (numberOftracks) {
        obj["numberOftracks"] = numberOftracks;
    }
    return obj;
};
console.log(make_album("John", "Johns album"));
console.log(make_album("Susan", "Susans album"));
console.log(make_album("Alex", "Alexs album", 10));
