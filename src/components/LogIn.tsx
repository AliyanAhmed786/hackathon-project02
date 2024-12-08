import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function AuthSection() {
  return (
    <div className="flex min-h-screen bg-white flex-col md:flex-row">
      {/* Login Section */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log In
            </h2>
          </div>

          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username or email address
                </label>
                <div className="mt-2">
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block h-[75px] w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block h-[75px] w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-7 w-[30px] rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                {/* Replace standard button with ShadCN Button */}
                <Button variant="outline" color="indigo" className="border-2 border-black w-full md:w-[215px] h-16">
                  Log In
                </Button>
                <div className="text-sm leading-6 ml-0 md:ml-5 mt-5 md:mt-0">
                  <Link href="#" className="font-semibold text-black">
                    Lost Your Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>

          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="register-email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block h-[75px] w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <p>A link to set a new password will be sent to your email address.</p>
              </div>

              <div>
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy</span>.</p>
              </div>

              <div>
                {/* Replace standard button with ShadCN Button */}
                <Button variant="outline" color="indigo" className="border-2 border-black w-full md:w-[215px] h-16">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
