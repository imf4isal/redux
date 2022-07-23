import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>  
          <Route path="/products" exact>
            <Products />
          </Route>   
          <Route path="/products/:id" exact>
            <ProductsDetail />
          </Route> 
        </Switch>  
      </main>
    </Fragment>
  );
}

export default App;
