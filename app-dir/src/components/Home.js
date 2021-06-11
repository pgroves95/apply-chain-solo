import React from 'react'
import '../styles/Home.css'
import logo from '../logo.png' 

function Home() {
    return (
        <div className="HomeContainer">
            <div className="logo-container">
            <img className="logo-lg" src={logo} alt="logo" />
            </div>
            <p className="home-description">Coloring book edison bulb vinyl raclette. 
            Palo santo plaid letterpress austin typewriter meh lo-fi try-hard ethical bushwick. 
            Kale chips hella freegan marfa succulents hashtag kogi umami echo park authentic pok pok
            quinoa pork belly jean shorts brooklyn. Try-hard cold-pressed glossier
            health goth VHS cornhole heirloom DIY lomo shabby chic vaporware.</p>
            <p className="home-description">Letterpress cardigan forage stumptown mumblecore man
            bun four dollar toast. Wayfarers selvage small batch leggings
            roof party hella. Mlkshk trust fund wayfarers prism put a bird
            on it flannel lumbersexual asymmetrical organic next level whatever
            letterpress biodiesel. Authentic XOXO whatever cray, retro pinterest
            green juice snackwave hella kombucha. Raw denim artisan pork belly bicycle
            rights green juice cray messenger bag semiotics.</p>
        </div>
    )
}

export default Home
