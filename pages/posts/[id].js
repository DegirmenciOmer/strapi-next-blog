import axios from 'axios'
import React from 'react'

const SinglePost = ({ post: { data } }) => {
  return (
    <div key={data?.id}>
      <h3>{data?.attributes.title}</h3>
      <p>{data?.attributes.description}</p>
      <p>{data?.attributes.content}</p>
    </div>
  )
}

export default SinglePost

export async function getStaticProps({ params }) {
  const postRes = await axios.get(
    `http://localhost:1337/api/posts/${params.id}`
  )
  return {
    props: {
      post: postRes.data,
    },
  }
}

export async function getStaticPaths() {
  const { data } = await axios.get('http://localhost:1337/api/posts/')

  const paths = data.data.map((post) => {
    return { params: { id: post.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}
