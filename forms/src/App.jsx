import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const onSubmit = data => console.log(data);

  console.log(errors);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
        <input
          type="text"
          placeholder="Username"
          {...register("Username", { maxLength: 80 })}
          className="m-2 p-2 border border-gray-300 rounded"
        />
        {errors.Username && <p>{errors.Username.message}</p>}

        <input
          type="text"
          placeholder="Email"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entered value does not match email format"
            }
          })}
          className="m-2 p-2 border border-gray-300 rounded"
        />
        {errors.Email && <p>{errors.Email.message}</p>}

        <input
          type="tel"
          placeholder="Telp Number"
          {...register("Telp Number", {
            required: "Telp Number is required",
            maxLength: {
              value: 12,
              message: "Telp Number cannot exceed 12 characters"
            }
          })}
          className="m-2 p-2 border border-gray-300 rounded"
        />
        {errors["Telp Number"] && <p>{errors["Telp Number"].message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character"
            }
          })}
          className="m-2 p-2 border border-gray-300 rounded"
        />
        {errors.Password && <p>{errors.Password.message}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("Confirm Password", {
            required: "Confirm Password is required",
            validate: value =>
              value === getValues('Password') || "The passwords do not match"
          })}
          className="m-2 p-2 border border-gray-300 rounded"
        />
        {errors["Confirm Password"] && <p>{errors["Confirm Password"].message}</p>}

        <input type="submit" className="m-2 bg-green-500 text-white p-2 rounded cursor-pointer hover:bg-green-600" />
      </form>
    </div>
  );
}
