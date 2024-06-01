import React from 'react'
import { ExploreAsideContent, ExploreMainContent } from '../../components'

const ExploreComity = () => {
  return (
    <div className='flex w-full h-full pb-16 sm:pb-0'>
      {/* Side Content */}
      <div className='hidden md:block md:w-1/3 lg:w-1/4 xl:w-1/5'>
        <ExploreAsideContent />
      </div>

      {/* Main Content */}
      <main className='flex-1 pb-2 sm:pb-0'>
        <ExploreMainContent />
      </main>
    </div>
  )
}

export default ExploreComity