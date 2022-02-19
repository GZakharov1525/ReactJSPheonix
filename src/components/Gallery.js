import useFirestore from "./useFirestore"
import "../Styles/Gallery.css"

const Gallery = () => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className = "img-card" key = {doc.id}>
                    <img src={doc.url} alt={"image with id: " + doc.id}></ img>
                </ div>
            ))}
        </div>
    )
}

export default Gallery;