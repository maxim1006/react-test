import React from 'react';
import { Formik, Form } from 'formik';

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
                    setSubmitting(false);
                    onSubmit(values);
                }}
            >
                <Form>
                    <label htmlFor="firstName">
                        First Name
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="John"
                        />
                    </label>

                    <label htmlFor="lastName">
                        Last Name
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                        />
                    </label>

                    <label htmlFor="email">
                        Email
                        <input
                            id="email"
                            name="email"
                            placeholder="max@max.com"
                            type="email"
                        />
                    </label>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
export default RtFormAlternative;
