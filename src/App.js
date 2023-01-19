import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/Auth/Auth';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
