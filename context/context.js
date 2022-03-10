import React from 'react';
import { useState } from 'react';

import { postData,commentsData,userLoginData,groupsData } from '../Data';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  // useState where data will be stored
  const [userId,setUserId] = useState(null);
  const [username,setUsername] = useState(null);

  const [showPost,setShowPost] = useState(false);
  const [showReplies,setShowReplies] = useState(false);
  const [showSidebar,setShowSidebar] = useState(false);

  const [currentPage,setCurrentPage] = useState('HOME');

  const [currentMainComment, setCurrentMainComment] = useState({});
  const [currentPost,setCurrentPost] = useState([]);
  const [currentComments,setCurrentComments] = useState([]);
  const [currentReplies,setCurrentReplies] = useState([]);

  const getPostInfo = (postId) => {
    const newPost = postData.filter((post)=>post.id === postId);
    const newComments = commentsData.filter((comments)=>comments.postId === postId);
    setCurrentComments(newComments);
    setCurrentPost(newPost);
    setShowPost(true);
  }

  const getReplies = (id,mainComment) => {
    const newReplies = commentsData.filter((comments)=>comments.replyingTo === id);
    setCurrentReplies(newReplies);
    setCurrentMainComment(mainComment);
    if(newReplies.length > 0)setShowReplies(true);
  }

  const closeReplies = () => {
    setShowReplies(false);
  }

  const closePost = () => {
    setShowPost(false);
    setShowReplies(false);
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const switchToHome = () => {
      setCurrentPage('HOME');
      toggleSidebar();
  }

  const switchToProfile = (isSidebar = true) => {
    if(userId == null) return;
    setCurrentPage('PROFILE');
    if(isSidebar) toggleSidebar();
  }

  const switchToGroups = () => {
      setCurrentPage('GROUPS');
      toggleSidebar();
  }

  const switchToSetting = () => {
      setCurrentPage('SIGN-IN');
      toggleSidebar();
  }

  const switchToSignin = () => {
      setCurrentPage('SIGNIN');
      toggleSidebar();
  }

  const attemptLogin = (email,password) => {
    // Check if login data contains a user with the inputted email
    const existingUser = userLoginData.find((user)=>user.email === email);
    if(existingUser){
      // if user exists then checks password, and if correct logs in
      if(existingUser.password === password) setUserId(existingUser.id);
      setUsername(existingUser.username);
      switchToHome();
      return;
    }
    // return error since user does not exist or password was incorrect
    console.log('error');
  }

  const signUserOut = () => {
    setUserId(null);
    setUsername(null);
    switchToSignin();
  }

  return (
    <AppContext.Provider value={{
        showSidebar,
        setShowSidebar,
        toggleSidebar,
        showPost,
        closePost,
        postData,
        groupsData,
        getPostInfo,
        currentPost,
        currentComments,
        currentMainComment,
        currentReplies,
        getReplies,
        showReplies,
        closeReplies,
        toggleSidebar,
        currentPage,
        switchToHome,
        switchToProfile,
        switchToGroups,
        switchToSignin,
        username,
        setUsername,
        userId,
        setUserId,
        attemptLogin,
        signUserOut,
    }}>{children}</AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }
