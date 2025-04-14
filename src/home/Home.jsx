import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBooks from "./FavBooks";
import OtherBooks from "./OtherBooks";
import Review from './Review'
export default function Homepage() {
    return (
        <div className="">
            {/* <h1>YOOOOOOO</h1> */}
            <Banner />
            <BestSellerBooks />
            <FavBooks />
            <OtherBooks />
            <Review />
        </div>
    )
}