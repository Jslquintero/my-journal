import {Inter} from 'next/font/google'
import Head from 'next/head'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="grid min-h-screen justify-center p-24">
            <Head>
                <title>My Journal</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        </main>
    )
}
