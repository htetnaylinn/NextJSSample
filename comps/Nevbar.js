import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
          <div className="logo">
            <Image src="/logo.png" width={128} height={77} />
          </div>
          <Link href="/">
            Homeees
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/ninjas">
            Ninjas Listing
          </Link>
        </nav>
      );
}
 
export default Navbar
