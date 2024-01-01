import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import JobSearchComponent from '../components/job-search-component/JobSearchComponent'
import JobSearch from '../components/search-jobs/SearchJobComponent'

const searchJobsPage = () => {
  return (
    <>
     <Navbar/> 
     <JobSearch/>
     <Footer/>
    </>
  )
}

export default searchJobsPage
