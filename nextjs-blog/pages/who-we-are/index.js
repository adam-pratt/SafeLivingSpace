import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function WhoWeAre() {
    return (
        <Layout>
            <Head>
                <title>Who We Are</title>
                <link rel="icon" href="/images/SlsLogo.jpg" />
            </Head>
            <h1 className='bannerText'> Safe Living Space</h1>
            <h3>Edie Zusman, MD, MBA   CEO and Executive Director</h3>
            <h3>Judy Robinson   Secretary</h3>
            Read{' '}
            <h1>Advisory Board</h1>
            <h3>Fake Person 1</h3>
            <h3>Fake Person 2</h3>
            <Link href="/">
                <a> Back Home</a>
            </Link>
            <style jsx> {`
                .bannerText {
                    color: #573494
                }
            `}
            </style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </Layout>
    )
}