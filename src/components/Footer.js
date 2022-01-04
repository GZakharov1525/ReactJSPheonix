import "../Styles/Footer.css";

const Footer = () => {
    return (
        <div className='footer-container'>
            &copy; 2008-{new Date().getFullYear()} Pheonix Landscaping Ltd. All rights reserved.
            Do not copy or distribute images without express permission.
        </div>
    )
}

export default Footer
