import './CategoryItem.css'

const CategoryItem = ({item}) => {
  return (
    <div className='categoryitem-container'>
      <img src={item.image} alt="category img"/>

      <div className='categoryitem-info'>
        <h1>
          {item.title}
        </h1>

        {/* <button>
          SHOP NOW
        </button> */}
      </div>
    </div>
  )
}

export default CategoryItem
