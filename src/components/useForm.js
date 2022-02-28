import {useState, useEffect} from 'react'

/* "use____" naming convention for custom hooks */
const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({})
    const[isSubmitting, setIsSubmitting] = useState (false)

    // Update values as they are entered
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);

        // Send a POST to the backend to handle data from form.
        // Use appropriate Content-Type based on how you plan to parse
        // the JSON data in your backend.
        const res = fetch('http://localhost:5000/Contact', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }).then(() => {
            console.log('email data sent.', res);
        })
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, isSubmitting, callback]);

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;