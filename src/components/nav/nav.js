import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={
            styles.navbar
        }>
            <ul className={
                styles.navbarList
            }>
                <li className={
                    styles.navbarItem
                }>
                    <Link href="/">
                        menu 1
                    </Link>
                </li>
                <li className={
                    styles.navbarItem
                }>
                    <Link href="/about">
                        menu 2
                    </Link>
                </li>
                <li className={
                    styles.navbarItem
                }>
                    <Link href="/contact">
                        menu 3
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
