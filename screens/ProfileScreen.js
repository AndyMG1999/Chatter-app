import {StyleSheet,View,Text} from 'react-native';

const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
})
export default ProfileScreen;