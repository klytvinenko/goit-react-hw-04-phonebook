import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import { ErrorMsg, Label, StyledForm } from './ContactForm.styled';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(2, 'Too Short!')
      .matches(/^[0-9+-]+$/, 'Phone number must contain only digits and +')
      //.positive('Must be positive')
      .required('Required'),
  });

export const ContactForm = ({onAdd}) => {
    return (
        <div>
        <Formik
                initialValues = {{
                    name: '', 
                    number: ''}}
                validationSchema={SignupSchema}
                onSubmit ={(values, actions) => {
                    onAdd(values);
                    actions.resetForm();
                }}
            >
            <StyledForm>
                <Label>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMsg name="name" component="div"/>
                </Label>
                <Label>
                    Number
                    <Field name="number" type="tel" />
                    <ErrorMsg name="number" component="div"/>
                </Label>
                
                <button type = "submit">Add contact</button>
            </StyledForm>
        </Formik>
        </div>
    );
};