import PostPreview from './PostPreview'

const AllPosts = ({ posts }) => {
  return (
    <div>
      <h2>All Posts</h2>
      {posts?.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

export default AllPosts
