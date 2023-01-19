import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { selectIsCartOpen } from '../../store/cart/cart.select';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpened = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  return (
    <>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isOpened && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
