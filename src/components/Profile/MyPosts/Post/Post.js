import React from 'react'
import styles from './Post.module.css'


const Post = ({message, likeCount}) => {
  return (
    <div className={styles.item}>
    <img alt="alt"src="https://i.pinimg.com/originals/4d/af/2f/4daf2f183af331a8ba9a12bc2a458486.jpg"></img>
    {message}
    <div>
  <span>Like {likeCount}</span>
    </div>
  </div>
  )
}

export default Post;
