import style from '@/app/style/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

export default function Header() {
  return (
    <header className={style.main_header}>
      <div className={style.navbar_brand}>
        <Link href='/'>
          <Image src='/logo.png' alt='my logo image' width={150} height={40} />
        </Link>
      </div>

      <Nav />
    </header>
  )
}
