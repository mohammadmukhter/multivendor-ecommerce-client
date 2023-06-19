import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgImg from "../../assets/log_bg.jpg";

const Register = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setError("");

    if (data.password !== data.confirmPassword) {
      setError("Confirm password does not matched!");
      return;
    }
  };

  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(
          ${bgImg}
        )`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-gray-700">
          <div className="hero min-h-screen bg-transparent">
            <div className="hero-content ">
              <div className="card  w-full mt-12 shadow-2xl bg-base-100/50">
                <h2 className="text-gray-800 text-3xl font-bold mt-6">
                  Register Now
                </h2>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                        className="input input-bordered"
                      />
                      {errors.name && (
                        <span className="text-red-600 text-left text-sm w-64 mt-1">
                          Name is required
                        </span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        {...register("email", { required: true })}
                        className="input input-bordered"
                      />
                      {errors.email && (
                        <span className="text-red-600 text-left text-sm w-64 mt-1">
                          Email is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        {...register("password", {
                          required: true,
                          pattern:
                            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
                          minLength: 6,
                        })}
                        className="input input-bordered"
                      />
                      {errors.password?.type === "required" && (
                        <span className="text-red-600 text-left text-sm w-64 mt-1">
                          Password is required
                        </span>
                      )}
                      {errors.password?.type === "pattern" && (
                        <span className="text-red-600 text-left text-sm w-64 mt-1">
                          Password Should be at least one Capital Letter and One
                          special character
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="text-red-600 text-left text-sm w-64 mt-1">
                          Password Should be at least 6 character or more
                        </span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", { required: true })}
                        className="input input-bordered"
                      />
                      {errors.confirmPassword && (
                        <span className="text-red-600 text-left text-sm w-64 mt-1">
                          Confirm Password is required
                        </span>
                      )}
                    </div>
                  </div>
                  <label className="label">
                    <span className="text-red-600 mx-auto">{error}</span>
                  </label>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo URL"
                      {...register("photoUrl", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.photoUrl && (
                      <span className="text-red-600 text-left text-sm w-64 mt-1">
                        Photo URL is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <button className="bg-gray-200 text-gray-950 border-2 border-gray-200 hover:bg-gray-950 hover:text-white font-bold text-xl uppercase px-3 py-1 rounded-md">
                      Register
                    </button>
                  </div>
                </form>

                <div className="form-control mx-7 mb-5">
                  <label className="label">
                    <span className="text-black label-text-alt">
                      Already have an account?{" "}
                      <Link to="/login" className="font-bold link link-hover">
                        Login
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
