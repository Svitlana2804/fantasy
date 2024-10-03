
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Registration/Registration.scss';
import Logo from "../../public/Group.webp";
export default function Registration(){
  const initialValues = {
    name: '',
  gender: '',
  birthDate: '',
  agreeToTerms: false, 
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    birthDate: Yup.date().required('Birth date is required').nullable(),
    agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions'),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // Скидаємо форму після відправлення, якщо потрібно
  };

  return (
    <div className="registration-form">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='logo'>
           <img src={Logo} width={30} height={30} alt='logo'/>
        <h3>livebean</h3> 
        </div>
        
      <div className="form-group">
          <label className="me">I am</label>
          <div className="gender-options">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <ErrorMessage name="gender" component="div" className="error" />
        </div>
        <div className="form-group">
          <label className="name">My name is</label>
          <Field type="text" id="name" name="name" placeholder="e.g. Alex" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div className="form-group">
          <label className="birthDate">I was born on</label>
          <Field type="date" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" className="error" />
        </div>
        <div className="form-group agree">
            <label>
              <Field type="checkbox" name="agreeToTerms" className="agree-checkbox"/> 
              <p>
                I have read, understand, and agree to the Terms of Use, Privacy Policy, Disclosures & Disclaimers.
              </p>
            </label>
            <ErrorMessage name="agreeToTerms" component="div" className="error" />
          </div>
          <button type="submit" className='submit__button' >Sign up now</button>
          
        </Form>
      </Formik>
    </div>
  );
};

