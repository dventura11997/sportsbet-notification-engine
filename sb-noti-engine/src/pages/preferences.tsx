import '../App.css'
import PrefsForm from '../components/prefs_form.tsx'
import SbLogo from '../assets/sb-logo.png';

function Prefs() {
  return (
    <div>
        <section className='responsive-container'>
            <div className='left'></div>
            <div className='middle'>
                <div className="email-header">
                    <img src={SbLogo} alt="Sportsbet" width="300" data-bit="iit"/>
                </div>
                <div className="secondary-heading">Let's sort out your preferences</div>
                <div><PrefsForm/></div>
            </div>
            <div className='right'></div>
        </section> 
    </div>
  ); 
}

export default Prefs;