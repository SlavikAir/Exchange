

const GoodsItem = ({ good: {name, price, img,description,short } = {} }) => {
    return (
        <div className="goods-item">
            <div className="goods-img-block">
                <img alt="img"className="goods-img" src={img}/>
            </div>
            <div className="goods-description">
                <span className="goods-description-name">{name}</span>
                <span className="goods-description-price">Price :{price}</span>
                <div className="goods-description-short">{short}</div>
            </div>
        </div>
    )
}

export default GoodsItem