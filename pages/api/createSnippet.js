import { createSnippet } from '@/utils/Fauna'

const handler = async (req, res) => {
  const { code, language, description, name } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' })
  }
  try {
    //TODO: create the snippet
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
}

export default handler
