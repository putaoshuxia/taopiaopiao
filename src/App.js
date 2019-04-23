import React, { Component } from 'react';
import { BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import './App.css';

import Home from './routes/home/Index';
import User from './routes/user/Index';
import Detail from './routes/detail/Index';
import Seat from './routes/seat/Index';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* Switch 只要匹配到立刻停止
        exact精确匹配 */
      }
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user" exact component={User}/>
        <Route path="/detail" exact component={Detail}/>
        <Route path="/seat" exact component={Seat}/>
      </Switch>   
      </BrowserRouter>
    );
  }
}

export default App;



