import useFirestore from "./useFirestore"
import "../Styles/Gallery.css"

const Gallery = ({setSelectedImage}) => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className = "img-card" key = {doc.id} onClick={() => setSelectedImage(doc)}>
                    <img src={doc.url} alt="description has details"></ img>
                    <p> {doc.description} </p>
                    <br></br>
                    <p> Tags: {doc.tags.map(tag => (
                        <span className="tag-bubble"> {tag + ""} </span>
                    ))} </p>
                </ div>
            ))}
        </div>
    )
}

export default Gallery;