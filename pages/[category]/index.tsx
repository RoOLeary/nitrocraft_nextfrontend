import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import StaticHeader from '../../components/StaticHeader';
import TextVisual from '../../components/TextVisual';
import Related from '../../components/Related';
import Link from 'next/link';
import styled from 'styled-components';
import { GetServerSideProps } from 'next'

const ArticleGrid = styled.ul`
  margin-top: 2em;
`;

export default function Category({ catPosts }) {
    const router = useRouter()
    const categoryPath = router.query.category    
    const textVisualContent = {
        title: 'Go to Work',
        content: 'Something something something blort. Here goes...',
        image: '/assets/img/conf.jpg',
        link: '#',
        linkText: 'Learn More'
    }
     
    return(
        <Layout>
            <StaticHeader content={`Category: ${categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1) } - Generic`} />
            <Related related={catPosts} currentslug={categoryPath} />
            <TextVisual 
                textVisualHeading={textVisualContent.title}
                textVisualContent={textVisualContent.content}
                textVisualImage={textVisualContent.image}
                link={textVisualContent.link}
                linkText={textVisualContent.linkText}
            />
            <section className={'c-section category'}>
            <div className="o-wrapper">
                <ArticleGrid>
                    {catPosts.map(({ title, slug, subHeadline }) => {
                        return(
                            <li key={title}>
                                <Link href={`/${categoryPath}/${slug}`}>
                                    <a>{title}</a>
                                </Link>
                                <p>{subHeadline}</p>
                            </li>
                        )
                    })}
                </ArticleGrid>
            
                <Link href={`/`}><a>Home</a></Link>
            </div> 
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.query.category ? context.query.category : 'tech'
    const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/category/tech.json`);
    let data = await res.json();
    
    return {
        props: { 
            catPosts: data.data,
        }
    };
}
