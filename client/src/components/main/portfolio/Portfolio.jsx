import './portfolio.scss'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__inner">
                    <portfolio className="portfolio__header">
                        <h2 className="portfolio__header-title">Our Finished Project</h2>
                        <div className="portfolio__header-text">
                            Make sure that your project will finish on time and within
                            budget. We create websites for various topics and purposes:
                            from business card sites and landing pages to online stores
                            and complex corporate portals, but also bring target customers
                            using search engine optimization, contextual advertising and
                            promotion in social networks.
                        </div>
                    </portfolio>
                    <div className="portfolio__module">
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Smart Home</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Car App</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Cyber Security</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Smart Cities</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title"
                                >App Development</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Artificial Intelligence</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Data Science</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Digital Medicine</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Cloud Storage</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                        <div className="portfolio__module-item">
                            <div className="portfolio__module-item--info">
                                <h3 className="portfolio__module-item--info-title">
                                    Business Solution</h3>
                                <p className="portfolio__module-item--info-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;