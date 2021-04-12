import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head><title>First Post</title></Head>
      <h1>My Posts</h1>
      <p><em>Static generation</em> is the pre-rendering method that generates 
        the HTML at build time. The pre-rendered HTML is then 
        reused on each request.
      </p>
      <p>
        You should ask yourself: "Can I pre-render this page ahead of 
        a user's request?" If the answer is yes, then you should 
        choose Static Generation.
        Static Generation can be done with and without data.
      </p>
      <p><em>Server-side rendering</em> is the pre-rendering method that generates 
        the HTML on each request.</p>
      <p><em>Client-side rendering</em> is a strategy where some parts of the page
      is pre-rendered (as they don't need external data) and some other parts
      use javascript to fetch external data from the client side.
      Next provides <code>useSWR</code> hook to facilitate this strategy.
      </p>
      <Image src="/images/bunny-white.png" alt="White bunny" height={100} width={80} />
    </Layout>
  );
}