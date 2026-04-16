import './index.css'

const Header = () =>{
    return(
        <nav className="nav-header">
            <div className="image-content">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" 
                alt="website logo" className="website-logo"/>
            </div>
            <div className="side-nav-content">
               <button type="button" className="profile-btn">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                  className="profile-image" alt="profile"/>
               </button>
               <button className="logout-btn" type="button">Logout</button>
            </div>
        </nav>
    )
}

export default Header