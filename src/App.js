import React, { Component } from 'react';
import { BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import './App.css';

import Home from './routes/home/Index';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* Switch 只要匹配到立刻停止
        exact精确匹配 */
      }
      <Switch>
        <Route path="/" exact component={Home}/>
        
      </Switch>   
      </BrowserRouter>
    );
  }
}

export default App;



