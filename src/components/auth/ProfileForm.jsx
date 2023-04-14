import React from 'react';
import { useFormik } from 'formik';

const ProfileForm = ({ user, onUpdate }) => {
  const formik = useFormik({
    initialValues: {
      email: user?.email || '',
      displayName: user?.displayName || '',
      photoURL: user?.photoURL || '',
      phoneNumber: user?.phoneNumber || '',
    },
    onSubmit: (values) => {
      console.log('Form values:', values);
      onUpdate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          disabled
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="displayName">displayName</label>
        <input
          id="displayName"
          type="text"
          name="displayName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.displayName}
        />
        {formik.touched.displayName && formik.errors.displayName ? (
          <div>{formik.errors.displayName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="photoURL">photoURL</label>
        <input
          id="photoURL"
          type="text"
          name="photoURL"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.photoURL}
        />
        {formik.touched.photoURL && formik.errors.photoURL ? (
          <div>{formik.errors.photoURL}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="phoneNumber">phoneNumber</label>
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
