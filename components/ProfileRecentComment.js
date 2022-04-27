import {View,Text,StyleSheet} from 'react-native';

import ProfileIcon from './ProfileIcon';

const ProfileRecentComment = () => {
    return(
        <View style={styles.recentComment}>
                <View style={styles.profileHorizontal}>
                <ProfileIcon iconSize={30} isSidebar={false}/>
                <Text style={styles.recentCommentTimestamp}>17d</Text>
                </View>
                <Text style={styles.recentCommentSmallText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    profileHorizontal:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    recentComment:{
        marginVertical: 6,
        alignSelf: 'center',
        borderRadius: 10,
        width: '97%',
        backgroundColor: 'rgb(62, 104, 128)',
    },
    recentCommentTimestamp:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    recentCommentSmallText:{
        fontSize: 20,
        padding: 5,
        color: 'white',
    },
})

export default ProfileRecentComment;