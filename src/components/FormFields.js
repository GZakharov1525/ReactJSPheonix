import useForm from './useForm'
import validate from "./validateForm"
import '../Styles/Form.css'

const FormFields = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    We serve the Greater Toronto Area with Landscaping / Hardscaping
                    services. Contact us today for an estimate, or if you have any
                    questions regarding Landscaping/Hardscaping, we're happy to help
                    where we can.

                    <br></br>
                    <br></br>

                    If you'd like to use your own email client: pheonixlandscapingltd@gmail.com
                </h1>
                {/* input property of 'id' allows you to click the label of each field and have
                the cursor auto select the input box for that label. htmlFor returns the id of the
                input field that the target label is bound to. */}
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label"> Name </label>
                    <input id="name" type="text" name="name" className="form-input" placeholder="Enter your name"
                    value={values.name} onChange={handleChange}></input> 
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label"> Email </label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="Email where can we reach you"
                    value={values.email} onChange={handleChange}></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="subject" className="form-label"> Subject </label>
                    <input id="subject" type="text" name="subject" className="form-input" placeholder="What is this regarding?"
                    value={values.subject} onChange={handleChange}></input>
                    {errors.subject && <p>{errors.subject}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="message" className="form-label"> Message </label>
                    <input id="message" type="text" name="message" className="form-input" placeholder="Type your message here"
                    value={values.message} onChange={handleChange}></input>
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button className="form-input-btn" type="submit"> Send </button>
            </form>
        </div>
    )
}

export default FormFields
