import Head from 'next/head'

import SnippetForm from '@/components/SnippetForm'

import { getSnippetById } from '@/utils/Fauna'

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id
    const snippet = await getSnippetById(id)

    return {
      props: { snippet },
    }
  } catch (error) {
    console.error(error)
    context.res.statusCode = 302
    context.res.setHeader('Location', `/`)
    return { props: {} }
  }
}

const Home = ({ snippet }) => {
  return (
    <div>
      <Head>
        <title>Update Next Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-red-100 text-2xl mb-4">Update Snippet</h1>
        <SnippetForm snippet={snippet} />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  try {
    //TODO: Get and return snippet as prop
    return {
      props: {},
    }
  } catch (error) {
    console.error(error)
    context.res.statusCode = 302
    context.res.setHeader('Location', `/`)
    return { props: {} }
  }
}
