import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import photo from "../../assets/log_bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const loggedUser = await axios.post(
        "http://localhost:5000/users/login",
        data
      );

      if (loggedUser) {
        localStorage.setItem("access-token", loggedUser.data.token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Log In Successfully!",
          showConfirmButton: true,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login failed",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(
            ${photo}
          )`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-gray-700">
          <div className="hero min-h-screen bg-transparent">
            <div className="hero-content">
              <div className="card w-full max-w-sm shadow-2xl bg-base-100/50">
                <h2 className="text-gray-800 text-3xl font-bold mt-6">
                  Please Login
                </h2>
                <form
                  className="card-body pb-4 px-6 pt-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                      <span className="text-red-600 text-left text-sm">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <div className="flex items-center gap-1">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>

                      {/* {showPass ? (
                        <FaEye
                          onClick={() => setShowPass(!showPass)}
                          className=" ms-auto hover:cursor-pointer"
                          title="Hide password"
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={() => setShowPass(!showPass)}
                          className=" ms-auto hover:cursor-pointer"
                          title="Show password"
                        />
                      )} */}
                    </div>
                    <input
                      type={"password"}
                      placeholder="password"
                      {...register("password", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.password && (
                      <span className="text-red-600 text-left text-sm">
                        Password is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <button className="bg-gray-200 text-gray-950 border-2 border-gray-200 hover:bg-gray-950 hover:text-white font-bold text-xl uppercase px-3 py-1 rounded-md">
                      Log in
                    </button>
                  </div>
                </form>

                {/* <div className="form-control mx-6 ">
                  <button className=" bg-white px-8 mb-4 py-1 font-bold rounded hover:text-blue-600">
                    <span className="flex items-center gap-3 justify-center">
                      <span></span> <span> Google Log In</span>
                    </span>
                  </button>
                </div> */}
                <div className="form-control mx-7 mb-5">
                  <label className="label">
                    <span className="text-black label-text-alt">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="font-bold link link-hover"
                      >
                        Register
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

export default Login;
