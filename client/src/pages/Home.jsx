import React from 'react';
import { useEffect, useState } from 'react';
import style from './Home.module.css'

function Home(props) {

  useEffect(() => {
    fetchData()
  }, [])

  const [ndata, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('/');
      // console.log(response.json())
      if (!response.ok) {
        throw new Error("Unable to fetch data")
      }

      //console.log(response.json())
      const data = await response.json();

      //console.log(data)
      setData([...data])
    }
    catch (error) {
      console.log(error.message)
    }
  }

  console.log(ndata)

  return (
    <div className={style.home}><h1>Hello {"john"}, Welcome to my home page</h1></div>
  )
}

export default Home