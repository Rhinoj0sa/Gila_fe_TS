import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

interface MyFormValues {
    firstName: string;
    lastName: string;
}

export const Simpleform: React.FC<{}> = () => {
    const initialValues: MyFormValues = { firstName: '', lastName:''};
    return (
        <div>
            <h1>Simple Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    // alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    actions.resetForm()
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="First Name" />
                    <label htmlFor="lastName">First Name</label>
                    <Field id="lastName" name="lastName" placeholder="Last Name" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
export default Simpleform;