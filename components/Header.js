import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h1>Hello there!! This is  V V Vijaya Bhaskar</h1>
        </Link>
        <p>hello if you have any quieries contact me through my <a href="https://react-portfolio-venkatavijayabhaskar007.vercel.app/">Portfolio</a></p>
      </div>
    </header>
  )
}
