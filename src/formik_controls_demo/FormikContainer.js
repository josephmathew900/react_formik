import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function FormikContainer() {
  const intialValues = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      intialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
