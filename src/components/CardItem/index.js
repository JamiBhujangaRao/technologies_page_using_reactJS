import './index.css'

const CardItems = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} listed-cards`}>
      <div className="cards">
        <h1 className="card-head">{title}</h1>
        <p className="description">{description}</p>
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItems
