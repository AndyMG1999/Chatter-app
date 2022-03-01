import { StyleSheet,Modal,View,Text,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Sidebar = () => {
    const iconSize = 50;
    
    return(
        <Modal transparent={true} animationType={'fade'}>
        <View style={styles.container}>
            <View style={styles.sidebarContainer}>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}><TouchableOpacity><MaterialCommunityIcons name='close' size={iconSize} color='white' /></TouchableOpacity></View>
                <Text style={styles.sidebarTitleText}>Chatter</Text>
                <TouchableOpacity><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='home-account' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>Home</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='account' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>Profile</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='account-group' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>Groups</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='cog' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>Settings</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.sidebarButtonContainer}><MaterialCommunityIcons name='pencil-box' size={iconSize} color='white' /><Text style={styles.sidebarButtonText}>Sign-in</Text></View></TouchableOpacity>                
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
        width: '70%',
        height: '100%',
        paddingTop: '10%',
        
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