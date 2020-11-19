import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Form from '../components/items/Form'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Wisdom Tutelage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Form />
      </Layout>
    </div>
  )
}
