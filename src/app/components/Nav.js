import style from '@/app/style/navbar.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav className={style.navbar}>
                <div >
                    <ul className={style.navbarList}>
                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink} href="/">Home</Link>
                        </li>


                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink} href="/about">About</Link>
                        </li>


                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink} href="/movie">Movie</Link>
                        </li>


                        <li className={style.navbarItem}>
                            <Link className={style.navbarLink} href="/contactus">Contact</Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    )
}
