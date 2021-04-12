import Layout from '../../components/layout'
import { getAllPostIds, getPostById } from '../../lib/posts'
import Date from '../../components/date'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths, // array of known paths returned by getAllPostIds()
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostById(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <h2>{postData.title}</h2>
      <h3><Date dateString={postData.date} /></h3>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}