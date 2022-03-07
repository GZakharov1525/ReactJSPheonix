import {useState, useCallback} from 'react'
import FormFields from "./FormFields"
import FormSuccess from './FormSuccess'
// import logo from "../images/logoCircleTitle.png"
import "../Styles/Form.css"

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = useCallback(() => {
        setIsSubmitted(true)
    }, [setIsSubmitted])

    return (
        <div className="form-parent">
            <div className="form-container">
                {/* <span className="close-btn"> X </span> */}
                <div className="form-content-left">
                    {/* <img src="your location here" alt="spinning company logo" className="form-img" /> */}
                    {/* <img className="form-img" src={logo} alt="company logo"></img> */}
                </div>
                {!isSubmitted ? (<FormFields submitForm={submitForm} /> )
                : (<FormSuccess />) }
            </div>
        </div>
    )
}

export default Contact;
