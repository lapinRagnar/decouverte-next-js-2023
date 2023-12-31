import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

const Navbar = () => {
  return (
    <nav>
      <Image 
        src={Logo}
        alt="Logo Lapinragnar"
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h2>LapinRagnar</h2>
      <Link 
        href="/"
      >
        Dashboard
      </Link>

      <Link 
        href="/tickets"
      >
        Tickets
      </Link>
    </nav>
  )
}

export default Navbar