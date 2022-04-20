import {StyleSheet,View,Text,ScrollView} from 'react-native';

import ProfileIcon from '../components/ProfileIcon';
import { useGlobalContext } from '../context/context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ProfileScreen = () => {
    const {username} = useGlobalContext();
    
    return(
        
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.profileHorizontal}>
                <ProfileIcon iconSize={90} isSidebar={false}/>
                <Text style={styles.profileHeaderText}>{username? username:Guest}</Text>
            </View>
            <Text style={styles.profileMediumText}>Pronouns</Text>
            <View style={styles.profileHorizontal}>
                <MaterialCommunityIcons name='cake-variant' size={45} color={'white'} />
                <Text style={styles.profileMediumText}>Cake Day</Text>
            </View>
            <Text style={styles.profileSmallText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra sit amet aliquam id.
            </Text>
            <Text style={styles.profileMediumText}>Recent Comments</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
    profileHorizontal:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    profileHeaderText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    profileLabelText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    profileMediumText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    profileSmallText:{
        fontSize: 20,
        color: 'white',
    },
})
export default ProfileScreen;