import React from 'react'
import Link from 'next/link'

const PostPreview = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div key={post.id}>
        <h3 className='title'>{post.attributes.title}</h3>
        <p>{post.attributes.description}</p>
      </div>
    </Link>
  )
}

export default PostPreview
