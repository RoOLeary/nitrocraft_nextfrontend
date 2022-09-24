import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Signup from '../../components/Signup';
import PostSingle from '../../components/PostSingle';
import imageLoader from '../../imageLoader'

import { useElementWhenOnScreen } from '../../hooks/useElementWhenOnScreen'

const Grid = styled.div`
  margin-top: 2em;
  display: grid; 
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr; 
  }
  grid-template-columns: 3fr 1fr;
  grid-gap: 2em; 
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 4rem;
`;

const LatestHeader = styled.h1`
  margin-top: 1em; 
`

export default function Posts(props:any) {
  const allData = {
    data: props.data,
    page: 1
  }
  const [postsData, setPostsData ] = useState(allData);
  const [title, setPageTitle ] = useState('Latest Posts');
  const [hiddenObserver, setHiddenObserver ] = useState(false);

  const [containerRef, isVisible]:any = useElementWhenOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })

  const showMorePosts = () => {
    const currentPage = postsData.page + 1
    fetch(`https://api2.tnw-staging.com/v2/articles?page=${currentPage}&limit=10`)
    .then((res) => {
      res.json()
      .then((data) => {
        if(data.length > 0){
          const newData = postsData.data.concat(data)
          const arr = {
            data: newData,
            page: currentPage
          }
          setPostsData({...arr})   
        } else {
          setHiddenObserver(true)
        }
      })
    })
  }

  const posts = postsData.data ? postsData.data : [];
  return (
    <Layout>
      <Head>
        <title>Next JS Prototype {title && `- ${title}`}</title>
      </Head>
      
        <section className="b-text  c-section" id="learn-more">
        <>
          <div className="o-wrapper">
            {!posts ? <h1 className={'b-text__heading'}>Loading...</h1> :
              <div>
              <LatestHeader className={'b-text__heading'}>{title}</LatestHeader>

              <Grid className={'b-articleGrid'}>
                <div>
                {Object.entries(posts).map((post:any, idx:any) => (
                  <PostSingle {...post} key={idx} />
                ))}
                </div>
                <Sidebar>
                  <Image alt={'sidebar advert'} loader={imageLoader} src="https://source.unsplash.com/350x1600/?ai,tech" width="350" height="1600" layout="fixed"/>
                </Sidebar>
              </Grid>
              </div> }
          </div>
          <br />
          <div ref={containerRef} style={{ display: hiddenObserver && 'none' }} />
          {isVisible ? showMorePosts() : ''}
          {!isVisible && <div className='o-wrapper'>...Loading</div>}
          <div className='o-wrapper' style={{ display: hiddenObserver ? 'block' : 'none' }}>No more posts</div>
          </>
        </section>
      <Signup signupHeading={'Sign Up'} signupText={'We said.....SIGN. UP!'} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api2.tnw-staging.com/v2/articles?page=1&limit=10`)
  const props = await res.json()
  return {
    props: {
      data: props
    }
  }
}