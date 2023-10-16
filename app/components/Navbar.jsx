import Link from 'next/link'


const Navbar = () => {
  return (
    <nav>
      <h2>Ma barre de navigation</h2>
      <Link 
        className=' rounded-lg p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' 
        href="/"
      >
        Dashboard
      </Link>

      <Link 
        className=' rounded-lg p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' 
        href="/tickets"
      >
        Tickets
      </Link>
    </nav>
  )
}

export default Navbar