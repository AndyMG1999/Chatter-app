import { StyleSheet,View,Image,TouchableOpacity } from "react-native";

import { useGlobalContext } from "../context/context";

const ProfileIcon = ({iconSize}) => {
    const styles = StyleSheet.create({
        userIconBackground: {
            alignSelf: 'baseline',
            borderRadius: iconSize,
            borderWidth: 3,
            borderColor: 'grey',
            margin: 6,
            backgroundColor: 'grey',
        },
        profileImage: {
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize,
        },
    })

    const {switchToProfile} = useGlobalContext();

    return(
        <View style={styles.userIconBackground}>
            <TouchableOpacity onPress={()=>{switchToProfile()}}>
                <Image resizeMode='cover' style={styles.profileImage} source={{uri:'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'}} />
            </TouchableOpacity>
        </View>
    );

}



export default ProfileIcon;