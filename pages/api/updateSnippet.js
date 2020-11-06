import { updateSnippet } from '@/utils/Fauna'

const handler = (req, res) => {
  if (req.method !== 'PUT') {
    return res.status(405).json({ msg: 'Method not allowed' })
  }

  const { id, code, language, description, name } = req.body

  try {
    //TODO: update snippet
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
}

export default handler