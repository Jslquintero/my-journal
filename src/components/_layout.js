import Head from 'next/head'

const Layout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8'/>
                <link href="https://fonts.cdnfonts.com/css/warcraft" rel="stylesheet"/>
            </Head>
            <div className=''>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
