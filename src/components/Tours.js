import React from 'react'
import Card from './Card'

function Tours({ tours, removeTour, AddTour }) {
  return (
    <div className='container'>
      <div><h2 className='title'>Plan Tours</h2></div>
      <div className='cards'>
        {
          tours.map((tour) => <Card key={tour.id} {...tour} removeTour={removeTour} AddTour={AddTour}></Card>
          )
        }
      </div>
    </div>
  )
}

export default Tours