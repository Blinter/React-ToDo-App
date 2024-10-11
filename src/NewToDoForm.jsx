import PropTypes from 'prop-types';
import React from 'react';
import { useFormik } from 'formik';

function NewTodoForm({ addToDo }) { // fixed parameter destructuring
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validate: values => {
      const errors = {};
      if (!values.task) {
        errors.task = 'Required';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addToDo(values.task);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      <label htmlFor="task">New Task?</label>
      <input
        id="task"
        name="task"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.task}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

NewTodoForm.propTypes = {
  addToDo: PropTypes.func.isRequired
};

export default NewTodoForm;