import { goodsFetch } from "../../../store/Action/GoodsAction"
import { useAppDispatch } from "../../../store/redux"


export const NavItem  = ({img}) => {
    const dispatch = useAppDispatch()

    return (
        <div className="main-item" >
            <div className={`main-item-back ${img}`} onClick={()=>dispatch(goodsFetch(img))}></div>
        </div>
    )
}