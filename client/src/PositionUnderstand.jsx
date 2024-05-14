import React from 'react'

const PositionUnderstand = () => {
  return (
    <div className="bg-slate-800 w-screen h-[120vh] p-4">
        <div className="bg-yellow-400 h-96 w-96 sticky">
          Parent
          <div className="bg-red-500 h-72 w-72">
            Child
            <div className="bg-green-500 h-60 w-60 sticky">
              inner child
            </div>
          </div>
        </div>
      </div>
  )
}

export default PositionUnderstand