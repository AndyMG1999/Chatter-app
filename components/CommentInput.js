import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';

const CommentInput = () => {
    return(
    <View style={styles.commentContainer}>
        <View style={styles.textInputContainer}>
        <TextInput autoCorrect={true} style={styles.commentInput} placeholderTextColor={'rgba(255,255,255,0.6)'} placeholder='enter a comment...'/>  
        </View>
        <TouchableOpacity><Text style={styles.postText}>{'Send'}</Text></TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    commentContainer:{
        position: 'absolute',
        bottom:0,
        left:0,
        right:0,
        marginBottom: 3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        backgroundColor: 'rgba(82, 132, 161,1)',
        borderColor: 'white',
        borderWidth: 1.1,
        borderRadius: 10,
    },
    textInputContainer:{
        width: '80%',
    },
    commentInput:{
        fontSize: 20,
        color: 'white',
    },
    postText:{
        fontSize: 25,
        color: 'rgba(255,255,255,0.9)',
        paddingRight: 0,
    },
});

export default CommentInput;