import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Bagian kiri split screen */}
      <div className="lg:flex-1 bg-gray-200 p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to Split Screen</h2>
        <p className="text-gray-700">
          This is the left side of the split screen. You can add any content or components here.
        </p>
      </div>

      {/* Bagian kanan split screen */}
      <div className="lg:flex-1 p-6">
        <div className="sm:w-full sm:max-w-sm sm:mx-auto">
          <h2 className="text-3xl font-bold mb-4">Masuk Akun</h2>

          <form className="space-y-6" action="#" method="POST">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Kata Sandi
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Masuk
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Belum Punya Akun?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Daftar Akun
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App
