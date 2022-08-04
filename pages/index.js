import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from '../components/Layout';
import Columns from '../components/Columns';
import Hero from '../components/Hero';
import Text from '../components/Text'
import TextVisual from '../components/TextVisual';
import Tickets from '../components/Tickets';
import Faq from '../components/Faq';
// import Slider from '../components/Slider';
import Related from '../components/Related';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ entry }) {

  const homeHeader = {
      blockType: 'hero', 
      uid: 'a508d88a-c650-4f74-8cb5-74023b95bc7b', 
      eyebrow: 'Eyebrow Now', 
      heading: 'Check between versions. Hello am homepage.', 
      subHeading: "Why isn't this working?"
  }

  // const [currentPageNo, setCurrentPageNo] = useState(currentPage);
  // const { data: session } = useSession();

  const HeroText = {
    eyebrow: 'Hello there!',
    heading: 'Hi there! My name is Ronan, and I build websites.',
    subHeading: 'I make websites',
  }

  const textVisualContent = {
    textVisualHeading: 'Pack the bags',
    textVisualContent: 'Casually arise and get Molly ready for her stroll. Here goes...',
    textVisualImage: '/assets/img/conf.jpg',
    link: 'articles/test-article-3',
    linkText: 'Learn More'
  }
  
  const leadPost = {
    heading: 'Lead Post',
    column1: ':orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra nisi eu eros rhoncus rutrum. Proin sollicitudin gravida faucibus.'
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
        <Text content={leadPost} />
        {/* <Related related={morePosts} /> */}
        <TextVisual content={textVisualContent} />
        <Tickets />
        <Columns />
      </Layout>
    </>
  	)
}


export const getStaticProps = async () => {
  const res = await fetch('https://servd-test-staging.cl-eu-west-3.servd.dev/api/homepage.json',{
      credentials: "include",
      headers: {
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true
      },
  });
  let entry = await res.json();

  return {
      props: {
          entry: entry
      }
  }
}