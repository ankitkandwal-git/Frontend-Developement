
import Header from '../Header'
import './index.css'


const Home = () => {
    return (
        <>
            <Header />
            <div className="home-main-container">
                <aside className="sidebar">
                    <ul>
                        <li>Home</li>
                        <li>Trending</li>
                        <li>Subscriptions</li>
                        <li>Library</li>
                    </ul>
                </aside>
                <main className="main-content">
                    <div className="banner-container">
                        <h1 className="banner-heading">Buy next Watch Premium plans at special prices</h1>
                        <button className="get-it-now-btn">GET IT NOW</button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home