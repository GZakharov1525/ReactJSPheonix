import {useState, useCallback} from 'react'
import FormFields from "./FormFields"
import FormSuccess from './FormSuccess'
import "../Styles/Form.css"

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // function submitForm() {
    //     setIsSubmitted(true)
    // }

    const submitForm = useCallback(() => {
        setIsSubmitted(true)
    }, [setIsSubmitted])

    return (
        <>
            <div className="form-container">
                <span className="close-btn"> X </span>
                <div className="form-content-left">
                    {/* <img src="your location here" alt="spinning company logo" className="form-img" /> */}
                </div>
                {!isSubmitted ? (<FormFields submitForm={submitForm} /> )
                : (<FormSuccess />) }
            </div>
        </>
    )
}

export default Contact;
