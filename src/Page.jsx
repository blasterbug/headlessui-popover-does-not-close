/** @format */

import { useParams } from 'react-router';

/* This example requires Tailwind CSS v2.0+ */
export default function Page() {
  const { page } = useParams();
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Page
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {page}
          </p>
        </div>
      </div>
    </div>
  );
}
