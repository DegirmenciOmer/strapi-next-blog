import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()
  console.error({ router })
  return (
    <nav>
      <a>DevBlog</a>
      <ul>
        <li>
          <Link href='/'>
            <a href={router.asPath}>Home</a>
          </Link>
        </li>

        <li>
          <Link target='_blank' href='https://youtu.be/599ogMbXIyA?t=2698'>
            <a>Tutorial</a>
          </Link>
        </li>
        <li>
          <Link href='/posts'>
            <a>All Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
