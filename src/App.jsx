import React from 'react'
import './App.scss';
import Topbar from './components/topbar/Topbar'
import Counter from './components/counter/Counter'
import Form from './components/form/Form'
import BookingForm from './components/bookingForm/BookingForm'
import Footer from './components/footer/Footer'
import WheatherApp from './components/wheatherApp/WheatherApp';


const App = () => {
  return (
    <div className="App">
      <Topbar/>
      <div className="main-content">
      <div className="section">
       <Counter/>
      </div>
      <div className="section">
       <Form/>
      </div>
      <div className="section">
       <BookingForm/>
      </div>
      <div className="wheatherApp-section">
       <WheatherApp/>
      </div>
      </div>
     <Footer/>
    </div>
  )
}

export default App