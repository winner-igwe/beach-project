import {React, useEffect, useState} from "react"
import RoomItem from "../Components/RoomItem";
import loadgif from "../images/gif/loading-arrow.gif"
// import "../server"


export default function Home() {;

    const [rooms, Setrooms] = useState(null)
    // const [err, Seterr] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          // try {
            const response = await fetch('api/rooms');
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            // setRooms(result);
            Setrooms(data.rooms)

          // } catch (error) {
          //   Seterr(error)
          // }
        };
      
        fetchData();
      }, []);

      const featuredRooms = rooms?.filter(item => item.fields.featured === true)
  

      
    return (
      <>
        <section className="services">
            <div className="section-title">
                <h4>services</h4>
                <div></div>
            </div>
            <div className="services-center">
                <article className="service">
                    <span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M296 464h-56V338.78l168.74-168.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L176 338.78V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0z"></path></svg>
                    </span>
                    <h6>free cocktails</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
                <article className="service">
                    <span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"></path></svg>
                    </span>
                    <h6>Endless Hiking</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
                <article className="service">
                    <span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73zM64 192V96h96v96H64zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160-240h-96V96h96v96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-96-240V96h66.02l80 96H384z"></path></svg>
                    </span>
                    <h6>Free Shuttle</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
                <article className="service">
                    <span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"></path></svg>
                    </span>
                    <h6>Strongest Beer</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </article>
            </div>
        </section>
        
        <section className="featured-rooms">
          <div className="section-title">
            <h4>featured rooms</h4>
            <div></div>
          </div>
          {rooms? <div className="featured-rooms-center">
              {featuredRooms?.map(item => (
                <RoomItem 
                  key={item.id} 
                  room={item}
                  />
              ))}
          </div>:
             <div className="featured-rooms-err">
                <h3>rooms data loading...</h3>
                <img src={loadgif} alt="" />
             </div>
          }
          
        </section>
        
      </>
        
        
    )
}