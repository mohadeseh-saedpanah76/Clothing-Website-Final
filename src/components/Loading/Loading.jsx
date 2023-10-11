import './Loading.css'

const Loading = (props) => {
  return (
    <div className='loading-container'>
      {props.children}
    </div>
  )
}

export default Loading
