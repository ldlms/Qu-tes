const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [pisces, gemini, libra, aquarius];
const waterSigns = [scorpio, pisces];

/*  🏁 Add one final element to an array 
    Sagittarius is missing from fire signs please add it at the 
    END of the array and verify the result.
*/



fireSigns.push(sagittarius);



console.log(
  fireSigns[fireSigns.length - 1] === "♐"
    ? "Good Answer ✅"
    : "Wrong Answer ❌"
);


/* 🏁 Remove the last element of an array
      Sagittarius should not be on earth Signs, please remove 
      Sagittarius from the array, and verify the result.
*/



earthSigns.pop(sagittarius);

console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

/* 🏁 Remove one element at the begining of an array
      Pisces should not be on air Signs, please remove Pisces 
      from the array, and verify the result.
*/



airSigns.shift(pisces);

console.log(airSigns[0] !== "♓︎" ? "Good Answer ✅" : "Wrong Answer ❌");

/*  🏁 Add one element at the beginning of an array
    Cancer is missing from water signs please add it at the 
    BEGINNING of the array and verify the result.
*/



waterSigns.unshift(cancer);

console.log(waterSigns[0] === "♋" ? "Good Answer ✅" : "Wrong Answer ❌");