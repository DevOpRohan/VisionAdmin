import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const TaskForm = (props) => {
    const validationSchema = Yup.object().shape({
        description: Yup.string().required("Required"),
        category: Yup.string().required("Required"),
        dueDate: Yup.date().required("Required"),
    });
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <Field name="description" type="text" placeholder="Description"
                            className="form-control" />
                        <ErrorMessage
                            name="description"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Field name="category" type="text" placeholder="Category"
                            className="form-control" />
                        <ErrorMessage
                            name="category"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Field name="dueDate" type="date"
                            className="form-control" />
                        <ErrorMessage
                            name="rollno"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br/>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default TaskForm;