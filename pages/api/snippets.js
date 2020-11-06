import { getSnippets } from '@/utils/Fauna'

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  try {
    const snippets = await getSnippets()
    return res.status(200).json(snippets)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
}

export default handler
