import React from 'react';
import { useEffect, useState } from 'react';
import style from './Admin.module.css'

function Admin() {

  const [items, setItems] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('/admin');
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

  useEffect(() => {
    fetchData()
    //console.log(items)

  }, [])


  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/admin');
  //     // console.log(response.json())
  //     if (!response.ok) {
  //       throw new Error("Unable to fetch data")
  //     }

  //     //console.log(response.json())
  //     const data = await response.json();

  //     //console.log(data)
  //     setItems([...data])
  //   }
  //   catch (error) {
  //     console.log(error.message)
  //   }
  // }

  console.log(items)

  return (
    <div className={style.admin}><h1>{JSON.stringify(items)}</h1></div>
  )
}

export default Admin