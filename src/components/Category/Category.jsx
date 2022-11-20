import { useAppSelector } from "../../store/redux"
import GoodsItem from "./modules/GoodsItem"


export const Category = () => {
    const {goods} = useAppSelector(state => state.GoodsReducer)
    

    return (
        <div className="category">
            <div className="container">
                <div className="category-items">
                    {goods ? 
                        goods.map( e => <GoodsItem key={e.id} good={e}/>)
                    : 
                    <div>Товаров не найдено</div>}
                </div>
            </div>
        </div>
    )
}