import React, { Component } from 'react';
// import React, {Comp} from 'react';
import Compo from './Components/Compo';
import './App.css';
import Module from './Module';
import logo from'./assets/images/logo.png';
// import {afficheTaf} from './Eventapp';


class App extends Component {
    constructor() {
        super();
    }
    render(){
           return(
                  <div>
                         <Module/>
                         <div>
                                
                         </div>
                  </div>
           )
    }            
                    
                    
}

export default App;
