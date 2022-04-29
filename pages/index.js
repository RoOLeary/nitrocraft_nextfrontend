import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Hero from '../components/Hero';
import Text from '../components/Text'
import TextVisual from '../components/TextVisual';
import Faq from '../components/Faq';
import Related from '../components/Related';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ allPosts, currentPage }) {

  const [currentPageNo, setCurrentPageNo] = useState(currentPage);
  const { data: session } = useSession();

  console.log(session);

  const leadPost = allPosts.slice(0, 1)
  const morePosts = allPosts.slice(1)

//   const fetchMore = () => {
//     alert('fuck that noise anyway. Pricks');
//     setCurrentPageNo(currentPageNo++);
//     console.log(currentPageNo);
//   }

  const HeroText = {
    eyebrow: 'Ask my arse',
    headline: 'Snappy Title Goes Here',
    subHeadline: leadPost[0].subHeadline,
  }

  const textVisualContent = {
    title: 'Smoke Potent Weed',
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
   
    <div className={styles.container}>
		<Hero content={HeroText} />
		<Text content={leadPost} />
		<Related />
		<Faq />
		<TextVisual content={textVisualContent} />
     {!session ? <><p>
          Not signed in </p>
          <button onClick={handleSignin}>Sign in</button></>
          :
          <><p>Hi {session.user.name} - you're signed in as {session.user.email} <br/>
          <img src={`https://avatars.githubusercontent.com/u/6318762?v=4`} />
          <button onClick={signOut}>Sign out</button>
        </p></>}
    </div>
  	)
}


export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query getArticles {
      entries(section: "articles") {
        id
        title
        slug
        status
        ... on articles_default_Entry {
          headline
          subHeadline
          excerpt
          publishDate
          articleFormat
          category {
            id
            title
          }
          tags {
            id
            title
          }
          publishDate
          articleBody
        }
      }
    }
    `,
  });
  return {
    props: {
      allPosts: data.entries,
      currentPage: "1",
    },
 };
}
