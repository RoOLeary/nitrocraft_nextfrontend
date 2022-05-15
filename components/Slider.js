
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';

let initialState = {
    activeSlide: 1,
    isAutoPlay: true,
    defaultActive: 1,
}

export default function Slider() {
    console.log('in the slider');
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
                   
                   <div className={`flex__container flex--gray ${activeSlide == 1 ? `flex--active` : 'animate--start' }`} data-slide="1">
                        <div className="flex__item flex__item--left">
                        <div className="flex__content">
                            <p className="text--sub">One</p>
                            <h1 className="text--big font-serif">Trigger</h1>
                            {/* <p className="text--normal"></p>  */}
                        </div>
                        <p className="text__background font-serif">Trigger Media</p>
                        </div>
                        <div className="flex__item flex__item--right"></div>
                        <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/2E8A9134-scaled.jpg" />
                    </div>

                    <div className={`flex__container flex--darkblue  ${activeSlide == 2 ? `flex--active` : 'animate--start' }`} data-slide="2">
                        <div className="flex__item flex__item--left">
                        <div className="flex__content">
                            <p className="text--sub">Two</p>
                            <h1 className="text--big font-serif">Gallery</h1>
                            <Link href={`/videos`}>
                                <a>View Gallery</a>
                            </Link>
                            {/* <p className="text--normal">.</p>  */}
                        </div>
                        <p className="text__background font-serif">Gallery</p>
                        </div>
                        <div className="flex__item flex__item--right"></div>
                        <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0694.jpeg" />
                    </div>

                    <div className={`flex__container flex--blue  ${activeSlide == 3 ? `flex--active` : 'animate--start' }`} data-slide="3">
                        <div className="flex__item flex__item--left">
                        <div className="flex__content">
                            <p className="text--sub">Three</p>
                            <h1 className="text--big font-serif">About</h1>
                            <p className="text--normal">Isabel Vaz was born in Lisbon, Portugal, and started playing the cello by the age of seven. Isabel lived and studied in Lisbon until 2007, the year she moved to The Netherlands. She completed her bachelor and masters degrees at the Conservatory of Amsterdam with Dmitry Ferschtman. During her studies she did two exchange semesters, one in Prague (HAMU) and the other one in New York (Manhattan School of Music).</p> 
                            <Link href={`/about`}>
                                <a>Read More</a>
                            </Link>
                        </div>
                        <h1 className="text__background font-serif">About</h1>
                        </div>
                        <div className="flex__item flex__item--right"></div>
                        <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0481-682x1024.jpeg" />
                    </div>

                    <div className={`flex__container flex--red  ${activeSlide == 4 ? `flex--active` : 'animate--start' }`} data-slide="4">
                        <div className="flex__item flex__item--left">
                        <div className="flex__content">
                            <p className="text--sub">Four</p>
                            <h1 className="text--big font-serif">Videos</h1>
                            <p className="text--normal">Watch a selection of my recorded performances.</p>  
                            <Link href={`/videos`}>
                                <a>View Videos</a>
                            </Link>
                        </div>
                        <p className="text__background font-serif">Videos</p>
                        </div>
                        <div className="flex__item flex__item--right"></div>
                        <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/isabel.png" />
                    </div>
                    
                    <div className={`flex__container flex--yellow ${activeSlide == 5 ? `flex--active` : 'animate--start' }`} data-slide="5">
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
                    </div>

                    <div className="slider__navi">
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 1 ? `active` : '' }`} data-slide="1">blue</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 2 ? `active` : '' }`} data-slide="2">yellow</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 3 ? `active` : '' }`} data-slide="3">red</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 4 ? `active` : '' }`} data-slide="4">darkblue</a>
                        <a href="#" onClick={(e) => transitionSlide(e)} className={`slide-nav ${activeSlide == 5 ? `active` : '' }`} data-slide="5">gray</a>
                    </div>
                    
                </div>

                
            </>
        ); 
}; 