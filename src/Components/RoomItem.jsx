import React from "react";
import { Link } from "react-router-dom";


export default function RoomItem({room}){
    // const {...rest} = props
    // console.log(room.fields)
    return (
        <div className="room">
            <div className="img-container">
                <img src={room.fields.images[0]} alt="" />
                <div className="price-top">
                    <h6>{room.fields.price}</h6>
                    <h6>per night</h6>
                </div>
                <Link 
                    className="room-link btn-primary" 
                    to={`/rooms/${room.id}`}
                    // state={{ search: searchParams.toString() }}
                    >
                        Features
                </Link>
            </div>
            <div className="room-info">
                <h3>{room.fields.name}</h3>
            </div>
        </div>
    )
}