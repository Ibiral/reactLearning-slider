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
        if(slideAnimation.index !== dataSlider.length) {
            setSlideAnimation({index: slideAnimation.index + 1,
            inProgress: true})
        }
        else if(slideAnimation.index === dataSlider.length) {
            setSlideAnimation({index: 1, inProgress: true})
        }
    }

    const prevSlide = () => {
        if(slideAnimation.index !== 1) {
            setSlideAnimation({index: slideAnimation.index - 1,
            inProgress: true})
        }
        else if(slideAnimation.index === 1) {
            setSlideAnimation({index: dataSlider.length, inProgress: true})
        }
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
