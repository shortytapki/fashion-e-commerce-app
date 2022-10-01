import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './Navigation.styles.scss';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { DropdownContext } from '../../contexts/dropdown.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(DropdownContext);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
