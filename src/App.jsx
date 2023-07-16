import { useState } from 'react'
import axios from 'axios'
import Coach from './Components/Coach'
import { useEffect } from 'react'

function App() {
  const [seatingPosition, setSeatingPosition] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [numOfSeatsToBook, setNumOfSeatsToBook] = useState(0)

  const ORIGIN = "https://booking-system-be-i9xs.onrender.com"

  useEffect(() => {
    axios.get(`${ORIGIN}/api/v1/booking`).then((value) => {
      const { data } = value
      setIsLoading(false)
      console.log(data.value)
      setSeatingPosition(data.value)
    })
  }, [])

  const handleRemoveBookings = async () => {
    axios.delete(`${ORIGIN}/api/v1/booking`).then((value) => {
      const { data } = value
      setNumOfSeatsToBook(0)
      setSeatingPosition(data.value)
    })
  }

  const handleAddBooking = async (numOfSeatsToBook) => {
    if (numOfSeatsToBook > 0 && numOfSeatsToBook <= 7) {
      axios
        .post('`${ORIGIN}/api/v1/booking`', {
          numOfSeatsToBook: numOfSeatsToBook,
        })
        .then((value) => {
          const { data } = value
          setNumOfSeatsToBook(0)
          setSeatingPosition(data.value)
          if (data.alert) {
            setTimeout(() => {
              alert(data.alert)
            },0)
          }
        })
    }
  }

  return (
    <>
      <div className="flex h-full w-full justify-center items-center bg-neutral-400/20">
        <div className="flex items-center justify-center w-5/6 h-5/6 ">
          <Coach
            seatingPosition={seatingPosition}
            isLoading={isLoading}
            handleRemoveBookings={handleRemoveBookings}
            handleAddBooking={handleAddBooking}
            numOfSeatsToBook={numOfSeatsToBook}
            setNumOfSeatsToBook={setNumOfSeatsToBook}
          />
        </div>
      </div>
    </>
  )
}

export default App
