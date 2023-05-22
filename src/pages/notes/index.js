import {useRouter} from 'next/router';
import NextImage from 'next/image';
import imageData from '../../../data/images.json';
import notesData from '../../../data/notes.json';
import Layout from '../../components/_layout';
import Card from '../../components/card/card';
import styles from './Note.module.css';

const Notes = () => {
    const router = useRouter();

    const handleCharacterClick = (characterName) => {
        router.push(`/notes/${characterName}/1`);
    };

    const characterList = notesData.characters.map((character, index) => {
        const race = imageData.characterCreate.race[character.race][character.bodyType];
        const charClass = imageData.characterCreate.charClass[character.charClass];
        const bodyType = imageData.characterCreate.bodyType[character.bodyType];

        return (
            <div key={index}
                className={
                    `${
                        styles.characterItem
                    } grid grid-cols-4`
                }
                onClick={
                    () => handleCharacterClick(character.name.toLowerCase())
            }>
                <h1>{
                    character.name
                }</h1>
                <div className={
                    styles.imageContainer
                }>

                    <NextImage src={race}
                        width={50}
                        height={50}/>
                    <NextImage src={charClass}
                        width={50}
                        height={50}/>
                    <NextImage src={bodyType}
                        width={50}
                        height={50}/>
                </div>
            </div>
        );
    });

    return (
        <Layout>
            <div className={
                styles.page
            }>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <p className="mt-40 mx-5 mb-10">
                            In their quest through the vast and treacherous world of Azeroth, each character embarks on a unique and captivating journey. Their journal serves as a faithful companion, chronicling their experiences and encounters. As readers delve into these journals, they will discover a myriad of challenges and triumphs, from battling formidable creatures in forgotten dungeons to uncovering long-lost artifacts. The pages come alive with vivid descriptions of sprawling landscapes, bustling cities, and mysterious ruins. Intriguing lore and captivating stories are interwoven, providing glimpses into the rich history of the world. Alongside personal reflections, readers will find invaluable tips, strategies, and insights to aid them on their own adventures. Each character's journal offers a captivating glimpse into the intricate tapestry of Vanilla World of Warcraft, an immersive and ever-evolving experience that will keep readers enthralled until the final page.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 md:col-span-2 ">
                        {characterList} </div>
                </div>
            </div>
        </Layout>
    );
};

export default Notes;
