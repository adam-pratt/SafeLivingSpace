import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function WhoWeAre() {
    return (
        <Layout>
            <Head>
                <title>Who We Are</title>
            </Head>
            <h1>Board of Directors</h1>
            <h3>Edie Zusman, MD, MBA   CEO and Executive Director</h3>
            <h3>Judy Robinson   Secretary</h3>
            Read{' '}
            <h1>Advisory Board</h1>
            <h3>Fake Person 1</h3>
            <h3>Fake Person 2</h3>
            <Link href="/">
                <a> Back Home</a>
            </Link>
        </Layout>
    )
}