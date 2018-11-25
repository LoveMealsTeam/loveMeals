import React, { Component } from 'react';

//mode
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import {routes} from "./router/router";

//components
import Main from "./components/main/main";


class App extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Switch>
              {
                routes.map((item,index)=>{
                  // 精准匹配
                  if(item.exact){
                    return (
                        <item.component
                          key={index}
                          path={item.path}
                          exact={item.exact}
                          component={item.componet}
                        />
                    )
                  }

                  //其他路由
                   return (
                       <item.component
                           key={index}
                           path={item.path}
                           exact={item.exact}
                           component={item.componet}
                       />
                   )
                })
              }
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App;
