import {StyleSheet,View} from 'react-native';

import Group from './Group';

const GroupList = ({groupData}) => {
    const renderItem = ({item}) => {
        return <PostSummary id={item.id}  groupName={item.groupName} postedBy={item.postedBy} title={item.postTitle} image={item.postImageUrl} details={item.postDetails} numberOfLikes={item.numberOfLikes} getPostInfo={getPostInfo}/>
}
    
    return (
        <View style={styles.FeedList}>
            <Group groupName={'Group Title'} groupDescription={'This is a test group description.'} groupFollowers={12724} groupBannerUri={'http://images6.fanpop.com/image/photos/39600000/Sparkle-Stars-Profile-Banner-smile19-39654242-946-250.jpg'}/>
            <Group groupName={'Group Title'} groupDescription={'This is a test group description.'} groupFollowers={12724} groupBannerUri={'https://ze-robot.com/images/source/28715.jpg'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    FeedList:{
        flex:1,
    },
});

export default GroupList;