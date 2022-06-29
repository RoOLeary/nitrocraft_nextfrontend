import React from "react";
import { useForm } from "react-hook-form";
import Layout from '../components/Layout';
import StaticHeader from '../components/StaticHeader';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <Layout>
    <StaticHeader content="Contact"/>    
        <section className={'c-section contact'}>
        <div className="o-wrapper">
            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div>
                <label>Name</label>
                <input name="name" type="text" {...register('name', registerOptions.name) }/>
                <small className="text-danger">
                {errors?.name && errors.name.message}
                </small>
            </div>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                {...register('email', registerOptions.email)}
                />
                <small className="text-danger">
                {errors?.email && errors.email.message}
                </small>
            </div>
            <div>
                <label>Password</label>
                <input
                type="password"
                name="password"
                {...register('password', registerOptions.password)}
                />
                <small className="text-danger">
                {errors?.password && errors.password.message}
                </small>
            </div>
            <button>Submit</button>
            </form>
        </div>
        </section>
    </Layout>
  );
};
export default Contact;