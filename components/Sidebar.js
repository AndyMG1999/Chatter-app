import { StyleSheet,Modal,View,Text,TouchableOpacity,TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Sidebar = ({showSidebar,toggleSidebar}) => {
    const iconSize = 50;
    
    return(
        <Modal visible={showSidebar} transparent={true} animationType={'fade'}>
        <View style={styles.container}>
            <View style={styles.sidebarContainer}>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}><TouchableOpacity onPress={()=>toggleSidebar()}><MaterialCommunityIcons name='close' size={iconSize} color='white' /></TouchableOpacity></View>
                <Text style={styles.sidebarTitleText}>chatter</Text>
                <TouchableHighlight onPress={()=>{}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='home-account' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>home</Text></View></TouchableHighlight>
                <TouchableHighlight onPress={()=>{}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='account' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>profile</Text></View></TouchableHighlight>
                <TouchableHighlight onPress={()=>{}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='account-group' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>groups</Text></View></TouchableHighlight>
                <TouchableHighlight onPress={()=>{}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='cog' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>settings</Text></View></TouchableHighlight>
                <TouchableHighlight onPress={()=>{}} underlayColor={'rgba(0,0,0,0.4)'}><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='emoticon-excited' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>sign-in</Text></View></TouchableHighlight>                
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
        width: '65%',
        height: '100%',
        paddingTop: '10%',
        
        borderRightWidth: 2,
        borderColor: 'white',

        backgroundColor: 'rgb(82, 132, 161)',
    },
    sidebarButtonContainer: {
        flexDirection: 'row',
        alignContent: 'center',

        paddingLeft: 20,
        paddingVertical: 10,
    },
    sidebarButtonText: {
        fontSize: 35,
        fontWeight: 'bold',

        color: 'white',
    },
    sidebarTitleText: {
        fontSize: 50,
        paddingBottom: 40,
        textAlign: 'center',
        color: 'white',
    }
})

export default Sidebar;