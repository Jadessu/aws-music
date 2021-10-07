import { useState, useEffect } from "react";
import { listSongs} from "./graphql/queries"
import SongList from "./SongList";

import React from "react";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";
Amplify.configure(awsconfig);

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2> My Amplify App</h2>
       
      </header>
      <SongList/>
    </div>
  );
}

export default withAuthenticator(App);
