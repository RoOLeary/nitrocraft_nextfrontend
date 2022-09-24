import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'
import { IPost } from '../../interfaces/IPost'
import { GetServerSideProps } from 'next';
import styled from "styled-components";
import imageLoader from './../../imageLoader';
import Tags from '../../components/Tags';
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const Section = styled.section`
  background: ${props => props.primary ? "white" : "teal"}
`;

const SingleContainer = styled.div`
  max-width: 1024px;
  padding: 2em 0;
  @media screen and (max-width: 1024px){
   padding: 2em;
  }
`;

const SingleArticleGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr 3fr; 
  padding: 2em 0; 
  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr; 
    padding: 2em 0;
    
  }
`;


const PostDate = styled.div`
  display: flex;
  justify-content: center;
`;

const FaveBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://api2.tnw-staging.com/v2/articles/${params.slug}`,
        {        
          mode: "no-cors",
          credentials: "include",
          headers: {
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : "true"
        }
      }
  )
  const post = await response.json()
  return {
    props: post[0]
  }
}



export default function Post( post: IPost ) {
  const router = useRouter();
  const { data: session } = useSession();
  const [ faved, setIsFaved] = useState(false);
  // console.log(session);

  const faveIconSrc = faved ? 'icons8-star-48-faved.png' : 'icons8-star-48.png'


  // TEMP!!!

  const toggleFave = () => {
    setIsFaved(!faved);
  }

  // ALSO TEMP!!! Should be recreated as a helper to enable content injection as per in-article adverts
  // functionality. 

  const filterBody = (el) => {
    return el;
  } 

  let cnt = post['content'][0].content;
  const date = new Date(post['properties'].published)
  return (
    <Layout>
      <Head><title>{post ? post['title'] : 'Generic Post Title'}</title></Head>
      
      <Section primary className={'b-section'}>
        <div style={{ marginTop: '80px !important' }}>
        <Image
          alt={post['title']}
          className={'articleFtImg'}
          loader={imageLoader}
          src={post['media'][0].media.attributes.url && post['media'][0].media.attributes.url}
          layout="responsive"
          width={1200}
          height={400}
        />
          <SingleContainer className={'o-wrapper singleContainer'}>
            <br /><br />
            <Tags tags={post['tags']}/>
            <h1
              className={'b-text__heading articleSingle'}
              dangerouslySetInnerHTML={{__html: post['title']}}
            />
            <br />
            <PostDate>
              {date.toDateString()}<br /><br />
              <br />
            </PostDate>
            <SingleArticleGrid>
              <div>
                <Link href={{ pathname: `/authors/${post['authors'][0].slug}`, query: { name: post['authors'][0].name }}}><a>{post['authors'][0].name}</a></Link>
                <br />
                <div>
                  {date.toUTCString()}<br /><br />
                  <br />
                  {/* Uncomment to test locally without signin. Also just some aesthetic crap for demo purposes.s */}
                  {/* <FaveBlock><a onClick={toggleFave} style={{ marginRight: '5px' }}>Add to Favourites</a> <Image loader={imageLoader} width="30px" height="30px" src={`/assets/img/${faveIconSrc}`} /></FaveBlock> */}
                  {session && <FaveBlock><a onClick={toggleFave} style={{ marginRight: '5px' }}>Add to Favourites</a> <Image loader={imageLoader} width="44px" height="44px" src={`/assets/img/${faveIconSrc}`} /></FaveBlock>}
                </div>
              </div>
                <div>
                {cnt &&   
                    <>
                      <div className={'articleContent'} dangerouslySetInnerHTML={{__html: filterBody(cnt) }} />
                      <br />
                      <Link href={'/'}><button className={'c-button'}>Back to Post Index</button></Link>
                    </>
                }

                </div>
            </SingleArticleGrid>
          </SingleContainer>
        </div>
      </Section>
    </Layout>
  )
}
