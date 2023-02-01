const Cards = ({ title, body, image, styles }) => {
    return (
        <div className="card text-center" style={styles}>
            <img className="text-center" src={image} alt="options" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{body}</p>
            </div>
        </div>
    )
}

export default Cards;