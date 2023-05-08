import Layout from '../../components/_layout'
import {useState, useEffect} from 'react'

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function fetchNotes() {
            const res = await fetch('/api/notes')
            const data = await res.json()
            setNotes(data)
        }
        fetchNotes()
    }, [])

    return (
        <>
            <Layout>

            </Layout>
        </>
    )
}

export default Notes
