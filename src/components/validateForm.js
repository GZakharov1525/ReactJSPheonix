export default function validateForm(values) {
    let errors = {};

    if(!values.name.trim()) {
        errors.name = "Name is required"
    }

    if(!values.email) {
        errors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.subject) {
        errors.subject = "Please add a short subject"
    }

    if(!values.message) {
        errors.message = "A Message is required"
    }

    return errors;
}
