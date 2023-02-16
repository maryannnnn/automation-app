import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__info">
                        <h1 className="header__info-title">New Automation Tool for Your</h1>
                        <div className="header__info-text">
                            Choosing the right business process automation tools is vitally
                            important to your business. In today’s digitalization race,
                            organizations are always looking for technology tools to help them
                            drive their business operations efficiently. You can pick the best
                            one for your.
                        </div>
                        <button className="header__info-btn">See Our Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;