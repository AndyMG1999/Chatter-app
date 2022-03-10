import { StyleSheet,Modal,View,Text,TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import SidebarHeader from "./SidebarHeader";
import { useGlobalContext } from "../context/context";
const Sidebar = () => {
    const iconSize = 50;
    const {userId,showSidebar,toggleSidebar,switchToHome,switchToGroups,switchToSignin,signUserOut} = useGlobalContext();

    return(
        <Modal visible={showSidebar} transparent={true} animationType={'fade'}>
        <View style={styles.container}>
            
            <View style={styles.sidebarContainer}>
                <SidebarHeader toggleSidebar={toggleSidebar}/>
                <TouchableHighlight onPress={()=>{switchToHome()}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='home-account' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>home</Text></View></TouchableHighlight>
                <TouchableHighlight onPress={()=>{switchToGroups()}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='account-group' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>groups</Text></View></TouchableHighlight>
                <TouchableHighlight onPress={()=>{}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='cog' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>settings</Text></View></TouchableHighlight>
                {userId? <TouchableHighlight onPress={()=>{signUserOut()}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='exit-to-app' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>sign-out</Text></View></TouchableHighlight>:
                <TouchableHighlight onPress={()=>{switchToSignin()}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='emoticon-excited' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>sign-in</Text></View></TouchableHighlight>}                
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    sidebarContainer: {
        width: '75%',
        height: '100%',
        
        borderRightWidth: 2,
        borderColor: 'white',

        backgroundColor: 'rgb(82, 132, 161)',
    },
    sidebarButtonContainer: {
        flexDirection: 'row',
        alignContent: 'center',

        paddingLeft: 20,
        paddingVertical: 14,
    },
    sidebarButtonText: {
        fontSize: 35,

        color: 'white',
    },
})

export default Sidebar;