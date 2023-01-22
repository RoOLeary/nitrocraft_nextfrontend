// import { useState } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../styles/Home.module.css'
// import { gql } from "@apollo/client";
// import client from "../apollo-client";
import { GetStaticProps } from 'next'
import Layout from '../components/Layout';
import Blocks from '../components/Blocks';
import Columns from '../components/Columns';
import Hero from '../components/Hero';
import Text from '../components/Text'
import TextVisual from '../components/TextVisual';
import Tickets from '../components/Tickets';
import Faq from '../components/Faq/Faq';
// import Slider from '../components/Slider';
// import Related from '../components/Related';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ entry }) {

  const homeHeader = {
      eyebrow: 'Eyebrow Now', 
      heading: 'Check between versions. Hello am homepage.', 
      subHeading: "Why isn't this working?"
  }

  // const [currentPageNo, setCurrentPageNo] = useState(currentPage);
  // const { data: session } = useSession();

  const HeroText = {
    eyebrow: 'Hello there!',
    heading: 'My name is Ronan, and I build websites.',
    // subHeading: entry['data'][0]['homeIntro'].replace(/(<([^>]+)>)/gi, ""),
    subHeading: 'This is a work in progress....NextJS rules!'
  }

  const textVisualContent = {
    textVisualHeading: 'Pack the bags',
    textVisualContent: 'Casually arise and get Molly ready for her stroll. Here goes...',
    textVisualImage: '/assets/img/conf.jpg',
    link: '/articles/test-article-three',
    linkText: 'Learn More'
  }
  
  const leadPost = {
    heading: 'Lead Post',
    column1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra nisi eu eros rhoncus rutrum. Proin sollicitudin gravida faucibus.'
  }

  const confBlockContent:any = {

    blockType: 'blocks',
    uid: 123456789,
    image1: 'https://placedog.net/500/300', 
    heading1: 'Conf Heading 1', 
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ctas1: [{
      link: '#',
      label: 'Learn More',
      isBlank: false
    }],
    image2: 'https://placedog.net/501/301', 
    heading2: 'Conf Heading 2', 
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ctas2: [{
      link: '#',
      label: 'Testing',
      isBlank: false
    }]
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

  console.log(entry.data[0].homeTitle);

  return (
   
    <>
      <Layout>
        <Hero eyebrow={HeroText.eyebrow} heading={entry.data[0].homeTitle} subHeading={HeroText.subHeading} />
        <Text heading={leadPost.heading} column1={leadPost.column1} />
        {/* <Related related={morePosts} /> */}
        <TextVisual 
          textVisualHeading={textVisualContent.textVisualHeading}
          textVisualContent={textVisualContent.textVisualContent}
          textVisualImage={textVisualContent.textVisualImage}
          link={textVisualContent.link}
          linkText={textVisualContent.linkText}
        />
        {/* <Tickets />
        <Columns /> */}
        <Blocks 
          // uid={confBlockContent['uid']} 
          text1={confBlockContent['text1']}
          text2={confBlockContent['text2']}
          heading1={confBlockContent['heading1']}
          heading2={confBlockContent['heading2']}
          ctas1={confBlockContent['ctas1']}
          ctas2={confBlockContent['ctas2']}
          image1={confBlockContent['image1']}
          image2={confBlockContent['image2']}
        />
      </Layout>
    </>
  	)
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://craft-ezhk.frb.io/api/homepage.json',{
      credentials: "include",
      headers: {
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : "true"
      },
  });
  let entry = await res.json();

  return {
      props: {
          entry: entry
      },
    revalidate: 30
  }
}