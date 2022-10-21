
const weirdSongs = ['My Time', 'Cabinet Man', 'Sudno', 'rayquaza ex'];
const convSongs = ['1989', 'The Bidding', '6up 5oh Cop-Out'];
const mehSongs = ['You Are the One']
/* without the ifs you'd need to add a song to every genre every time you wanted to add a song. 
also, sadly, this is not easily expandable. genres have to be hardcoded (for now) and i don't see a way of not. */
const pushToAll = (weird, conv, meh) => {
  if (weird) {
    weirdSongs.push(weird);
  }
  if (conv) {
    convSongs.push(conv);
  }
  if (meh) {
    mehSongs.push(meh);
  }
}
//last chance to change the "genres" of music before it becomes one
pushToAll();

//combines all arrays of songs
let allSongs = weirdSongs.concat(convSongs);

//i'm doing a global random number instead of a local one because it lets me sync up the... everything.
let randomSongNumber = Math.floor(Math.random()*allSongs.length);
//probably leave this at the end
console.log('You should listen to '+allSongs[randomSongNumber]+'...');
//without the +1 it looks off (to non js users)
console.log('...which is #'+[randomSongNumber+1]+' in the playlist.');
//spotify link, lol
console.log('Playlist here: https://open.spotify.com/playlist/1zs7MMMuwt5W3iOvG38p1z?si=c44eae1dca10481e&pt=6e624ee7be1093a543fe59268a8dc849')
//one of the debug things (make sure to add all of the songs)
//  console.log('DEBUG ARRAYS '+weirdSongs+'  '+convSongs+'  '+mehSongs)
//  console.log('DEBUG BIG ARRAY  '+weirdSongs+'  '+convSongs+'  '+mehSongs)