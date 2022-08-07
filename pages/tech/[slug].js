import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import Layout from '../../components/Layout'
import StaticHeader from '../../components/StaticHeader'
import Related from '../../components/Related'
import PageBlocks from '../../components/PageBlocks'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

export default function Post({ entry }) {
    const postEntry = entry[0];
    const router = useRouter()
    return (
        <Layout>
            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }} // Set the transition to linear
                className="body__content"
            >
            <StaticHeader content={postEntry.title.rendered} />
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <div className="o-grid o-grid--gap-xxl">
                        {/* <div className="o-grid__col l:o-grid__col--span-4">
                            <h2 className="b-text__heading">{postEntry.title.rendered}</h2>
                        </div> */}
                        <div className="o-grid__col l:o-grid__col--span-12">
                            <h2 className="b-text__heading">{postEntry.subHeadline}</h2>
                            <br />
                            <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: postEntry.content.rendered }} />        
                        </div>
                    </div>
                </div>
            </section> 
            {/* <PageBlocks content={entry['blocks']} />    */}
            {/* <Related related={entry.manualRelatedArticles} currentslug='tech' /> */}
            </motion.main>
        </Layout>
    )
  }
  

export async function getServerSideProps(context) {
    const { slug } = context.query
    const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?slug=${slug}`);
    let data = await res.json();
    return {
        props: { 
            entry: data
        }
    };
}