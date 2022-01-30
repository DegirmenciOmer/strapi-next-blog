import axios from 'axios'
import MarkdownIt from 'markdown-it'

const SinglePost = ({ post: { data } }) => {
  const md = new MarkdownIt()
  const htmlContent = md.render(data?.attributes.content)

  return (
    <div key={data?.id}>
      <h3>{data?.attributes.title}</h3>
      <p>{data?.attributes.description}</p>
      <p dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
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
