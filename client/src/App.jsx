
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedResource from './components/SharedResource';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { useEffect, useState } from 'react';

function App() {

  // const [ndata, setData] = useState([])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/")
  //     //console.log(response)
  //     if (!response.ok) {
  //       throw new Error("Unable to fetch data")
  //     }
  //     const data = await response.json();

  //     //console.log(data)
  //     setData([...data])
  //   }
  //   catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // console.log(ndata)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SharedResource />}>
          <Route index element={<Home />} />
          <Route path='/admin' element={<Admin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
