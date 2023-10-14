import Image from 'next/image'

export default function Home() {
  const CLIENT_ID = "99439ec664294f8a84876ac4d38952f8"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
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
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&${RESPO}`}>SPOTIFY LOGIN</a>
      </div>
    </nav> 
  )
}
