import Image from 'next/image'

export default function Home() {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
        <ul>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/photos">Photos</a>
          </li>
        </ul>
      </div>
    </nav> 
  )
}
