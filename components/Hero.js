import React from 'react';

const Hero = (props) => {
    const { eyebrow, heading, subHeadline } = props.content;
    
    return(
        <section className={"b-hero js-equinoxNode t-dark"}>
            <div className={"b-hero__grid"}>
                <figure className={"b-hero__photo b-hero__photo--1"}>
                    <img alt="photo1 - Audience member photo" src="/assets/img/audience-member-photo.jpeg" />
                </figure>
                <figure className={"b-hero__photo b-hero__photo--2"}>
                <img alt="photo2 - Speaker" src="/assets/img/speaker.jpeg" />
                </figure>
                <figure className={"b-hero__photo b-hero__photo--3"}>
                    <img alt="photo1 - Audience member photo" src="/assets/img/dj.jpeg" />
                </figure>
                <figure className={"b-hero__photo b-hero__photo--4"}>
                    <img alt="photo1 - Audience member photo" src="/assets/img/stage.jpeg" />
                </figure>
                <figure className={"b-hero__shape b-hero__shape--1"} id="dots"></figure>
                <figure className={"b-hero__shape b-hero__shape--2"} id="donut"></figure>
                <figure className={"b-hero__shape b-hero__shape--3"} id="bars"></figure>
                <figure className={"b-hero__shape b-hero__shape--4"} id="lines"></figure>

                <div className={"b-hero__content"}>
                    <div className={"b-hero__contentInner"}>
                        <h4 className={"b-hero__eyebrow"}>{eyebrow ? eyebrow : ''}</h4>
                        <h1 className={"b-hero__heading"}>{heading}</h1>
                        <div className={"b-hero__intro"}>
                           <p>{subHeadline}</p>
                        </div>
                        <div className={"b-hero__cta"}>
                            <a className={"c-button c-button--primary"}>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;


