import LotDescriptions from "./modules/LotDescriptions"
import { LotImg } from "./modules/LotImg"
import LotInput from "./modules/LotInput"


const AddLot = () => {
    return (
        <div className="add_lot">
            <div className="container">
                <div className="add_lot-items">
                    <div className="add_lot-header">
                        <h1 className="add_lot-header-title">What do you want to sell?</h1>
                    </div>
                    <div className="add_lot-main">
                        <div className="add_lot-main-data">
                           <LotInput />
                        </div>
                        <div className="add_lot-main-descriptions">
                            <LotDescriptions />
                        </div>
                    </div>
                    <div className="add_lot-img">
                        <LotImg />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLot