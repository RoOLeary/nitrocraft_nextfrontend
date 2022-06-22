import Link from 'next/link';

const Related = ( props ) => {
    const related = props.related;
    const currentslug = props.currentslug ? props.currentslug : 'articles';
    // console.log(currentslug);
    const relPosts = related.map((post, index) => { 
        // console.log(post);
        return(
            <div key={index} className={`b-blocks__block b-blocks__block--${++index} o-grid__col l:o-grid__col--span-6`}>
                    <div className="o-grid">
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <figure className="b-blocks__image">
                                <img alt="" loading="lazy" src="/assets/img/_ye_olde_hero-bg.jpg" />
                            </figure>
                        </div>
                    
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">{`${post.title}`}</h3>
                                <div className="b-blocks__text c-formatted">
                                    {post.subHeadline}
                                </div>
                                
                                <div className="b-blocks__ctas">
                                    <Link href={`/${currentslug}/${post.slug}`} scroll={false}><a className="c-button c-button--inverted">Learn More.</a></Link>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            )
    });
    
    return(
        <section className="b-blocks t-dark">
            <div className="o-grid">
                
                {relPosts.slice(0,2)}
                
            </div>
        </section>
    )
}

export default Related;