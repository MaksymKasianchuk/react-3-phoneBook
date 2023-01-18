import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';

export const PhoneBookForm = ({ getValues }) => {

    const nameId = nanoid(); 

    const initVal = { 
        name: ''
    };

    const handleSubmit = (values, actions) => {
        getValues(values);
        actions.resetForm();
    };
    
    const validateForm = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)) {
            errors.name = 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={initVal}
            validate={validateForm}
            onSubmit={handleSubmit}
        >
        {({ errors, touched})=>(
            <Form>
                    <label htmlFor={nameId}>
                        Name
                        <Field type="text" id={nameId} name="name" placeholder="Enter Name" />
                    </label>
                    {errors.name && touched.name && errors.name}
                    <button type="submit">Add contact</button>
            </Form>
        )}
        </Formik>
    )
};

PhoneBookForm.propTypes = {
    getValues: PropTypes.func.isRequired,
};