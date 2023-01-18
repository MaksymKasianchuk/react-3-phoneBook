import PropTypes from 'prop-types';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const PhoneBookForm = ({ submitHandler }) => {

    const nameId = nanoid(); 
    const phoneId = nanoid(); 

    let schema = yup.object().shape({
        name: yup.string().matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 
            { 
                message: 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan',
                excludeEmptyString: true 
            }).required('Required'),
        phone: yup.string().matches(
            /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 
            { 
                message: 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
                excludeEmptyString: true 
            }).required()
    });

    const initVal = { 
        name: '',
        phone: ''
    };

    const handleSubmit = (values, actions) => {
        submitHandler(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initVal}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor={nameId}>
                        Name
                        <Field type="text" id={nameId} name="name" placeholder="Enter Name" />
                    </label>
                    <ErrorMessage name="name" component='div'/>
                </div>
                <div>
                    <label htmlFor={phoneId}>
                        Number
                        <Field type="tel" id={phoneId} name="phone" placeholder="Enter phone humber" />
                    </label>
                    <ErrorMessage name="phone" component='div'/>
                </div>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
};

PhoneBookForm.propTypes = {
    submitHandler: PropTypes.func.isRequired
};