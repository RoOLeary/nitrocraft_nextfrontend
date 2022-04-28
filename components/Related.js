import Link from 'next/link';

const Related = () => {
    return(
        <section className="b-blocks t-dark">
            <div className="o-grid">
                <div className="b-blocks__block b-blocks__block--1 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                       
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <figure className="b-blocks__image">
                                <img alt="" loading="lazy" src="/assets/img/_ye_olde_hero-bg.jpg" />
                            </figure>
                        </div>
                    
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">Praesent vitae mattis</h3>
                                <div className="b-blocks__text c-formatted">
                                    Praesent vitae mattis est. Donec rhoncus risus eu arcu aliquet, eu sollicitudin augue tincidunt.
                                </div>
                                
                                <div className="b-blocks__ctas">
                                    <Link href={'/articles/test-article-2'}><a className="c-button c-button--inverted">Learn More.</a></Link>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-blocks__block b-blocks__block--2 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                       
                            <div className="o-grid__col m:o-grid__col--span-6">
                                <figure className="b-blocks__image">
                                    <img alt="" loading="lazy" src="/assets/img/_ye_olde_hero-bg.jpg" />
                                </figure>
                            </div>
                        
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">Praesent vitae mattis</h3>
                                <div className="b-blocks__text c-formatted">
                                Praesent vitae mattis est. Donec rhoncus risus eu arcu aliquet, eu sollicitudin augue tincidunt.
                                </div>
                                
                                <div className="b-blocks__ctas">
                                    <Link href={'/articles/test-article-3'}><a className="c-button c-button--inverted">Learn More.</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Related;