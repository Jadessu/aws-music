import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify"
import awsconfig from "./aws-exports"
import './App.css';
Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>
       <h2> My Amplify App</h2>
       <p>This is mu amplify solution to the codebase</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
