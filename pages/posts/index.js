import axios from 'axios'
import React from 'react'
import AllPosts from '../../components/AllPosts'

const Posts = ({ posts }) => {
  return <AllPosts posts={posts.data} />
}

export default Posts

export async function getStaticProps() {
  const postsRes = await axios.get('http://localhost:1337/api/posts/')
  return {
    props: {
      posts: postsRes.data,
    },
  }
}
