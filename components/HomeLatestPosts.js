import React, { useEffect, useState } from 'react'
import PostPreview from './PostPreview'

const HomeLatestPosts = ({ posts }) => {
  const [firstFivePosts, setFirstFivePosts] = useState([])
  useEffect(() => {
    setFirstFivePosts(posts.slice(0, 5))
  }, [posts])

  return (
    <div>
      <h2>Latest Posts</h2>
      {firstFivePosts?.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

export default HomeLatestPosts
