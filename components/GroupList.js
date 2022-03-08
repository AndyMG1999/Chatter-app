import {StyleSheet,View,FlatList} from 'react-native';

import Group from './Group';

const GroupList = ({groupData}) => {
    const renderItem = ({item}) => {
        return <Group id={item.id}  groupName={item.groupName} groupDescription={item.groupDescription} groupFollowers={item.groupFollowers} groupBannerUri={item.groupBannerUri}/>
}
    
    return (
        <View style={styles.FeedList}>
            <FlatList
            data={groupData}
            renderItem={renderItem} 
            keyExtractor={group=>group.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    FeedList:{
        flex:1,
    },
});

export default GroupList;