import {useRouter} from 'next/router'
import Head from 'next/head'
import notesData from '../../../../data/notes.json'
import Layout from '../../../components/_layout'
import Card from '../../../components/card/card'
import styles from '../Note.module.css'

export async function getStaticPaths() {
    const paths = notesData.map(note => ({
        params: {
            pageNumber: note.pageNumber.toString(),
            characterName: note.characterName.toLowerCase()
        }
    }))
    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const {pageNumber, characterName} = params
    const note = notesData.find(n => n.pageNumber === parseInt(pageNumber) && n.characterName.toLowerCase() === characterName)
    return {props: {
            note
        }}
}


const NotePage = ({note}) => {
    const router = useRouter()
    const {characterName, pageNumber} = router.query
    const notesLength = notesData.filter(n => n.characterName.toLowerCase() === characterName).length

    // up to 12 paragraphs
    const paragraphs = note.paragraphs.map((paragraph, index) => (
        <p className='mt-10'
            key={index}>
            {paragraph}</p>
    ))

    return (
        <Layout title={
            `${characterName} - ${
                note.topic
            }`
        }>
            <div className={
                styles.page
            }>
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
                            currentPage={pageNumber}
                            totalPages={notesLength}>
                            {paragraphs} </Card>
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default NotePage
