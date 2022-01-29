import React from 'react'

const HomeLatestPosts = ({ posts: { data } }) => {
  //posts.data[0].attributes.content
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.attributes.title}</h2>
          <p>{item.attributes.content}</p>
        </div>
      ))}
    </div>
  )
}

export default HomeLatestPosts
