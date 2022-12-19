const songs = require("./data");

//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
  let result = array.map((element) => element.artist);
  //console.log(result);
  return result;
}

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
  let songs = array.filter((element) => element.artist === artist);
  let result = songs.filter((element) => element.title);
  //consolo.log(result);
  return result;
}

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
  let sorted = array.map((element) => element.title).sort();
  return sorted.slice(0, 10);
  //Write your code here
}

//Exercise 4: Order by year, ascending
function orderByYear() {
  //Write your code here
}

//Exercise 5: Filter songs by genre
function songsByGenre() {
  //Write your code here
}

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
  //Write your code here
}

//Exercise 7: Get the longest song
function getLongestSong() {
  //Write your code here
}

//Exercise 8: Get the shortest song
//Write the getShortestSong() function

if (typeof module !== "undefined") {
  module.exports = {
    getAllArtists,
    getSongsFromArtist,
    orderAlphabetically,
    orderByYear,
    songsByGenre,
    minutsToSeconds,
    getLongestSong,
  };
}
