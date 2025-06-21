import JobList from './components/JobList'
import Hero from './components/Hero'
import { useState } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='container-custom mx-auto p-4'>
        <JobList searchTerm={searchTerm}/>
      </div>
    </>
  )
}

export default App