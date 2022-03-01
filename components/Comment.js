import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Comment = ({id,postedBy,comment,numberOfLikes,postedOn,numberOfReplies,getReplies,commentObject}) => {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.postedByText}>{postedBy}</Text>
            <Text style={styles.commentText}>{comment}</Text>
            <View style={styles.likeReplyContainer}>
                <TouchableOpacity>
                    <View style={styles.likeReplyContainer}>
                    <Text style={styles.likeReplyText}>{numberOfLikes}</Text>
                    <MaterialCommunityIcons name='heart-outline' size={30} color='white' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>getReplies(id,commentObject)}>
                    {numberOfReplies>0? 
                    <View style={styles.likeReplyContainer}>
                    <Text style={styles.likeReplyText}>{numberOfReplies}</Text>
                    <MaterialCommunityIcons name='comment-text-outline' size={30} color='white' />
                    </View>:
                    <MaterialCommunityIcons name='comment-text-outline' size={30} color='white' />}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postedByText:{
        fontSize: 19,
        paddingLeft: 2,
        color: 'white',
        fontWeight: 'bold',
    },
    commentText:{
        fontSize: 18,
        paddingLeft: 5,
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
        backgroundColor: 'rgb(82, 132, 161)'
    },
    likeReplyContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    likeReplyText:{
        fontSize: 20,
        color:'white',
    },
})

export default Comment;