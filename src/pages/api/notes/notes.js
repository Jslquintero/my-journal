import notesData from '../../../../data/notes.json'


export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(notesData)
    } else {
      res.status(405).json({ message: 'Method not allowed' })
    }
  }