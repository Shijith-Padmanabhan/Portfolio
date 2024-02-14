import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { TailSpin } from 'react-loader-spinner';
import { db } from '../utils/firebase';
import './Contact.css';
import FormBanner from './FormError/FormBanner';

const Contact = () => {
    const [inputs, setInputs] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormError, setFormError] = useState(false);
    const [isSubmitError, setSubmitError] = useState(false);
    const [isSubmitSuccessful, setSubmitSuccessful] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputs.name && inputs.email && inputs.textfield) {
            setFormError(false);
            setIsSubmitting(true);
            console.log('form data: ', inputs);
            try {
                const docRef = await addDoc(collection(db, "Messages"), inputs);
                console.log("Document written with ID: ", docRef.id);
                setInputs({});
                setSubmitSuccessful(true);
                setTimeout(() => setSubmitSuccessful(false), 8000); // clear success message
            } catch (e) {
                console.error("Error adding document: ", e);
                setSubmitError(true);
                setTimeout(() => setSubmitError(false), 8000); // clear error message
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setFormError(true);
        }
    }

    return (
        <div className='contact' id="contact" name="contact">
            <div className='heading'>
                <h1 className='heading-text mt-5'>
                    Contact
                </h1>
            </div>
            <div className='form-container'>

                <form onSubmit={handleSubmit}>
                    <div className='name-email'>
                        <input
                            type="text"
                            name="name"
                            placeholder='What can i call you?'
                            value={inputs.name || ""}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Where can i reach you(email)?'
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='message'>
                        <textarea placeholder='How can i help you?' name='textfield' value={inputs.textfield || ""} onChange={handleChange} />
                    </div>
                    {isFormError && <FormBanner formError={true}/>}
                    {isSubmitError && <FormBanner submitError={true}/>}
                    {isSubmitSuccessful && <FormBanner submitSuccessful={true}/>}
                    <div className='submitBtn'>
                        <button type="submit" disabled={isSubmitting}>
                            <TailSpin
                                visible={isSubmitting}
                                height="30"
                                width="30"
                                color="#fff"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                            />
                            <div>
                                SEND IT!
                            </div></button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact;