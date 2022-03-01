import {StyleSheet,View,Text,Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Post = ({currentPost}) => {
    const {groupName,postedBy,postTitle:title,postImageUrl,postDetails:details,numberOfLikes} = currentPost[0];
    
    return(
        <View style={styles.postContainer}>
            <Text style={styles.postSubtitle}>{groupName}</Text>
            <Text style={styles.postSubtitle}>{postedBy}</Text>
            <Text style={styles.postTitle}>{title}</Text>
            {postImageUrl && <Image style={styles.postImage} source={{uri:postImageUrl}} resizeMode='contain' />}
            {<Text style={styles.postDetails}>{details}</Text>}
            <View style={styles.likeCommentContainer}>
            <View style={styles.likeCommentContainer}>
            <Text style={styles.postSubtitle}>{numberOfLikes}</Text>
            <MaterialCommunityIcons name='heart-outline' size={30} color='white' />
            </View>
            <MaterialCommunityIcons name='comment-text-outline' size={30} color='white' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        marginTop: 15,
        width: '100%',
        alignSelf: 'center',

        backgroundColor: 'rgb(62, 104, 128)',
    },
    likeCommentContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    postTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    postSubtitle:{
        color: 'white',
        fontSize: 18,
    },
    postDetails:{
        color: 'white',
        fontSize: 20,
    },
    postImage:{
        width:'100%',
        height: 200,
    },
})

export default Post;