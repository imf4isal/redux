import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const show = useSelector(state => state.ui.showCart);
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Layout>
      {show && quantity > 0 && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
