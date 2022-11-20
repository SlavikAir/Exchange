import { LotSlice } from "../../../store/reducers/LotReducer"
import { useAppDispatch } from "../../../store/redux"
import { Input } from "../../../UI/Input"


export const LotImg = () => {

    const {addImg} = LotSlice.actions; 
    const dispatch = useAppDispatch()

    

    let updateImg = (event) => {
        const preview = document.getElementById('preview')

        let reader = new FileReader();
        let file = event.target.files[0]

        if (file) {
            reader.readAsDataURL(file)
           
        }
        reader.onload = function () {
            dispatch(addImg(reader.result))
            preview.src = reader.result
        }

    }

    return (
        <div className="lot-img">
            <label className="label-lot" for="lot-name">Add Img : </label>
            <div >
                <img alt="" id="preview" src="" className="lot-img-preview" />
            </div>

            <Input type="file"
                className="lot-file"
                onChange={updateImg} />

        </div>
    )
}