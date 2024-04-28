import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import tfmvideo from "../assets/tfmvideo.mp4"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      // Check if user is admin
      if (user.role === 'admin') {
        navigate("/dashboard_admin"); // Navigasi ke laman dashboard admin
      } else {
        navigate("/dashboard");
      }
    } else if (isSuccess) {
      // Jika isSuccess true dan user tidak ada, artinya login berhasil tapi user tidak ada (tidak admin)
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row h-min">
      {/* Bagian kiri split screen */}
      <div className="lg:flex-1 bg-gray-200 p-6 flex justify-center items-center">
        <video 
        // className="border-none w-full" 
        src={tfmvideo} autoPlay loop muted />
      </div>

      {/* Bagian kanan split screen */}
      <div className="lg:flex-1 p-6">
        <div className="sm:w-full sm:max-w-sm sm:mx-auto">
          <h2 className="text-3xl font-bold mb-4">Masuk Akun</h2>

          <form onSubmit={Auth} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Alamat Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                  value={email}
                      onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Kata Sandi
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-amber-600 hover:text-amber-500">
                    Lupa Kata Sandi?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                  value={password}
                      onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {isError && <p className="has-text-centered">{message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                {isLoading ? "Loading..." : "Masuk"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Belum Punya Akun?{' '}
            <a href="#" className="font-semibold leading-6 text-amber-600 hover:text-amber-500">
              Daftar Akun
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;