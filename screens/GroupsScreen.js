import {StyleSheet,View,Text} from 'react-native';

const GroupsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Groups Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
});

export default GroupsScreen;