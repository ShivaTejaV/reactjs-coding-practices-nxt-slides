import './index.css'

const MiniSlide = props => {
  const details = {props}
  const {id, heading, description} = details
  return (
    <div className="container-mini-slide">
      <h1 className="heading">{heading}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default MiniSlide
