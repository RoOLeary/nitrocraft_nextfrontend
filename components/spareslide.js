
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';

let initialState = {
    activeSlide: 1,
    isAutoPlay: true,
    defaultActive: 1,
}

export default function Slider({ content }) {
    
    



    const elementRef = useRef();
    const divElement = elementRef.current;

    const [activeSlide, setActiveSlide] = useState(initialState.activeSlide);
    const [isAutoPlay, setAutoPlay] = useState(initialState.isAutoPlay);

    const transitionSlide = (e) => {
        e.preventDefault(); 
        let wrapper,
            current, 
            currentSlide, 
            clickToSlide, 
            fadeSl, 
            assignActive,
            oldActive;

            wrapper = divElement;
            
            // console.log(wrapper);
            currentSlide = document.querySelector('.flex--active');
            current = document.querySelector('.flex--active') ? document.querySelector('.flex--active').getAttribute('data-slide') : initialState.defaultActive;  
            clickToSlide = e.currentTarget.getAttribute('data-slide');

            assignActive = clickToSlide ? clickToSlide : current;
           
            fadeSl = document.querySelector('.flex__container[data-slide="' + assignActive + '"]');
            oldActive = document.querySelector('.flex__container[data-slide="' + current + '"]');
            if(!fadeSl.classList.contains('flex--preStart')){
                fadeSl.classList.add('flex--preStart')
            }
           

        if (current === assignActive) {
            return false
        } else {
            oldActive.classList.add('flex--active', 'animate--end');
            fadeSl.classList.remove('flex--active', 'animate--end');
            fadeSl.classList.add('animate--start');
            setTimeout(() => {
                setActiveSlide(assignActive);
            }, 900)
        }   
    }

    useEffect(() => {
        const divElement = elementRef.current;
        const current = document.querySelector('.flex--active') ? document.querySelector('.flex--active').getAttribute('data-slide') : initialState.defaultActive;    
        const autoFadeSl = divElement.querySelector('.flex__container[data-slide="' + activeSlide + '"]'); 
        const oldActive = divElement.querySelector('.flex__container[data-slide="' + current + '"]');
        let nextSlide = activeSlide;
            
        if(isAutoPlay){
            
            const interval = setInterval(() => {
                autoFadeSl.classList.add('flex--preStart');
                oldActive.classList.add('flex--active', 'animate--end');
                autoFadeSl.classList.remove('flex--active', 'animate--end');
                autoFadeSl.classList.add('animate--start');
            
                if (activeSlide == 5) {
                        setActiveSlide(initialState.defaultActive)                
                    } else {
                        let nxtSld = ++nextSlide;
                        setTimeout(() => {
                            setActiveSlide(nxtSld);
                        }, 900)
                    }       
                }, 7000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [activeSlide, isAutoPlay, transitionSlide]);



    return(
        <>
            
            <div className="slider__wrapper" ref={elementRef}>
                   
                 

                    {content.sliderMatrix.map((sl, i) => {
                        const current = ++i;
                        return(
                            <div key={++i} className={`flex__container flex--gray ${activeSlide == current ? `flex--active` : 'animate--start' }`} data-slide={current}>
                                <div className="flex__item flex__item--left">
                                <div className="flex__content">
                                    <p className="text--sub">{sl.textSub}</p>
                                    <h1 className="text--big font-serif">Trigger</h1>
                                    {/* <p className="text--normal"></p>  */}
                                </div>
                                <p className="text__background font-serif">{sl.textBackground}</p>
                                </div>
                                <div className="flex__item flex__item--right"></div>
                                <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/2E8A9134-scaled.jpg" />
                            </div>
                        )
                    })}
                    
                    {/* <div className={`flex__container flex--yellow ${activeSlide == 5 ? `flex--active` : 'animate--start' }`} data-slide="5">
                        <div className="flex__item flex__item--left">
                        <div className="flex__content">
                            <p className="text--sub">Five</p>
                            <h1 className="text--big font-serif">Lessons</h1>
                            <p className="text--normal">Quisque ac leo eget ante fermentum tempus. Phasellus malesuada, mi eu sagittis euismod, est leo scelerisque magna, a euismod sapien nisl vitae sapien.</p>  
                            <br />
                            <Link href={`/lessons`}>
                                <a>Lesson Enquiries</a>
                            </Link>
                        </div>
                        <p className="text__background font-serif">Lessons</p>
                        </div>
                        <div className="flex__item flex__item--right"></div>
                        <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0874-scaled.jpeg" />
                    </div> */}

                    <div className="slider__navi">
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 1 ? `active` : '' }`} data-slide="1">blue</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 2 ? `active` : '' }`} data-slide="2">yellow</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 3 ? `active` : '' }`} data-slide="3">red</a> 
                        {/*<a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 4 ? `active` : '' }`} data-slide="4">darkblue</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 5 ? `active` : '' }`} data-slide="5">gray</a> */}
                    </div>
                    
                </div>

                
            </>
        ); 
}; 