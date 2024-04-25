import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import RoomItem from "../Components/RoomItem";

export default function Rooms() {
    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState([])
    const [all, setAll] = useState(true)
    const [filter, setFilter] = useState(false)
    // const [searchParams, setSearchParams] = useSearchParams();
    const [currSearch, setCurrSearch] = useState({
        roomType:"any",
        guests:1,
        price:400,
        min:200,
        max:1000,
        breakfast:false,
        pets:false,

    });

    useEffect(() => {
        async function fetchData(){
            const response = await fetch("api/rooms")
            const result = await response.json()
            setData(result.rooms)
        }
            
        fetchData()
        
    },[])

    useEffect(() => {
        if (data !== null) {
            filterData();
        }
    }, [data, currSearch,all,filter])

    console.log(filter,all)


    function handleChange(event) {
        event.preventDefault();
        const {name,value,type,checked} = event.target
        setCurrSearch((prev) => {
            return {...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })

        filterData()
    }

    function filterData(){
        let filtered 
        if (all) {
            filtered = data

        }else {
            filtered = data.filter(item => {
                const condition = (
                    item.fields.capacity >= currSearch.guests &&
                    item.fields.price <= currSearch.price &&
                    item.fields.size <= currSearch.max &&
                    item.fields.size >= currSearch.min &&
                    item.fields.pets === currSearch.pets &&
                    item.fields.breakfast === currSearch.breakfast
                )
                if (currSearch.roomType === "any") {
                    return condition
                } else {
                    return item.fields.type === currSearch.roomType &&
                    condition
                }
    
            })

        }
        
        
        setFilteredData(filtered)
    }


    return (
        <div>  
            <section className="filter-container">
                <div className="btn-con">
                    <button 
                        className={`btn-primary ${all ? 'actives' : ""}`}
                        onClick={() => {
                            setAll(prev => !prev)
                            setFilter(prevFilter => !prevFilter)
                        }}
                        >
                        ALL ROOMS
                    </button>
                    <button 
                        className={`btn-primary ${filter ? 'actives' : ""}`}
                        onClick={() => {
                            setFilter(prev => !prev)
                            setAll(prevAll => !prevAll)
                        }}

                        >
                        FILTERED ROOMS
                    </button>
                </div>
                {filter && <form onChange={handleChange} className="filter-form">
                    <div className="form-group">
                        <label htmlFor="room-type">Room Type:</label>
                        <select 
                            name="roomType" 
                            id="room-type" 
                            value={currSearch.roomType} 
                            onChange={handleChange}>
                            <option value="any">any</option>
                            <option value="family">Family</option>
                            <option value="single">Single</option>
                            <option value="presidential">Presidential</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Guests:</label>
                        <select 
                            name="guests" 
                            id="guests" 
                            value={currSearch.guests} 
                            onChange={handleChange}>
                            {[...Array(Math.max(...data.map(item => item.fields?.capacity)))].map((_, index) => (
                                <option key={index + 1} 
                                    value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Room Price {currSearch.price}:</label>
                        <input 
                            type="range" 
                            name="price" 
                            id="price" 
                            min="0" 
                            max="1000" 
                            step="50" 
                            value={currSearch.price} 
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="room-size">Room Size:</label>
                        <input
                            className="size-inputs"
                            type="number"
                            name="min" 
                            id="min" 
                            placeholder="Min" 
                            step="50"
                            value={currSearch.min} 
                            onChange={handleChange} />
                        <input 
                            className="size-inputs" 
                            type="number" 
                            name="max" 
                            id="max" 
                            placeholder="Max"
                            step="50"
                            value={currSearch.max} 
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Additional Options:</label><br />
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast" 
                            checked={currSearch.breakfast} 
                            onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label><br />
                        <input 
                            type="checkbox" 
                            name="pets" 
                            id="pets" 
                            checked={currSearch.pets} 
                            onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </form> }  
            </section>
            <section className="roomslist">
                <div className="roomslist-center">
                    {
                        filteredData.length > 0 ? filteredData.map(item => (
                            <RoomItem
                                key={item.id}
                                room = {item}
                            />
                        )) : <p className="no">No rooms unfortunately</p>
                    }
                </div>

            </section>     
            
        </div>
    );
}
