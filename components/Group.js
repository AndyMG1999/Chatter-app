import {StyleSheet,View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Group = ({id,groupName,groupDescription,groupProfilePictureUri,groupBannerUri,groupFollowers}) => {
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
    <View style={styles.group}>
        <TouchableOpacity onPress={()=>{}}>
            <ImageBackground style={styles.groupBanner} source={{uri:'http://images6.fanpop.com/image/photos/39600000/Sparkle-Stars-Profile-Banner-smile19-39654242-946-250.jpg'}} resizeMode='cover' >
            <View>
            <Text style={styles.groupTitle}>12.7K Chatters</Text>
            </View>
            </ImageBackground>
            
            <Text style={styles.groupTitle}>Title</Text>
            <Text style={styles.groupDetails}>This is a test group description.</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    group:{
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
    groupTitle:{
        fontSize: 35,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.95)',
    },
    groupBanner:{
        width:'100%',
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    groupDetails:{
        fontSize: 20,
        paddingLeft: 5,
        color: 'rgba(255,255,255,0.9)',
    },
});

export default Group;