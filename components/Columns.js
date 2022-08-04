const Columns = () => {
    return(
        <section class="b-rewards c-section">
            <div class="o-wrapper">
                <div class="o-grid o-grid--gap-xxl">
                    <div class="o-grid__col l:o-grid__col--span-12">
                        <h2 class="b-rewards__heading t-center">columnHeading</h2>
                        <br /><br />
                        <div class="js-equinoxNode">
                            <ul class="o-grid o-grid--gap-l t-center">
                                <li class="o-grid__col xs:o-grid__col--span-6 m:o-grid__col--span-6 l:o-grid__col--span-3">
                                    <div class="b-rewards__reward">
                                        <img alt="col title" class="b-rewards__rewardIcon b-rewards__rewardIcon--1 half-width-centered" src="https://cities.tnwcdn.com/assets/img/reward-network.svg" />
                                        <br />
                                        <h3>columnTitle</h3>
                                        <div class="b-rewards__rewardDescription">
                                            <p>columnText</p>
                                        </div>
                                        <br />
                                        <a class="c-button c-button--primary" href="#">link text</a>
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
        