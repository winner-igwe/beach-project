import { useParams,Link,useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import loadgif from "../images/gif/loading-arrow.gif"
import { IoArrowBack } from "react-icons/io5";


export default function RoomPage() {
    const [RoomItem, setRoomItem] = useState(null)
    const { id } = useParams()
    const value = useLocation()
    const navigate = useNavigate()
    // console.log(value)
    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`/api/rooms/${id}`)
            const data = await response.json()
            setRoomItem(data.rooms)
        }

        fetchData()
    },[id])
    console.log(navigate)

    return RoomItem ? (
        <>
            <div className="hero-cover">
                {/* <span className="back" onClick={() => navigate(-1)}>&larr;</span> */}
                <IoArrowBack
                    className="back" 
                    onClick={() => navigate(-1)}
                />
                <img src={RoomItem.fields.images[0]} alt="" className="cover-img" />
                <div className="banner n-banner">
                    <h1>Luxurious Rooms</h1>
                    <div></div>
                    <Link className="btn-primary" to ="/rooms">Our Rooms</Link>
                </div>
            </div>
            <div className="single-room">
                <div className="single-room-images">
                    {RoomItem.fields.images.slice(-3).map((item,index) => (
                        <img src={item} key={index} alt="" />
                    ))}
                </div>
                <div className="single-room-info">
                    <div className="desc">
                        <h3>Details</h3>
                        <p>{RoomItem.fields.description}</p>
                    </div>
                    <div className="info">
                        <h3>Info</h3>
                        <h6>Price: {RoomItem.fields.price}</h6>
                        <h6>Size: {RoomItem.fields.size}</h6>
                        <h6>Max Capacity : {RoomItem.fields.capacity}</h6>
                        {RoomItem.fields.pets && <h6>pets allowed</h6>}
                        {RoomItem.fields.breakfast && <h6>Free breakfast included</h6>}
                    </div>
                    <div className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {RoomItem.fields.extras.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
        
    ) :
    (
        <>
            <div className="featured-rooms-err">
                <h3>rooms data loading...</h3>
                <img src={loadgif} alt="" />
             </div>
        </>
    )
}