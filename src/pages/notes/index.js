import {useRouter} from 'next/router'
import NextImage from 'next/image'
import imageData from '../../../data/images.json'
import notesData from '../../../data/notes.json'
import Layout from '../../components/_layout'
import Card from '../../components/card/card'
import styles from './Note.module.css'


const Notes = () => {

    return (<>
        <Layout>
            <div className={
                styles.page
            }>
                <div className='grid grid-cols-1'>
                    <div className='col-span-1'>
                        <Card paginationControlsVisibility="hidden" image=""
                            imgWidth={600}
                            imgHeight={600}>

                            <p>asdsad</p>
                            <div className='flex justify-end'>
                                <ul>
                                    <li>
                                        <h1>Beldruk</h1>
                                        <NextImage src={
                                                notesData.characters[0].race
                                            }
                                            width={50}
                                            height={50}></NextImage>
                                        <NextImage src={
                                                notesData.characters[0].charClass
                                            }
                                            width={50}
                                            height={50}></NextImage>
                                        <NextImage src={
                                                notesData.characters[0].bodyType
                                            }
                                            width={50}
                                            height={50}></NextImage>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    </>)
}

export default Notes
