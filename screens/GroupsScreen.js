import {StyleSheet,View,Text} from 'react-native';

import GroupList from '../components/GroupList';

const GroupsScreen = ({groupData}) => {
    return (
        <View style={styles.screen}>
            <GroupList groupData={groupData}/>
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