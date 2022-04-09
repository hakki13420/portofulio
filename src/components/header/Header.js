import './header.css'
import ME from '../../assets/me.png'

const Header = () => {
    return (
        <header id='/'>
          <h3>HAKKI Rabah</h3>
          <h5>Web Developer</h5>
          <div className="avatar">
            <img src={ME} alt="me" />
            <div className="back">
              <p>Web developer</p>
            </div>
          </div>
        </header>
    )
}

export default Header
