import '../App.css'
import Searchbar from '../components/searchbar';
import SbLogo from '../assets/sb-logo.png';

function HomePage() {
  return (
    <div>
        <section className='responsive-container'>
            <div className='left'></div>
            <div className='middle'>
                <div className="email-header">
                    <img src={SbLogo} alt="Sportsbet" width="300" data-bit="iit"/>
                </div>
                <div className="major-heading">
                  Sportsbet notification engine
                </div>
                <Searchbar/>
            </div>
            <div className='right'></div>
        </section> 
    </div>
  ); 
}

export default HomePage;