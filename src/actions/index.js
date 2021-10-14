// you are not restricted to name this file only "index.js", but very often you will come across such convention


// Action creator 
export const selectSong = (song) => {
    // returns an action
    return {
        type : 'SONG_SELECTED',
        payload: song

    }

};

// the above type of exporting is called named export
