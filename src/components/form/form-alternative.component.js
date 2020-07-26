import React from 'react';
import { Formik, Field, Form } from 'formik';

const RtFormAlternative = ({ onSubmit }) => {
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);

                    onSubmit(values);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="max@max.com"
                        type="email"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
export default RtFormAlternative;
