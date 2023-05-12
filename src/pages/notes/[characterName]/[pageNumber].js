import {useRouter} from 'next/router'
import notesData from '../../../../data/notes.json'
import Layout from '../../../components/_layout'
import Card from '../../../components/card/card'
import styles from '../Note.module.css'

export async function getStaticPaths() {
    const paths = []
    notesData.characters.forEach((character) => {
        character.pages.forEach((page) => {
            paths.push({
                params: {
                    characterName: character.name.toLowerCase(),
                    pageNumber: page.pageNumber.toString()
                }
            })
        })
    })
    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const {characterName, pageNumber} = params
    const character = notesData.characters.find((c) => c.name.toLowerCase() === characterName)
    const page = character.pages.find((p) => p.pageNumber === parseInt(pageNumber))
    return {
        props: {
            note: page
        }
    }
}


const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}


const NotePage = ({note}) => {
    const router = useRouter()
    const {characterName, pageNumber} = router.query
    const character = notesData.characters.find((c) => c.name.toLowerCase() === characterName)
    const notesLength = character.pages.length


    const handlePageChange = (page) => {
        router.push(`/notes/${characterName}/${page}`)
    }

    // up to 12 paragraphs
    const paragraphs = note.paragraphs.map((paragraph, index) => (
        <p className='mt-10'
            key={index}>
            {paragraph} </p>
    ))

    return (
        <Layout title={
            `${
                capitalizeFirstLetter(characterName)
            } - ${
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
                            totalPages={notesLength}
                            onPageChange={handlePageChange}>
                            {paragraphs} </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default NotePage
