import { Business } from "../Business/Business";
import { Networks } from "../Networks/Networks";
import { Vip } from "../Vip/Vip";
import { MainNavigation } from "./MainNavigation/MainNavigation";


const Main = () => {
    return (
        <main className="main">
                <MainNavigation />
                <Vip />
                <Business />
                <Networks />
        </main>
    )
}
export default Main;        