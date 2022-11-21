import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import PropTypes from 'prop-types';


const loginSchema = yup.object().shape(
    {
        email: yup.string()
                .email('Error email format')
                .required('Email is required'),
        password: yup.string()
                    .required('password is required')
    }
)





const LoginForm = ({loged, fetching, onLogin}) => {
    const initialCredential = {
        email: '',
        password: ''
    }
    

    return (
        <div>
            <h4>Login form</h4>
            <Formik 
                
                //*** Initial values that the form will take
                initialValues = {initialCredential}
                //***Yup validation schema 
                validationSchema = {loginSchema}
                //** onSubmit Event 
                
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                  
                }}
            
            >
                {/**We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit}) => (
                        <Form >
                                <label htmlFor="email">Email</label>
                                <Field id="email" type="email" name="email" placeholder="Example@email.com"/>
                                {/**Email errors */}
                                {
                                    errors.email && touched.email && 
                                    (                        
                                        <ErrorMessage component='div' name="email" />
                                    )
                                }
                                
                                <label htmlFor="password">Password</label>
                                <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                                />
                                {
                                    errors.password && touched.password && 
                                    (
                                        <div>
                                        <ErrorMessage name="password" />
                                        </div>
                                    )
                                }
                                <button type="submit">login</button>
                                {fetching ? (<p>LOADING...</p>):null}
                                {isSubmitting ? (<p> Login your credentials...</p>): null }
                            </Form>
                    )}
            </Formik>



        </div>
    );
}

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
}
export default LoginForm;

