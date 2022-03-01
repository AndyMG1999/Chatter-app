import {StyleSheet,View} from 'react-native';

import Header from '../components/Header';
import FeedList from '../components/FeedList';
import PostScreen from './PostScreen';

const HomeScreen = ({showPost,data,getPostInfo,currentPost,currentComments,closePost,currentMainComment,currentReplies,getReplies,showReplies,closeReplies}) => {    
    return(
        <View style={styles.screen}>
            <Header showPost={showPost} closePost={closePost}/>
            <FeedList data={data} getPostInfo={getPostInfo}/>
            <PostScreen showPost={showPost} currentPost={currentPost} currentComments={currentComments} currentMainComment={currentMainComment} currentReplies={currentReplies} getReplies={getReplies} showReplies={showReplies} closeReplies={closeReplies}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
})

export default HomeScreen;