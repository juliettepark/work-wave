import Image from 'next/image'

export default function Home() {
  return (
    <div> 
      <Navbar/>
    </div>
  )
}

function Navbar() {
  const CLIENT_ID = "99439ec664294f8a84876ac4d38952f8"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize/"
  const RESPONSE_TYPE = "token"
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-gray-900 text-gray-100 z-10">
      <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
        <a href="/" className='font-medium text-lg md:hover:underline'>Home</a>
        <ul className='flex items-center justify-end space-x-4 text-sm font-medium'>
          <li className='md:hover:underline'>
            <a href="/login.js">Login</a>
          </li>
          <li className='md:hover:underline'>
            <a href="/about.js">About</a>
          </li>
          <li className='md:hover:underline'>
            <a href="/task.js">Tasks</a>
          </li>
          <li className='md:hover:underline'>
            <a href="/workspace.js">Workspace</a>
          </li>
          <li className='md:hover:underline'>
            <a href="/meetwilly.js">Meet Willy</a>
          </li>
        </ul>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} >SPOTIFY LOGIN</a> 
      </div>
    </nav> 
  );
}