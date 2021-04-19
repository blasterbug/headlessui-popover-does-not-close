/** @format */
import { useRef, useEffect } from 'react'
import { useParams } from 'react-router';

/* This example requires Tailwind CSS v2.0+ */
export default function Page() {
  let content = useRef(null)
  let { page } = useParams();

  useEffect(() => {
    content.current.focus()
  }, [page])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Page
          </span>
          <h2 tabIndex={-1} ref={content} className="focus:outline-none mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {page}
          </h2>
        </div>
      </div>
    </div>
  );
}
