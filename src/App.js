import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import firebase from 'firebase';


import './App.css';
import LateSelection from './Pages/LateSelection';



function App() {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBwODzo-rRT_79WkgARr7Rwh6WMsVN-iIE",
      authDomain: "unapecproyect.firebaseapp.com",
      projectId: "unapecproyect",
      storageBucket: "unapecproyect.appspot.com",
      messagingSenderId: "1072879441533",
      appId: "1:1072879441533:web:0550fd4c337f1e8ce04314",
      measurementId: "G-10N45F51C6"
    });
  }
  firebase.analytics();
  
  return (
    <Router>
      <Switch>

        <Route path="/Tardia" component={LateSelection} />

        <Route path="/" component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
