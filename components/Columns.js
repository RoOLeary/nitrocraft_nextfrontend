const Columns = () => {
    return(
        <section className="b-rewards c-section">
            <div className="o-wrapper">
                <div className="o-grid o-grid--gap-xxl">
                    <div className="o-grid__col l:o-grid__col--span-12">
                        <h2 className="b-rewards__heading t-center">columnHeading</h2>
                        <br /><br />
                        <div className="js-equinoxNode">
                            <ul className="o-grid o-grid--gap-l t-center">
                                <li className="o-grid__col xs:o-grid__col--span-6 m:o-grid__col--span-6 l:o-grid__col--span-3">
                                    <div className="b-rewards__reward">
                                        <img alt="col title" className="b-rewards__rewardIcon b-rewards__rewardIcon--1 half-width-centered" src="https://cities.tnwcdn.com/assets/img/reward-network.svg" />
                                        <br />
                                        <h3>columnTitle</h3>
                                        <div className="b-rewards__rewardDescription">
                                            <p>columnText</p>
                                        </div>
                                        <br />
                                        <a className="c-button c-button--primary" href="#">link text</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Columns;
        