import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik'
import firebase from 'firebase'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formik
        initialValues={{email:'',message:''}}
        onSubmit={({email,message}, resetForm) => {
          firebase.database().ref('contact-form').push({email,message})
          // MyImaginaryRestApiCall(user.id, values).then(
          //   updatedUser => {
          //     actions.setSubmitting(false);
          //     updateUser(updatedUser);
          //     onClose();
          //   },
          //   error => {
          //     actions.setSubmitting(false);
          //     actions.setErrors(transformMyRestApiErrorsToAnObject(error));
          //     actions.setStatus({ msg: 'Set some arbitrary status or data' });
          //   }
          // );
        }}
        render={({ errors, status, touched, isSubmitting ,handleReset }) => (
          <Form>
            <Field type="email" name="email" placeholder='email'/>
            {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
            <Field type="text" name="message" placeholder='message' />
            {/* {status && status.msg && <div>{status.msg}</div>} */}
            <button type="submit" disabled={isSubmitting} onClick={handleReset}>
              Wyślij
            </button>
          </Form>
        )}
      />
      </div>
    );
  }
}

export default App;
