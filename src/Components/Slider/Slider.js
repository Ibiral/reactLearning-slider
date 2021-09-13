import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideAnimation, setSlideAnimation] = useState({
        index: 1,
        inProgress: false
    })

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
        </div>
    )
}
