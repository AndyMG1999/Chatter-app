import {StyleSheet,View,Text,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ProfileIcon from '../components/ProfileIcon';
import { useGlobalContext } from '../context/context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ProfileScreen = () => {
    const {username} = useGlobalContext();
    
    return(
        
        <View style={styles.screen}>
            <ScrollView style={styles.scrollview}>
            <LinearGradient
            // Background Linear Gradient
            colors={['rgba(255, 77, 0, 1)', 'rgba(255, 234, 0, 0.25)']}
            start={{x:0,y:0}}
            end={{x:1,y:1}}
            >
            <View style={styles.profileHorizontal}>
                <ProfileIcon iconSize={90} isSidebar={false}/>
                <Text style={styles.profileHeaderText}>{username? username:Guest}</Text>
            </View>
            <View style={styles.profileHorizontal}>
                <MaterialCommunityIcons name='gender-transgender' size={40} color={'orange'} />
                <Text style={styles.profileMediumText}>XX/XXX (Pronouns)</Text>
            </View>
            <View style={styles.profileHorizontal}>
                <MaterialCommunityIcons name='cake-variant' size={40} color={'orange'} />
                <Text style={styles.profileMediumText}>MM/DD/YYYY (Cake Day)</Text>
            </View>
            <Text style={styles.profileSmallText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra sit amet aliquam id.
            </Text>
            <Text style={styles.profileMediumText}>Recent Comments</Text>
            </LinearGradient>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
    scrollview:{
        alignSelf: 'center',
        width: '96%',
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