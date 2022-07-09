import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1612320648993-61c1cd604b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    }
  ]

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotelContainer'>
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Wahid Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Jl Diponegoro, Salatiga</span>
          </div>
        
        <span className="hotelDistance">
          Excellent location - 500 from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map(photo => (
            <div className="hotelImgWrapper">
              <img src={photo.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">
              Located a 5-minutes walk from St. Florian's Gate i Krakow, Tower Street Apartments has accomodations with air
              conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a
              microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well
              as an electric tea pot and a cofee machine. Popular points of interest near the apartment include Cloth Hall, Main
              Market Square and Town Hall Tower. The nearest airport is John Paul II International Krakow-Balice, 16.1 km from Tower
              Street Apartments, and the property offers a paid airport shuttle service.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an excellent location score of 9.8!
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel