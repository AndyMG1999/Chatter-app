import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GroupsScreen from '../screens/GroupsScreen';
import SigninScreen from "../screens/SigninScreen";
import { useGlobalContext } from "../context/context";

const ScreenRouter = () => {
    const {currentPage} = useGlobalContext();
    if (currentPage === 'PROFILE') return <ProfileScreen />
    else if (currentPage === 'GROUPS') return <GroupsScreen />
    else if (currentPage === 'SIGNIN') return <SigninScreen />
    else return <HomeScreen />
}

export default ScreenRouter;