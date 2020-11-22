import {StyledNavbar} from './Styles';
import {useAuth0} from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';  

const Navbar = () => {
    const {isAuthenticated} = useAuth0()
    return (
      <StyledNavbar>
       { isAuthenticated ? <LogoutButton/> :  <LoginButton/> }  
      </StyledNavbar>
    )
}

export default Navbar