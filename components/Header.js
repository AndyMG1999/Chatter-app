import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileIcon from './ProfileIcon';
import { useGlobalContext } from '../context/context';

const Header = () => {
    const {showPost,closePost,toggleSidebar} = useGlobalContext();
    
    const returnHeaderType = () => {
        if(showPost === false){
            return(
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{toggleSidebar()}}><MaterialCommunityIcons size={55} name='equal' color={'white'} /></TouchableOpacity>
                <MaterialCommunityIcons size={55} name='emoticon-lol-outline' color={'white'} />
                <ProfileIcon iconSize={40} isSidebar={false} />
            </View>
            )
        }
        else if(showPost === true){
            return(
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{closePost()}}><MaterialCommunityIcons name='chevron-left' size={60} color='white' /></TouchableOpacity>
            </View>
            )
        }
    }

    return(
        returnHeaderType()
    );
}

const styles = StyleSheet.create({
    header: {  
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,

        height: '10%',
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(62, 104, 128)',
    },
    headerLogo: {
        fontSize: 30,
        color: 'white',
    },
    headerBtnText: {
        color: 'white',
        fontSize: 60,
        paddingHorizontal: 15,
    },
})

export default Header;