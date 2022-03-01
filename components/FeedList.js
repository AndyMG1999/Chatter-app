import {StyleSheet,View,Button,FlatList} from 'react-native';

import PostSummary from './PostSummary';

const FeedList = ({data,getPostInfo}) => {
    const renderItem = ({item}) => {
        return <PostSummary id={item.id}  groupName={item.groupName} postedBy={item.postedBy} title={item.postTitle} image={item.postImageUrl} details={item.postDetails} numberOfLikes={item.numberOfLikes} getPostInfo={getPostInfo}/>
}
    
    return (
        <View style={styles.FeedList}>
            <FlatList 
            data={data}
            ListHeaderComponent={()=><Button title='Test' color={'orange'} />}
            renderItem={renderItem}
            keyExtractor={post=>post.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    FeedList:{
        flex:1,
    },
});

export default FeedList;