import { combineReducers } from 'redux';

const songsReducer = (  ) => {
    return [
        {
            title: 'paagal',
            duration: '4:05'
        },
        {
            title: 'At my worst',
            duration: '3:05'
        },
        {
            title: 'gurenge',
            duration: '5:05'
        },
        {
            title: 'you say run',
            duration: '6:05'
        }
    ];
};

const selectedSongReducer = ( selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

};


export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
});

