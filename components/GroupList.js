import {StyleSheet,View} from 'react-native';

import Group from './Group';

const GroupList = ({groupData}) => {
    const renderItem = ({item}) => {
        return <PostSummary id={item.id}  groupName={item.groupName} postedBy={item.postedBy} title={item.postTitle} image={item.postImageUrl} details={item.postDetails} numberOfLikes={item.numberOfLikes} getPostInfo={getPostInfo}/>
}
    
    return (
        <View style={styles.FeedList}>
            <Group />
        </View>
    )
}

const styles = StyleSheet.create({
    FeedList:{
        flex:1,
    },
});

export default GroupList;