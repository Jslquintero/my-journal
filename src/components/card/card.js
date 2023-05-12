import NextImage from 'next/image'
import styles from './Card.module.css';
import buttonBackground from '../../../public/static/BTNPebble.png'

function Card({
    title,
    image,
    paragraph,
    children,
    currentPage,
    totalPages,
    imgWidth,
    imgHeight,
    onPageChange,
    paginationControlsVisibility = 'visible'
}) {
    const handlePage = (increment) => {
        const newPage = parseInt(currentPage) + increment
        onPageChange(newPage)
    }

    return (
        <div className="bg-transparent mt-20 overflow-hidden relative">
            <div className="md:flex md:flex-row">
                <div className="md:w-1/2 relative">
                    <NextImage src={image}
                        width={imgWidth}
                        height={imgHeight}
                        alt={
                            title ? title : 'image'
                        }/>
                    <div className="ml-10">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="md:w-1/2 p-6">
                    <h2 className="text-gray-800 text-3xl font-bold mb-3">
                        {title}
                        <div className="flex justify-end">
                            <button className={
                                `${
                                    styles.homeButton
                                }`
                            }>
                                <NextImage src={buttonBackground}
                                    width={30}
                                    height={30}
                                    alt="imagen"></NextImage>
                            </button>

                            <button className="font-bold py-2 px-4 rounded">Play</button>
                        </div>
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        {paragraph}</p>
                    {children}

                    <div className={`${paginationControlsVisibility} grid grid-cols-3`}>
                        <div className="flex justify-end">
                            <button className="font-bold py-2 px-4 rounded"
                                onClick={
                                    () => handlePage(-1)
                                }
                                disabled={
                                    currentPage === 1
                            }>
                                Previous Page
                            </button>
                        </div>
                        <div className="flex justify-center py-2 px-4">
                            <p> {currentPage}/{totalPages} </p>
                        </div>
                        <div className="flex justify-start">
                            <button className="font-bold py-2 px-4 rounded"
                                onClick={
                                    () => handlePage(1)
                                }
                                disabled={
                                    currentPage === totalPages
                            }>
                                Next Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card
