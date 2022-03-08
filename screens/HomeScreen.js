import {StyleSheet,View} from 'react-native';

import FeedList from '../components/FeedList';
import PostScreen from './PostScreen';

import { useGlobalContext } from '../context/context';

const HomeScreen = () => {    
    const {showPost,postData,getPostInfo,currentPost,currentComments,closePost,currentMainComment,currentReplies,getReplies,showReplies,closeReplies,toggleSidebar} = useGlobalContext();
    return(
        <View style={styles.screen}>
            <FeedList data={postData} getPostInfo={getPostInfo}/>
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