import {useEffect} from 'react';
import { StyleSheet,View,Image,TouchableOpacity } from "react-native";

import { useGlobalContext } from "../context/context";

const ProfileIcon = ({iconSize,isSidebar}) => {
    const styles = StyleSheet.create({
        userIconBackground: {
            alignSelf: 'baseline',
            borderRadius: iconSize,
            borderWidth: 3,
            borderColor: 'rgba(250,250,250,0.8)',
            margin: 6,
            backgroundColor: 'rgba(250,250,250,0.8)',
        },
        profileImage: {
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize,
        },
    })
    const {switchToProfile,userProfileImage} = useGlobalContext();
    const defaultProfile = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E';
    
    return(
        <View style={styles.userIconBackground}>
            <TouchableOpacity onPress={()=>{switchToProfile(isSidebar)}}>
                <Image resizeMode='cover' style={styles.profileImage} source={{uri: userProfileImage? userProfileImage: defaultProfile}} />
            </TouchableOpacity>
        </View>
    );

}



export default ProfileIcon;