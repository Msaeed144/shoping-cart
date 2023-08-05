import './App.css';
import { Switch , Redirect ,Route } from 'react-router-dom/cjs/react-router-dom.min';
//Components
import Store from './components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <ProductContextProvider>
      <Switch>
          <Route path='/products/:id'component={ProductDetails} />
          <Route path='/products' component={Store} />
          <Redirect to='products' />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
