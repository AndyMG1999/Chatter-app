
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { postData,commentsData,groupsData } from './Data';
import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';

export default function App() {
  const [showPost,setShowPost] = useState(false);
  const [showSidebar,setShowSidebar] = useState(false);
  const [currentMainComment, setCurrentMainComment] = useState({});
  const [showReplies,setShowReplies] = useState(false);
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

  return (
    <View style={styles.container}>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Header showPost={showPost} closePost={closePost} toggleSidebar={toggleSidebar}/>
      {/* <HomeScreen showPost={showPost} data={postData}  currentPost={currentPost} currentComments={currentComments} getPostInfo={getPostInfo} closePost={closePost} currentMainComment={currentMainComment} currentReplies={currentReplies} getReplies={getReplies} showReplies={showReplies} closeReplies={closeReplies} toggleSidebar={toggleSidebar}/> */}
      <GroupsScreen groupData={groupsData}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
