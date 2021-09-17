import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import SliderBtn from './SliderBtn'

export default function Slider() {

    const [slideAnimation, setSlideAnimation] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        console.log("next");
    }

    const prevSlide = () => {
        console.log("previous");
    }

    return (
        <div className="container-slider">
            {dataSlider.map((pic, index) => {
                return(
                    <div
                    key={pic.id}
                    className={slideAnimation.index === index +1 ?
                    "slide active-anim" : "slide"}
                    >
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index +1 }.jpg`} alt ="" />

                    </div>
                )
            })}
            <SliderBtn moveSlide={nextSlide} direction={'next'}/>
            <SliderBtn moveSlide={prevSlide} direction={'prev'}/>
        </div>
    )
}
