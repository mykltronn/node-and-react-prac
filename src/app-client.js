// export default class AppRoutes extends React.Component {
//   render() {
//     return (
//       <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
//     );
//   }
// }

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout.js';
import IndexPage from './components/IndexPage.js';
import AthletePage from './components/AthletePage.js';
import NotFoundPage from './components/NotFoundPage.js';


ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Switch>
              <Route exact path="/" component={IndexPage}/>
              <Route path="athlete/:id" component={AthletePage}/>
              <Route path="*" component={NotFoundPage}/>
            </Switch>
        </Layout>
    </BrowserRouter>
    , document.getElementById('main')
);
