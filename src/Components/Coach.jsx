import Seats from './Seats'

const Coach = ({
  seatingPosition,
  isLoading,
  handleRemoveBookings,
  handleAddBooking,
  numOfSeatsToBook,
  setNumOfSeatsToBook,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full h-4/6 bg-sky-600 flex items-center justify-evenly">
        <EntryOrExit message={'Entry'} />
        {isLoading ? <Loading /> : <Seats seatingPosition={seatingPosition} />}
        <EntryOrExit message={'Exit'} />
      </div>
      <ControlArea
        handleRemoveBookings={handleRemoveBookings}
        handleAddBooking={handleAddBooking}
        numOfSeatsToBook={numOfSeatsToBook}
        setNumOfSeatsToBook={setNumOfSeatsToBook}
      />
    </div>
  )
}

const ControlArea = ({
  handleRemoveBookings,
  handleAddBooking,
  numOfSeatsToBook,
  setNumOfSeatsToBook,
}) => {
  return (
    <div className="h-2/6 w-full px-5 my-3 rounded-md bg-blue-400/20 backdrop-blur-md flex justify-between items-center">
      <div className="h-3/6 p-2 bg-slate-500/20 flex backdrop-blur justify-between rounded-md items-center">
        <label className="m-1" htmlFor="numOfSeatsToBook">
          Number Of Seats To Book:{' '}
        </label>
        <input
          className="m-1 p-1 w-20"
          type="number"
          value={numOfSeatsToBook}
          onChange={(e) => {
            setNumOfSeatsToBook(e.target.value)
          }}
        />
        <button
          className="mx-2 px-2 py-1 bg-slate-400 rounded-lg active:bg-slate-500 uppercase"
          onClick={() => {
            handleAddBooking(numOfSeatsToBook)
          }}
        >
          Book!
        </button>
      </div>
      <div className="h-3/6 p-2 bg-slate-500/20 backdrop-blur flex justify-between rounded-md items-center">
        <button
          className="mx-2 px-2 py-1 bg-red-500 rounded-lg active:bg-red-600 uppercase"
          onClick={() => {
            handleRemoveBookings()
          }}
        >
          Remove Bookings
        </button>
      </div>
    </div>
  )
}

const EntryOrExit = ({ message }) => {
  return (
    <>
      <div className="w-30 h-5/6 justify-center items-center flex bg-orange-200 m-2 rounded-3xl">
        <p
          className={`${
            message === 'Entry' ? '-rotate-90' : 'rotate-90'
          } origin-center`}
        >
          {message} This Side
        </p>
      </div>
    </>
  )
}

const Loading = () => {
  return (
    <div className="w-3/4 flex justify-center items-center">
      <Spinner />
    </div>
  )
}

const Spinner = () => {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full text-white border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  )
}

export default Coach
