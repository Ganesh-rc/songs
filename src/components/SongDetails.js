import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    if(!song){
        return <div>Select a song</div>
    }
    return (
        <div>
            Title:<div>{song.title}</div><br />
            Duration :<div>{song.duration}</div>
        </div>
        
        );

};
// the objects in return is sent as props to SongDetails
const mapStateToProps = (state) => {
    return {song: state.selectedSong} 
};

export default connect(mapStateToProps)(SongDetails);