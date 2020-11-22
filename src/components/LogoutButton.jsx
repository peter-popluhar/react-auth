import {useAuth0} from '@auth0/auth0-react';
import {Button} from './Styles';

const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <Button onClick={() => logout()}>
            Log out
        </Button>
    )
}

export default LogoutButton