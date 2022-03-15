import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Post = lazy(() => import('./pages/posts'));
const DetailPost = lazy(() => import('./pages/posts/detail'));
const Test = lazy(() => import('./pages/test'));

function App() {
  return (
    <Router>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/" exact render={() => (<Post/>)} />
            <Route path="/detail/:id" exact render={() => (<DetailPost/>)} />
            <Route path="/test" exact render={() => (<Test/>)} />
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
