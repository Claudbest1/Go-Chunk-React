
import './home.css'
import heroImg from './../../images/hero-img.png'

const Home = () => {
  return (
    <header className='home__hero'>
      <div className="hero__info">
      <div className="hero__text">
        <h1>Split your data-files in the fastest and most secure way; at no cost!</h1>
        <h3>Upload, Split, Download or Save your data files for later.<br/>All for FREE</h3>
        </div>
        <img src={heroImg} alt="hero image" className='hero__img'/>
      </div>
      
      <button className='header__btn'>CHUNK FILES</button>
    </header>
  )
}

export default Home