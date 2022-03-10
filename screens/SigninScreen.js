import {StyleSheet,View,Text,TextInput,TouchableOpacity,TouchableHighlight} from "react-native";
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { useGlobalContext } from "../context/context";

const SigninScreen = () => {
    const [emailInput,setEmailInput] = useState("");
    const [passwordInput,setPasswordInput] = useState("");
    
    const {attemptLogin} = useGlobalContext();

    return(
        <View style={styles.screen}>
            <View style={styles.signinContainer}>
                <View style={styles.chatterLogoContainer}>
                    <MaterialCommunityIcons name='emoticon-lol' size={90} color='rgb(255, 196, 20)' />
                    <Text style={styles.signinText}>chatter</Text>
                </View>
                <TextInput onChangeText={(value)=>setEmailInput(value)} style={styles.signinInput} placeholderTextColor='grey' placeholder="email" keyboardType='email-address' returnKeyType='next' />
                <TextInput onChangeText={(value)=>setPasswordInput(value)} style={styles.signinInput} placeholderTextColor='grey' placeholder="password" secureTextEntry={true} returnKeyType='go' />
                <TouchableHighlight onPress={()=>{attemptLogin(emailInput,passwordInput)}} style={styles.signinButtonContainer} underlayColor={'rgb(205, 146, 20)'}><View><Text style={styles.signinButtonText}>Let's Go!</Text></View></TouchableHighlight>
                <TouchableOpacity onPress={()=>{}}><View><Text style={styles.signupButtonText}>Don't have an account? Tap here!</Text></View></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'rgb(25, 45, 56)',
    },
    signinContainer:{
        alignItems: 'center',
        paddingVertical: 30,
    },
    chatterLogoContainer:{
        flexDirection:'row',
        alignItems: 'center',
    },
    signinText:{
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
    },
    signinInput:{
        fontSize: 25,
        height: 90,
        width: '90%',

        marginTop: 5,
        marginBottom: 10,

        borderColor: 'white',
        borderBottomWidth: 2,
        color: 'white',
    },
    signinButtonContainer:{
        width: '80%',
        alignItems: 'center',
        
        marginVertical: 30,

        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        
        backgroundColor: 'rgb(255, 196, 20)',
    },
    signinButtonText:{
        fontSize: 40,
        color: 'white',
    },
    signupButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(131, 238, 255,1)',
        color: 'rgba(131, 238, 255,1)',
    },
})

export default SigninScreen;