
import React from 'react'
import ListboxComponent from '../elements/Listbox'

function Filters() {
  return (
    <div className='flex flex-row justify-between items-center px-4 pb-3 w-100 relative h-fit'>
     <ListboxComponent defaultValue={'Select Location'}/>
     <ListboxComponent defaultValue={'Online/Offline'}/>
     <ListboxComponent defaultValue={'Select Batch'}/>
     <ListboxComponent defaultValue={'Select Language'}/>
     <ListboxComponent defaultValue={'Select Language'}/>
    </div>
  )
}

export default Filters