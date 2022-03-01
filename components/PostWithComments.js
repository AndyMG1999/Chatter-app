import {StyleSheet,View,Text,FlatList,Modal,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Comment from './Comment';
import Post from './Post';
import CommentInput from './CommentInput';
import PostFooter from './PostFooter';

const PostWithComments = ({currentPost,currentComments,currentMainComment,currentReplies,getReplies,showReplies,closeReplies}) => {
    const commentsWithoutReplies = currentComments.filter((comment)=>comment.replyingTo === null);

    const getNumberOfReplies = (id) => {
        const numberOfReplies = currentComments.filter((comment)=>comment.replyingTo === id).length;
        console.log('number of replies: ',numberOfReplies);
        return numberOfReplies;
    }

    const handleCommentListDisplay = () => {
        return(
        <View style={styles.commentList}>
            <FlatList 
            data={commentsWithoutReplies}
            ListHeaderComponent={()=><Post currentPost={currentPost} />}
            ListEmptyComponent={()=>(<Text style={styles.noCommentsText}>Be the first to comment!</Text>)}
            ListFooterComponent={()=><PostFooter />}
            renderItem={({item})=><Comment id={item.id} postedBy={item.postedBy}  numberOfReplies={getNumberOfReplies(item.id)} comment={item.comment} numberOfLikes={item.numberOfLikes} postedOn={item.postedOn} getReplies={getReplies} commentObject={{...item}}/>}
            keyExtractor={comment=>comment.id}
            />
            {showReplies && (
            <Modal transparent={true} animationType='fade'>
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
                <View style={styles.commentList}>
                <TouchableOpacity onPress={()=>closeReplies()}><MaterialCommunityIcons name='arrow-left' size={40} color='white' /></TouchableOpacity>
                <FlatList 
                data={currentReplies}
                ListHeaderComponent={()=><Post currentPost={[{postedBy: currentMainComment.postedBy, postDetails: currentMainComment.comment}]} />}
                ListEmptyComponent={()=>(<Text style={styles.noCommentsText}>Be the first to comment!</Text>)}
                ListFooterComponent={()=><PostFooter />}
                renderItem={({item})=><Comment id={item.id} postedBy={item.postedBy} comment={item.comment} numberOfLikes={item.numberOfLikes} postedOn={item.postedOn} getReplies={getReplies} commentObject={{...item}}/>}
                keyExtractor={comment=>comment.id}
                />
                </View>
                <CommentInput />
                </View>
            </Modal>)}
        </View>
        );
    }

    return handleCommentListDisplay();
}

const styles = StyleSheet.create({
    commentList:{
        width: '96%',
        alignSelf: 'center',
        paddingTop: 18,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'rgb(62, 104, 128)',
    },
    commentText:{
        fontSize: 18,
        color: 'white',
    },
    commentContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
        marginTop: 20,
        backgroundColor: 'rgb(82, 132, 161)',
    },
    noCommentsText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
})

export default PostWithComments;