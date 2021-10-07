import { useState, useEffect } from "react";
import { listSongs } from "./graphql/queries";

import React from "react";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
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
                   <h1> {song.title}</h1>
               )
            }) }
        </div>
    )
}

export default SongList