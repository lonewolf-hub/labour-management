import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import JobSearchComponent from '../components/job-search-component/JobSearchComponent'

const findJobsPage = () => {
  return (
    <>
      <Navbar/>
      <JobSearchComponent/>
      <Footer/>
    </>
  )
}

export default findJobsPage
