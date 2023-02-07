// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let albumCovers = ["https://images.genius.com/10068e8dc0170620a2e6787cb66de839.1000x1000x1.jpg", "https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f", "https://images.genius.com/dc3ff58e1a397c3f98087fa5e789af2c.1000x1000x1.jpg", "https://images.genius.com/904c0b444e86eb290bf532a7a7c07560.1000x1000x1.jpg", "http://images.genius.com/0c05d06230f08c037472432e962228c8.1000x1000x1.jpg"]
let songNames = ["Chosen", "All I Want For Christmas Is You", "Floral and Fading", "Tangled in the Great Escape", "She-Wrecks"]
let songArtists = ["The Living Tombstone", "Mariah Carey", "Pierce the Veil", "Pierce the Veil", "Bear Ghost"]
let songLinks = ["https://www.youtube.com/watch?v=aJgOdZN4HcA", "https://www.youtube.com/watch?v=aAkMkVFwAoo", "https://www.youtube.com/watch?v=wON8K9cWKQ4", "https://www.youtube.com/watch?v=vknw3Uy12-0", "https://www.youtube.com/watch?v=W2jg4uZ5OYA"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let userImage = image;
  let userSong = songName;
  let userArtist = artist;
  let userLink = songLink;
  console.log(userImage, userSong, userArtist, userLink);

  // task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  albumCovers.forEach(function(album) {
    console.log(album);
    displayImage.insertAdjacentHTML('beforeend', `<img src='${album}'/>`)
  })
  songNames.forEach(function(name) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${name}</p>`)
  })
  songArtists.forEach(function(artist) {
    displayArtist.insertAdjacentHTML('beforeend', `<p>${artist}</p>`)
  })
  songLinks.forEach(function(link) {
    displayLink.insertAdjacentHTML('beforeend', `<a href='${link}'>Listen to the song here...</a>`)
  })

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
