import {useRouter} from 'next/router'
import notesData from '../../../data/notes.json'
import Layout from '../../components/_layout'
import Card from '../../components/card/card'
import styles from './Note.module.css'

export async function getStaticPaths() {
    const paths = notesData.map(note => ({
        params: {
            id: note.id.toString()
        }
    }))
    return {paths, fallback: false}
}

export async function getStaticProps({params: {
        id
    }}) {
    const note = notesData.find(n => n.id === parseInt(id))
    return {props: {
            note
        }}
}


const NotePage = ({note}) => {
    const router = useRouter()
    const {id} = router.query
    const notesLength = Object.keys(notesData).length
    // up to 12 paragraphs
    const paragraphs = note.paragraphs.map((paragraph, index) => (
        <p className='mt-10'
            key={index}>
            {paragraph}</p>
    ))

    return (
        <Layout>
            <div className={styles.page}>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <Card title={
                                note.title
                            }
                            image={
                                note.image
                            }
                            imgWidth={600}
                            imgHeight={600}
                            currentPage={id}
                            totalPages={notesLength}
                            >
                            {paragraphs} </Card>
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default NotePage
