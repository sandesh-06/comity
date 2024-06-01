import React from 'react'

const Clickable = ({className="", innerClass="", preText, postText, text}) => {

  return (
    <div id='clickable' className={`font-cata flex justify-between items-center rounded-md px-2 py-3 hover:bg-gray-200 dark:hover:bg-slate-700 hover:cursor-pointer dark:text-slate-50 text-slate-800 font-semibold truncate ${className}`} >
        <div className={`flex gap-2 items-center ${innerClass}`}>
            {preText && <div className={`rounded-full flex-none `}>{preText}</div>}
            <p>{text}</p>
        </div>
        {postText && <div>{postText}</div>}
    </div>
  )
}

export default Clickable