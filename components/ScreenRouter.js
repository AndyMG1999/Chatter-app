import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GroupsScreen from '../screens/GroupsScreen'
import { useGlobalContext } from "../context/context";

const ScreenRouter = () => {
    const {currentPage} = useGlobalContext();
    if (currentPage === 'PROFILE') return <ProfileScreen />
    else if (currentPage === 'GROUPS') return <GroupsScreen />
    else return <HomeScreen />
}

export default ScreenRouter;