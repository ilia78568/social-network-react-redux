import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = ({postData}) => {
  return (
    <div >
    <ProfileInfo/>
    <MyPosts postData={postData}/>
  </div>
  )
}

export default Profile;
