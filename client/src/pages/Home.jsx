import React from 'react';
import { useEffect, useState } from 'react';
import style from './Home.module.css'

function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchData()
    //console.log(items)
  }, [])

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
      setItems([...data])
    }
    catch (error) {
      console.log(error.message)
    }
  }

  console.log(items)


  return (
    <div className={style.home}><h1>Hello {JSON.stringify(items)}, Welcome to my home page</h1></div>
  )
}

export default Home