import React from 'react'

const Clickable = ({className="", preText, postText, text}) => {

  return (
    <div className={`font-cata flex justify-between rounded-md px-2 py-3 hover:bg-gray-200 dark:hover:bg-slate-700 hover:cursor-pointer dark:text-slate-50 text-slate-700 font-semibold ${className}`}>
        <div className={`flex gap-2 items-center text-lg  ${className}`}>
            {preText && <div className='rounded-full'>{preText}</div>}
            <p>{text}</p>
        </div>
        {postText && <div>{postText}</div>}
    </div>
  )
}

export default Clickable