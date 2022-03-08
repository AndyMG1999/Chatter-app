import React from 'react';
import { useState } from 'react';

import { postData,commentsData,groupsData } from '../Data';

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  // useState where data will be stored
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
    }}>{children}</AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }
