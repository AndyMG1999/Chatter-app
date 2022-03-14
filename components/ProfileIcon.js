import { StyleSheet,View,Image,TouchableOpacity } from "react-native";

import { useGlobalContext } from "../context/context";

const ProfileIcon = ({iconSize,isSidebar}) => {
    const styles = StyleSheet.create({
        userIconBackground: {
            alignSelf: 'baseline',
            borderRadius: iconSize,
            borderWidth: 3,
            borderColor: 'white',
            margin: 6,
            backgroundColor: 'white',
        },
        profileImage: {
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize,
        },
    })
    const {switchToProfile,userProfileImage} = useGlobalContext();
    const displayedProfile = userProfileImage? require('../assets/profile-images/default-user-image.png'):require('../assets/profile-images/default-user-image.png');
    
    return(
        <View style={styles.userIconBackground}>
            <TouchableOpacity onPress={()=>{switchToProfile(isSidebar)}}>
                <Image resizeMode='cover' style={styles.profileImage} source={displayedProfile} />
            </TouchableOpacity>
        </View>
    );

}



export default ProfileIcon;