import CategoryItem from '../CategoryItem/CategoryItem'

import {categories} from '../../data'

import './Categories.css'


const Categories = () => {
  return (
    <div className='categories-container'>
      {categories.map((item)=>{
        return <CategoryItem item={item} key={item.id}/>
      })}
    </div>
  )
}

export default Categories
