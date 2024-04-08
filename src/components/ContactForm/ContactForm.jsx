import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  return (
    <div className={css.formBlock}>
      <h2>Add New Contact</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };
          addContact(newContact);
          resetForm();
        }}
      >
        <Form className={css.form}>
          ``
          <label htmlFor="name">Name:</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
          <br />
          <label htmlFor="number">Number:</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
          <br />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};
