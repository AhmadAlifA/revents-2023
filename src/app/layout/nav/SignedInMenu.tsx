import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAppSelector } from "../../store/strore";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export default function SignedInMenu() {
    const {currentUser} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    async function handlleSignOut(){
        await signOut(auth)
        navigate('/');
    }

  return (
    <Menu.Item position="right">
        <Image avatar spaced='right' src={currentUser?.photoURL || '/user.png'}/>
        <Dropdown pointing='top left' text={currentUser?.displayName as string}>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/createEvent' text='Create event' icon='plus'/>
                <Dropdown.Item text='My profile' icon='user'/>
                <Dropdown.Item as={Link} to='/account' text='My account' icon='settings'/>
                <Dropdown.Item onClick={handlleSignOut} text='Sign out' icon='power'/>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
 )
}
