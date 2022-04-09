import './header.css'
import ME from '../../assets/me.png'

const Header = () => {
    return (
        <header id='/'>
          <h3>HAKKI Rabah</h3>
          <h5>Web Developer</h5>
          <img src={ME} alt="me" />
        </header>
    )
}

export default Header
