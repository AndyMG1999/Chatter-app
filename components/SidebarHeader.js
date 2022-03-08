import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import ProfileIcon from './ProfileIcon';

const SidebarHeader = ({toggleSidebar}) => {
    const iconSize = 60;

    return (
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255, 77, 0, 1)', 'rgba(255, 234, 0, 1)']}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        >
            <View style={styles.sidebarHeader}>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}><TouchableOpacity onPress={()=>toggleSidebar()}><MaterialCommunityIcons name='chevron-left' size={iconSize} color='white' /></TouchableOpacity></View>
                <View style={{flexDirection:'row',alignItems:'baseline'}}>
                <ProfileIcon iconSize={70}/>
                <Text style={styles.sidebarTitleText}>Guest</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    sidebarHeader: {
        paddingTop: '15%',
        borderColor: 'white',
        borderBottomWidth: 3,
    },
    sidebarTitleText: {
        fontSize: 28,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default SidebarHeader;