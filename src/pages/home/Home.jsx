import { React, useRef, useState } from 'react'

import Navigation from '../../templates/navigation/Navigation'
import './home.css'

/* SAMPLES */
import sample from '../../assets/images/band/main-band.png'
import sample2 from '../../assets/images/band/band-picture-2.jpg'

/* BAND MEMBERS */
import benni_profile from '../../assets/images/members/benni_profile.jpg'
import daniel_profile from '../../assets/images/members/daniel_profile.jpg'
import enzo_profile from '../../assets/images/members/enzo_profile.jpg'
import ethan_profile from '../../assets/images/members/ethan_profile.jpg'
import marcus_profile from '../../assets/images/members/marcus_profile.jpg'
import nice_profile from '../../assets/images/members/nice_profile.jpg'

/* VIDEOS */
import rain_background from '../../assets/images/main/rain-bg.mp4'

const Home = () => {
    const imageCoasterSequence = [sample, sample2];
    let sequenceNumber = 0;
    let imageBackgroundRef = useRef(null);

    const handleCoasterSequence = (e) => {
        const actualButton = e.target.closest("button");
        if (actualButton) {
            console.log(actualButton.id);
            actualButton.disabled = true

            sequenceNumber += 1;
            if (imageCoasterSequence[sequenceNumber] == null) {
                sequenceNumber = 0;
            }

            imageBackgroundRef.current.src = imageCoasterSequence[sequenceNumber]
            imageBackgroundRef.current.style.opacity = 1;

            imageBackgroundRef.current.classList.add('fade-animation');
            imageBackgroundRef.current.addEventListener('animationend', () => {
                imageBackgroundRef.current.classList.remove('fade-animation');
                actualButton.disabled = false
            }); 
        }
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

  const handleChange = (args) => {
    setFormData({ ...formData, [args.target.name]: args.target.value });
  };

  const handleSubmit = async (args) => {
    args.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("Form submitted:", result);

      if (result.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <>
        <Navigation />
        <section className='album'>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="video-element"
            >
            <source src={rain_background} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <h2 id='latest-album'> LATEST ALBUM </h2>
            <h1 id='album-title'> BLEEDFORIT </h1>
            <h2 id='album-subtitle'> IT'S SOON... </h2>
            <button> PRE-ORDER </button>
        </section>

        <section className='info'>
            <div className='backdrop-filter'>
                <div className='container' id='introduction'>
                    <div className='row'>
                        <div className='column' id='main-info'>
                            <h2>WHO ARE WE?</h2>
                            <p>
                                We are <b>FEVERGLASS</b>, a band from the South, bringing together members from the Muntinlupa, Parañaque, and Cavite area. 
                                Formed in 2026, we are a group of students from San Beda College Alabang who came together through our shared passion 
                                for music and performing. We came together because we believe that every performance should have energy, passion, and 
                                something that keeps people wanting more. That's why, whenever we step on stage, we make sure we give it everything 
                                we've got. 
                                <br /> <br />
                                We will never let a performance go cold. We will never let our audience go cold. We'll turn up the heat, 
                                bring the energy, and leave you on the edge of your seats. You just watch—we'll do the rest. We are <b>FEVERGLASS </b> 
                                and we're here to <b>turn up the heat!</b>
                            </p>
                        </div>
                        <div className='column' id='image-container'>
                            <img src={sample} alt='' />
                            <p> <b>August 3, 2026</b> | Our first gig at Azumi Boutique Hotel, Alabang </p>
                        </div>
                    </div>
                </div>

                <div className='container' id='image-carousel'>
                    <h2> OUR BAND PICTURES! </h2>
                    <div className='row' id='carousel-main'>
                        <button id='left-button' onClick={handleCoasterSequence}>
                            <a><i class="fa-solid fa-angle-left"></i></a>
                        </button>
                        <img src={sample} ref={imageBackgroundRef} />
                        <button id='right-button' onClick={handleCoasterSequence}>
                            <a><i class="fa-solid fa-angle-right"></i></a>
                        </button>
                    </div>
                </div>
                <div className='container' id='ending'></div>
            </div>
        </section>
        
        <section className='members'>

            <h2 className='subtitle'> THE MANAGER </h2>
            <div id='manager'>
                <div className='container' id='left-side'>
                    <h3>JONATHAN A. GOZOS</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>
                <div id='image-container'> </div>
                <div className='container' id='right-side'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <h2 className='subtitle'> OUR MUSICIANS! </h2>

            <div id='musicians'> 
                <div className='profile' id=''>
                    <img src={nice_profile} alt="" />
                    <div className='column'>
                        <h3>DEAN</h3>
                        <a>Vocals</a>
                    </div>
                </div>

                <div className='profile' id=''>
                    <img src={marcus_profile} alt="" />
                    <div className='column'>
                        <h3>MARCUS</h3>
                        <a>Keyboards</a>
                    </div>
                </div>

                <div className='profile' id=''>
                    <img src={enzo_profile} alt="" />
                    <div className='column'>
                        <h3>ENZO</h3>
                        <a>Lead Guitars</a>
                    </div>
                </div>
                
                <div className='profile' id=''>
                    <img src={ethan_profile} alt="" />
                    <div className='column'>
                        <h3>ETHAN</h3>
                        <a>Rhythm Guitars</a>
                    </div>
                </div>

                <div className='profile' id=''>
                    <img src={daniel_profile} alt="" />
                    <div className='column'>
                        <h3>DANIEL</h3>
                        <a>Drums</a>
                    </div>
                </div>

                <div className='profile' id=''>
                    <img src={benni_profile} alt="" />
                    <div className='column'>
                        <h3>BENNI</h3>
                        <a>Bass</a>
                    </div>
                </div>
            </div>
        </section>

        <section className='credentials'>
            <div className='container' id='contacts'>
                <h3> Contact Us! </h3>
                <a> <b>Email: </b> feverglass@gmail.com </a>
                <a> <b>Email: </b> feverglass@gmail.com </a>
                <a> <b>Contact Number: </b> (09XX) XXX-XXXX </a>
                <a> <b>Contact Number: </b> (09XX) XXX-XXXX </a>
            </div>

            <div className='container' id='message'>
                <h3> Message Us Directly! </h3>

                <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder='Enter your preferred name' 
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder='Enter your email' 
                    required
                />

                <textarea 
                    name="message"
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder='Enter your message here' 
                    required
                >
                </textarea>
                <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Home