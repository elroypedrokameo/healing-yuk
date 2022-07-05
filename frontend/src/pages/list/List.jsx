import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"

const List = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </>
  )
}

export default List