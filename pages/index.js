import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Text from '../components/Text'
import TextVisual from '../components/TextVisual';
import Tickets from '../components/Tickets';
import Faq from '../components/Faq';
// import Slider from '../components/Slider';
import Related from '../components/Related';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ entry }) {

  
  // const [currentPageNo, setCurrentPageNo] = useState(currentPage);
  // const { data: session } = useSession();

  const HeroText = {
    eyebrow: 'Ask my arse',
    heading: 'Snappy Title Goes Here',
    subHeading: 'Go on ta fuck ye',
  }

  const textVisualContent = {
    title: 'Pack the bags',
    content: 'Casually arise and get Molly ready for her stroll. Here goes...',
    image: '/assets/img/conf.jpg',
    link: 'articles/test-article-3',
    linkText: 'Learn More'
  }

  const handleSignin = (e) => {
    console.log(e);
    e.preventDefault()
    signIn()
  }    
  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
   
    <>
      <Layout>
        <Hero content={HeroText} />
        {/* <Text content={leadPost} /> */}
        {/* <Related related={morePosts} /> */}
        <TextVisual content={textVisualContent} />
        <Tickets />
      </Layout>
    </>
  	)
}


export const getStaticProps = async () => {
  // const slug = context?.params.slug || "all-components";
  // console.log(context);
  // Fetching data from jsonplaceholder.
  const res = await fetch('https://nitroblog.ddev.site:3306/api/homepage.json');
  let entry = await res.json();

  return {
      props: {
          entry: entry
      }
  }
}