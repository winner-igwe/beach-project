import { Link,useLocation  } from "react-router-dom"
import { useParams } from 'react-router-dom';

export default function Hero() {
    const { id } = useParams();
    const inRoomItem = id ? true : false;
    const location = useLocation()
    const inRooms = location.pathname === '/rooms' ? true : false
    

    return (
        inRoomItem ? null
         : 
        <div className={inRooms ? "roomsHero" : "defaultHero"}>
            <div className="banner">
               {inRooms ? <h1>Our Rooms</h1>  : <h1>Luxurious Rooms</h1>}
                <div></div>
                {inRooms ? <p></p> : <p>Deluxe rooms starting at $299</p>}
                {inRooms ? <Link className="btn-primary" to ="/">Return Home</Link> : <Link className="btn-primary" to ="/rooms">Our Rooms</Link>}
            </div>
        </div>
    )
}