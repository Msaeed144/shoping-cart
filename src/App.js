import './App.css';
import { Switch , Redirect ,Route } from 'react-router-dom/cjs/react-router-dom.min';
//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Switch>
            <Route path='/products/:id'component={ProductDetails} />
            <Route path='/products' component={Store} />
            <Redirect to='products' />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
