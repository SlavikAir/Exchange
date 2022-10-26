import { Input } from "../../../UI/Input"


export const LotImg = () => {

    let updateImg = (event) => {
        const preview = document.getElementById('preview')

        let reader = new FileReader();
        let file = event.target.files[0]

        if (file) {
            reader.readAsDataURL(file)
           
        }
        reader.onload = function () {
            preview.src = reader.result
            console.log(reader.result)
        }

    }

    return (
        <div className="lot-img">
            <label className="label-lot" for="lot-name">Add Img : </label>
            <Input type="file"
                className="lot-file"
                onChange={updateImg} />
            <div >
                <img id="preview" src="" className="lot-img-preview" />
            </div>

        </div>
    )
}