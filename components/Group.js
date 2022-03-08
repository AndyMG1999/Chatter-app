import {StyleSheet,View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native'
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
            <ImageBackground style={styles.groupBanner} imageStyle={styles.groupBanner} source={{uri:groupBannerUri}} resizeMode='cover' >
            <View style={styles.groupBannerView}>
            <Text style={styles.groupTitle}>{simplifyNumber(groupFollowers)} Chatters</Text>
            <TouchableOpacity onPress={()=>{}}><MaterialCommunityIcons name='plus' size={50} color='white' /></TouchableOpacity>
            </View>
            </ImageBackground>
            <Text style={styles.groupTitle}>{groupName}</Text>
            <Text style={styles.groupDetails}>{groupDescription}</Text>
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
        paddingTop: 5,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.95)',
    },
    groupBanner:{
        width:'100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    groupBannerView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
    },
    groupDetails:{
        fontSize: 20,
        paddingLeft: 5,
        paddingVertical: 5,   
        color: 'rgba(255,255,255,0.9)',
    },
});

export default Group;