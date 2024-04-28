import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
       <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/jobs'
        className='block bg-black hover:bg-indigo-500 text-white text-center font-bold py-4 px-6 rounded-xl'
      >
        View All Jobs
      </Link>
    </section>
  )
}

export default ViewAllJobs
