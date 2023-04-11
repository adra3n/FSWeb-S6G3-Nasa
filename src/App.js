import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Layout from './layouts/Layout'

function App() {
  const [apod, setApod] = useState(null)
  useEffect(() => {
    const apodData = axios
      .get('')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  )
}

export default App
