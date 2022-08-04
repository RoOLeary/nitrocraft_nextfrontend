const Blocks = () => {
    return(
        <section className="b-blocks">
            <div className="o-grid">
                <div className="b-blocks__block b-blocks__block--1 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <figure className="b-blocks__image">
                                <img alt="Block Title" loading="lazy" src="https://placedog.net/350/260" />
                            </figure>
                        </div>
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">Block Title</h3>
                                <div className="b-blocks__text c-formatted">
                                    <p>May 15–17, 2020</p>
                                </div>
                                <div className="b-blocks__ctas">
                                    <a className="c-button" href="#" target="_blank">Visit website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-blocks__block b-blocks__block--2 o-grid__col l:o-grid__col--span-6">
                    <div className="o-grid">
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <figure className="b-blocks__image">
                                <img alt="" loading="lazy" src="https://placedog.net/350/260" />
                            </figure>
                        </div>
                        <div className="o-grid__col m:o-grid__col--span-6">
                            <div className="b-blocks__content">
                                <h3 className="b-blocks__heading">Cup The Balls 2022</h3>
                                <div className="b-blocks__text c-formatted">
                                    <p>Dec 5–7, 2022</p>
                                </div>
                                <div className="b-blocks__ctas">
                                    <a className="c-button c-button--inverted" href="#" target="_blank">Visit website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blocks;