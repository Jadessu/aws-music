import { useState, useEffect } from "react";
import { listSongs } from "./graphql/queries";
import { Paper, IconButton} from "@material-ui/core"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import FavoriteIcon from "@material-ui/icons/Favorite"

import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import "./App.css";

function SongList(){
     const [songs, setSongs] = useState([]);

     const fetchSongs = async () => {
       try {
         const songData = await API.graphql(graphqlOperation(listSongs));
         const songList = songData.data.listSongs.items;
         console.log("song list", songList);
         setSongs(songList);
       } catch (error) {
         console.log("error on fetching songs", error);
       }
     };

     useEffect(() => {
       fetchSongs();
     }, []);

    return (
        <div className = "songList">
            {songs.map((song, idx) => {
               return (
                   <Paper variant="outlined" elevation={2} key={`song${idx}`}>
                       <div className = "songCard">
                           <IconButton aria-label="play">
                               <PlayArrowIcon/>
                           </IconButton>
                           <div>
                               <div className="songTitle">{song.title}</div>
                               <div className="songOwner">{song.owner}</div>
                           </div>
                           <div>
                               <IconButton aria-label="like">
                                   <FavoriteIcon/>
                               </IconButton>
                               {song.likes}
                           </div>
                           <div className="songDescription">{song.description}</div>
                       </div>
                   </Paper>
               )
            }) }
        </div>
    )
}

export default SongList