import { StyleSheet,View,Image,TouchableOpacity } from "react-native";

const ProfileIcon = ({iconSize}) => {
    const styles = StyleSheet.create({
        userIconBackground: {
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

    return(
        <View style={styles.userIconBackground}>
            <TouchableOpacity>
                <Image resizeMode='cover' style={styles.profileImage} source={{uri:'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'}} />
            </TouchableOpacity>
        </View>
    );

}



export default ProfileIcon;