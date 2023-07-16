const Seats = ({ seatingPosition }) => {
  return (
    <div className="flex items-center justify-center w-3/4 h-5/6 bg-slate-950/50 rounded-3xl">
      <div className="grid grid-cols-12 justify-between w-5/6 h-5/6">
        {seatingPosition.map((item, index) => {
          if (index % 7 === 0) {
            const rowPositions = seatingPosition.slice(index, index + 7)
            return (
              <Row
                rowSeatingPositions={rowPositions}
                rowNumber={index / 7 + 1}
                key={index}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

const Row = ({ rowSeatingPositions, rowNumber }) => {
  let adjustedSeatingPositions = rowSeatingPositions
  const remainingPosition = 7 - rowSeatingPositions.length
  if (remainingPosition > 0) {
    const adjustmentArray = new Array(remainingPosition).fill(null)
    adjustedSeatingPositions = [...adjustedSeatingPositions, ...adjustmentArray]
  }
  return (
    <>
      <div key={rowNumber} className="grid items-center">
        {adjustedSeatingPositions.map((item, index) => {
          return <Seat bookingStatus={item} index={index} key={index} />
        })}
      </div>
    </>
  )
}

const Seat = ({ bookingStatus, index }) => {
  const isSlotAStub = bookingStatus === null
  return (
    <>
      {isSlotAStub ? (
        <div>&nbsp;</div>
      ) : (
        <div
          className={` row-span-1 ${
            bookingStatus === 1 ? 'bg-green-500' : 'bg-gray-500'
          }  w-5/6 h-4/6 rounded-md`}
        >
          &nbsp;
        </div>
      )}
      {index % 4 === 3 && <div className="col-span-1">&nbsp;</div>}
    </>
  )
}

export default Seats
