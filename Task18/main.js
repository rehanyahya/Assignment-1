var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Malaysia", "Dubai", "Singapore", "Bangkok", "Australia"];
console.log(places);
var copyPlaces = __spreadArray([], places, true);
console.log(copyPlaces.sort());
console.log(places);
console.log(copyPlaces.reverse());
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.reverse());
