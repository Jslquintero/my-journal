import {Inter} from 'next/font/google'
import Head from 'next/head'
import Navbar from './nav/nav'

const Layout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8'/>
                <link href="https://fonts.cdnfonts.com/css/warcraft" rel="stylesheet"/>
            </Head>
            <div className='layout-container'>
                <Navbar/>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
