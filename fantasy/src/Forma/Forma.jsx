
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Forma/Forma.scss';

export default function RegistrationForm(){
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    
    email: Yup.string()
      .email('Некоректний формат електронної пошти')
      .required('Електронна пошта обов\'язкова'),
    password: Yup.string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів')
      .required('Пароль обов\'язковий'),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="registration-form">
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <button type="submit"><img className='googleImg' src='../public/google.svg' alt='google-logo'/>
          Sign up with Google</button>
          <div className="form-group">
            <label className="email">Email:</label>
            <Field type="email" id="email" name="email" placeholder='e.g. Alex@email.com' />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <label className="password">Password:</label>
            <Field type="password" id="password" name="password" placeholder='8+ characters' />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit"><img className='googleImg' src='../public/msg.svg' alt='msg-logo'/>Sign up with Google</button>
          <p>You hereby confirm that you are fully able and competent to access Livebeam and comply with the Terms of Use & Service, and are at least eighteen (18) years of age or the age of majority under the law of the jurisdiction of your residence and the one you are accessing Livebeam from.</p>
        </Form>
      </Formik>
    </div>
  );
};


