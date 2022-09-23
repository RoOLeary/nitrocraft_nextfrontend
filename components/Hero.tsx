import React from 'react';
import Link from 'next/link';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import { useTypingText } from '../hooks/useTypingTest';
import imageLoader from './../imageLoader';
import Image from 'next/image';

const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };


interface IHero {   
    eyebrow?: string
    heading: string
    subHeading: string
}
  

const Hero = ({ eyebrow, heading, subHeading }: IHero ): JSX.Element => {

    
    const { word } = useTypingText([`${eyebrow}`, 'Web Developer', 'Nerd', 'LFC Fan'], 250, 20);
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const y3 = useTransform(scrollY, [0, 300], [0, -50]);
    const y4 = useTransform(scrollY, [0, 750], [0, -250]);
    const y5 = useTransform(scrollY, [0, 400], [0, -250]);
    const x1 = useTransform(scrollY, [500, 0], [-250, 0]);
    const x2 = useTransform(scrollY, [750, 0], [150, 0]);

    return (
        <section className={"b-hero js-equinoxNode t-dark"}>
            <div className={"b-hero__grid"}>

            <motion.figure
                    className="b-hero__photo b-hero__photo--1"
                    style={{ y: y2, x: 50 }}
                >
                    <Image alt="photo1 - Audience member photo" loader={imageLoader} src={"https://source.unsplash.com/1600x900/?tech"} layout="fill" unoptimized />
                </motion.figure>
                <motion.figure
                    className="b-hero__photo b-hero__photo--2"
                    style={{ y: y3, x: x1 }}
                >
                
                <Image alt="photo2 - Speaker" loader={imageLoader} src={"https://source.unsplash.com/1600x900/?code"} layout="fill" unoptimized />
                </motion.figure>
               
               
                <motion.figure className="b-hero__photo b-hero__photo--3" style={{ y: y4, x: x2 }}>
                    <Image alt="photo1 - Audience member photo" loader={imageLoader} src={"https://placedog.net/550/550"} layout="fill" unoptimized />
                </motion.figure>
                <motion.figure className={"b-hero__photo b-hero__photo--4"} style={{ y: y5, x: 0 }}>
                    <img alt="photo1 - Audience member photo" src="https://placedog.net/850/550" />
                </motion.figure>
                <figure className={"b-hero__shape b-hero__shape--1"} id="dots"></figure>
                <figure className={"b-hero__shape b-hero__shape--2"} id="donut"></figure>
                <figure className={"b-hero__shape b-hero__shape--3"} id="bars"></figure>
                <figure className={"b-hero__shape b-hero__shape--4"} id="lines"></figure>

                <div className={"b-hero__content"}>
                    <div className={"b-hero__contentInner"}>
                    
                        <h4 className={"b-hero__eyebrow"}>{word ? word : eyebrow}</h4>
                        <h1 className={"b-hero__heading"}>{heading}</h1>
                        <div className={"b-hero__intro"}>
                           <p>{subHeading}</p>
                        </div>
                        <div className={"b-hero__cta"}>
                            <Link href={"/all-components"}><a className={"c-button c-button--primary"}>All Components</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;