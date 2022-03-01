import {StyleSheet,View} from 'react-native';
import { useState,useEffect } from 'react';

import PostWithComments from '../components/PostWithComments';
import CommentInput from '../components/CommentInput';

const PostScreen = ({showPost,currentPost,currentComments,currentMainComment,currentReplies,getReplies,showReplies,closeReplies}) => {
    const [modalIsVisible,setModalIsVisible] = useState(false);
    useEffect(()=>{
        const shouldShowPostScreen = () => {
            if (showPost === true) setModalIsVisible(true);
            else setModalIsVisible(false);
        }
        shouldShowPostScreen();
    },[showPost])
    
    
    return(
        modalIsVisible && <View style={styles.screen}>
            <PostWithComments currentPost={currentPost} currentComments={currentComments} currentMainComment={currentMainComment} currentReplies={currentReplies} getReplies={getReplies} showReplies={showReplies} closeReplies={closeReplies}/>
            <CommentInput />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        top: 80,
        bottom:0,
        left:0,
        right: 0,
        
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default PostScreen;