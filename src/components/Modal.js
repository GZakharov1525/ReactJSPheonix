import '../Styles/Modal.css'

const Modal = ({selectedImage, setSelectedImage}) => {

    // Restrict exiting out of a modal to only clicking on the backdrop
    // i.e exclude the image.
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop'))
        {
            setSelectedImage(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage.url} alt={selectedImage.description}></img>
        </div>
    )
}

export default Modal
