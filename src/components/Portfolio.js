import Gallery from "./Gallery";
import Modal from "./Modal";
import { useState } from 'react';

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <Gallery setSelectedImage={setSelectedImage} />
            {/* Conditionally render the Modal only when an image is selected*/}
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </div>
    )
}

export default Portfolio
