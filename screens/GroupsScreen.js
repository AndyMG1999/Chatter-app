import {StyleSheet,View,Text} from 'react-native';

import GroupList from '../components/GroupList';
import { useGlobalContext } from '../context/context';

const GroupsScreen = () => {
    const {groupsData} = useGlobalContext();
    return (
        <View style={styles.screen}>
            <GroupList groupData={groupsData}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
});

export default GroupsScreen;