const Card = ({ title, body, image, styles }) => (
    <div className="card" style={{ backgroundColor: '#ffff', height: '100%', ...styles }}>
        {image}
        <div class="card-body">
            {title}
            {body}
        </div>
    </div>
)

export default Card;