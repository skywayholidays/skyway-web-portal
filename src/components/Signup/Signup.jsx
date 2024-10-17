import React from 'react';


const Signup = () => {
  return (
    <section>
      <div className=" mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
          <h2 className="leading-[50px] text-[40px] font-semibold">Create an account</h2>
          </div>
          {/* Signup form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label className="mb-4 text-base font-bold " htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input id="name" type="text" className="form-input w-full" placeholder="Your full name" required />
              </div>
              <div>
                <label className="mb-4 text-base font-bold" htmlFor="company">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input id="company" type="text" className="form-input w-full" placeholder="Your company name" required />
              </div>
              <div>
                <label className="mb-4 text-base font-bold" htmlFor="email">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input id="email" type="email" className="form-input w-full" placeholder="Your work email" required />
              </div>
              <div>
                <label className="mb-4 text-base font-bold" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input id="password" type="password" className="form-input w-full" placeholder="Password (at least 10 characters)" required />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button type="submit" className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 text-white">
                Register
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400/25"></span>
                or
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400/25"></span>
              </div>
              <button className="btn w-full bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300">
                Sign In with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Already have an account?{" "}
            <div className="font-medium text-indigo-500" to="/signin">
              Sign in
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

