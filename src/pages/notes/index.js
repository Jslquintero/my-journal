import { useRouter } from 'next/router'
import NextImage from 'next/image'
import imageData from '../../../data/images.json'
import notesData from '../../../data/notes.json'
import Layout from '../../components/_layout'
import Card from '../../components/card/card'
import styles from './Note.module.css'

const Notes = () => {
  const router = useRouter()

  const list = (
    <div className={styles.characterList}>
      {notesData.characters.map((character, index) => {
        const race = imageData.characterCreate.race[character.race][character.bodyType]
        const charClass = imageData.characterCreate.charClass[character.charClass]
        const bodyType = imageData.characterCreate.bodyType[character.bodyType]

        return (
          <div key={index} className={styles.characterItem}>
            <h1>{character.name}</h1>
            <div className={styles.imageContainer}>
              <NextImage src={race} width={50} height={50} />
              <NextImage src={charClass} width={50} height={50} />
              <NextImage src={bodyType} width={50} height={50} />
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <Layout>
      <div className={styles.page}>
        <div className="grid grid-cols-1">
          <Card paginationControlsVisibility="hidden" imageSectionVisibility="hidden">
           <p>Lorem</p>
            <div className="flex justify-end">
              <div className="col-span-1">{list}</div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Notes
