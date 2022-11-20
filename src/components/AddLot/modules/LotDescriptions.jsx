import axios from "axios"
import { LotSlice } from "../../../store/reducers/LotReducer"
import { useAppDispatch, useAppSelector } from "../../../store/redux"
import { BigButton } from "../../../UI/Button"


const LotDescriptions = () => {
    const {description,category,img,name,price,short} = useAppSelector (state => state.LotReducer)
    const {addDescription,addShort} = LotSlice.actions
    const dispatch = useAppDispatch();

    async function addLot () {
        await axios.post(`http://localhost:3001/${category}`, {
            id: Math.floor(Math.random() * (Math.random() * 100500)),
            name: name,
            price: price,
            img: img,
            description:description,
            short: short
          }) .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    return (
        <div className="lot-descriptions">
            <div className="label-lot " for="lot-name">Descriptions:</div>
            <textarea value={description} 
                      placeholder="enter text" 
                      rows="4" 
                      className="lot-textarea"
                      onChange={(e)=>dispatch(addDescription(e.target.value))} >
            </textarea>
            <div className="label-lot " for="lot-name">Short Descriptions:</div>
            <textarea value={short} 
                      placeholder="enter text" 
                      rows="1" 
                      className="lot-textarea"
                      onChange={(e)=>dispatch(addShort(e.target.value))} >
            </textarea>

            <BigButton style={'big-button border-button'}  
                       name={"Add Lot"} 
                       onClick={addLot}/>
        </div>
    )
}

export default LotDescriptions