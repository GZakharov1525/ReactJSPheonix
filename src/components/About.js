import "../Styles/About.css"
// import aboutImage from "../images/aboutCat.jpg"

const About = () => {
    return (
        <div className='about-container'>
             <div className='about-media'>
                {/* add video or photo here later */}
                {/* <img src={aboutImage} alt="Cat playing with flower on top of landscaping pavers."></img> */}
            </div>
            <div className='about-description'>
                <h1> A Father & Son Family Company</h1>
                <p>
                    We like to think of ourselves as the mom & pop shop of the 
                    landscaping industry here in the Greater Toronto Area.
                    We specialize in stonework of all kind (both natural stone and 
                    man made) with a diverse portfolio of projects like Driveways, 
                    Walkways, Patios, Hot Tub/Jacuzzi and Pool Veneer, Outdoor 
                    Fireplaces, Porch Refacing, Retaining Walls, Decorative Walls, 
                    Garden Walls, and much more!

                    <br></br>
                    <br></br>

                    Focusing on providing high quality stonework we are proud to say
                    that we have thrived purely on word of mouth until our first push 
                    to expand our online presence in 2022. The greatest compliment for
                    us is when our customers recommend us to family, friends and neighbors.
                    We are also proud to say that we have had many return customers over
                    the years who purchased a new home and knew the people they could
                    trust to turn their vision into reality: Pheonix Landscaping.

                    <br></br>
                    <br></br>

                    Thank you for taking the time to view our website, from our family to yours:
                    Welcome! and we hope to work with you soon.
                </p>
            </div>
        </div>
    )
}

export default About
