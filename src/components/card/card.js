import NextImage from 'next/image'
import picture from '/public/static/background.jpg'
import styles from './Card.module.css';

function Card({
    title,
    image,
    paragraph,
    children,
    styleChildren
}) {
    return (
        <div className={
            `${
                styles.card
            }`
        }>
            {
            image && <NextImage className={
                    `${
                        styles.card_img
                    }`
                }
                src={image}
                alt={title}/>
        }
            <h2>{title}</h2>
            <div className={
                `${styleChildren} ${
                    styles.childrenStyle
                }`
            }>
                {children}</div>
            <p>{paragraph}</p>
        </div>
    );
}


export default Card
