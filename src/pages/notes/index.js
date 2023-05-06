import Card from '@/components/card/card'
import imagen from '../../../public/static/imagen.png'

const Notes = () => {
    return (
        <div className='grid grid-cols-2'>
            <Card image={imagen}/>
            <Card title="Beldruk the mute paladin">
                <p>Beldruk was born in the kingdom of Lordaeron during a time of relative peace. He was raised in a family of devout followers of the Holy Light, and from a young age, he showed a strong affinity for the religion. As he grew older, he became a skilled warrior, and his faith only grew stronger.</p>
                <p>However, during the Third War, Beldruk was captured by the Scourge and subjected to horrific torture. The trauma of his experience left him unable to speak, but his faith in the Light remained unshaken. After being rescued, he joined the Order of the Silver Hand and continued to serve as a paladin, despite his inability to communicate verbally.</p>
                <br/>
                <p>Beldruk is known as "The Silent Crusader" among his peers, a title he earned due to his unwavering dedication to the Light, even in the face of unspeakable horrors.</p>
                <br/>
                <p>Beldruk's experiences have left him with a stoic and serious demeanor, similar to a soldier who has seen the horrors of war. However, his unshakeable faith in the Light and his desire to help those in need make him a beacon of hope for those around him. He exudes a sense of optimism and radiates positivity, inspiring others to follow his lead. Despite his inability to speak, he is a skilled and intuitive leader, leading his allies into battle with a calm and focused determination.</p><br/>
            </Card>
        </div>
    )
}

export default Notes;
