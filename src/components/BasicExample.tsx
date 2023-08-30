import React from 'react';
import { Formik } from 'formik';

interface Values {
    name: string;
}
const BasicExample = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ name: 'jared' }}
            onSubmit={(values:Values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(true);
                    actions.resetForm()
                }, 1000);
            }
        }
        >

            {props => (
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="name"
                    />
                    <div>
                        <p>{JSON.stringify(props,null,2)}</p>
                    </div>
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <button type="submit">Submit</button>
                </form>
            )}

        </Formik>
    </div>
);
export default BasicExample;