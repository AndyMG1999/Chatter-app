import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const PostSummary = ({id,groupName,postedBy,title,image,details,numberOfLikes,getPostInfo}) => {
    const simplifyNumber = (number) => {
        let numberFloat = parseFloat(number);
        let numberString = "";
        if(number < 1000) return number;
        numberFloat/=1000;
        if(number >= 1000) numberString = Math.floor(numberFloat*100)/100 + "k";
        numberFloat/=1000;
        if(number >= 1000000) numberString = Math.floor(numberFloat*100)/100 + "M";
        numberFloat/=1000;
        if(number >= 1000000000) numberString = Math.floor(numberFloat*100)/100 + "B";
        return numberString;
    }
    
    return (
    <View style={styles.post}>
    <TouchableOpacity onPress={()=>{getPostInfo(id)}}>
        <Text style={styles.postGroup}>{groupName}| {postedBy}</Text>
        <Text style={styles.postTitle}>{title}</Text>
        {image && <Image style={styles.postImage} source={{uri:image}} resizeMode='contain' />}
        {details && <Text style={styles.postDetails}>{details}</Text>}
        <View style={styles.postButtons}>
            <View style={styles.likeBtnContainer}>
            <TouchableOpacity style={styles.likeBtnContainer}>
                <Text style={styles.postDetails}>{simplifyNumber(numberOfLikes)}</Text>
                <MaterialCommunityIcons name="heart-outline" size={30} color='white' />
            </TouchableOpacity>
            </View>
            <TouchableOpacity><MaterialCommunityIcons name="comment-text-outline" size={30} color='white' /></TouchableOpacity>
        </View>
    </TouchableOpacity>
    </View>

    )
}

const styles = StyleSheet.create({
    post:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        marginTop: 20,
        marginBottom: 30,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,

        backgroundColor: 'rgb(62, 104, 128)',
    },
    postGroup:{
        fontSize: 16,
        paddingLeft: 5,
        color: 'rgba(255,255,255,0.7)',
    },
    postTitle:{
        fontSize: 25,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.95)',
    },
    postImage:{
        width:'100%',
        height: 200,
    },
    postDetails:{
        fontSize: 18,
        paddingLeft: 5,
        color: 'rgba(255,255,255,0.9)',
    },
    postButtons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    likeBtnContainer:{
        flexDirection: 'row',
    },
});

export default PostSummary;