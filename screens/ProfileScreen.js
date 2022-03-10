import {StyleSheet,View,Text,ScrollView} from 'react-native';

import ProfileIcon from '../components/ProfileIcon';
import { useGlobalContext } from '../context/context';

const ProfileScreen = () => {
    const {username} = useGlobalContext();
    
    return(
        
        <View style={styles.screen}>
            <ScrollView>
            <Text style={styles.profileLabelText}>My Profile</Text>
            <View style={styles.profileHeader}>
                <ProfileIcon iconSize={90} isSidebar={false}/>
                <Text style={styles.profileHeaderText}>{username? username:Guest}</Text>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
    profileHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    profileHeaderText:{
        fontSize: 40,
        color: 'white',
    },
    profileLabelText:{
        fontSize: 30,
        color: 'white',
    }
})
export default ProfileScreen;