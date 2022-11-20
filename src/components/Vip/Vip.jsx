import { useEffect } from "react"
import { vipFetch } from "../../store/Action/VipAction"
import { useAppDispatch, useAppSelector } from "../../store/redux"
import GoodsItem from "../Category/modules/GoodsItem"


export const Vip = () => {
    const {goods} = useAppSelector(state => state.VipReducer)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(vipFetch())
    },[] )

    return (
        <div className="vip">
            <div className="container">
                <div className="vip-items">
                    <div className="vip-advertisement">
                        <h1>Vip-advertisement</h1>
                    </div>
                    <div className="vip-grid">
                        {goods ? 
                            goods.map( e => <GoodsItem key={Math.random()} good={e} />)
                        :
                        <span>товар не найен</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}