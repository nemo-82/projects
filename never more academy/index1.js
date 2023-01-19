import React from 'react';
import  './Index11.css'
export default class Index1 extends React.Component{
    render(){
        return(
            <>
            <div className="front">
        <header>
            <input type='checkbox' id='toggle' style={{display:"none"}}/>
              <label className='toggle-btn toggle-btn__cross' >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </label>
              <nav>
                <ul>
                  <li><a href="#"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/tt.png" alt="" style={{height: "50px" ,width:"50px"}}/></a></li>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">OUR MISSION</a></li>
                  <li><a href="#">MEET THE PRINCIPLE</a></li>
                  <li><a href="#">NOTABLE ALUMNI</a></li>
                  <li><a href="#">UPCOMING ACTIVITIES</a></li>
                </ul>
              </nav>
            </header>
            <div className="share">
                Share ➡
            </div>
            <img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/tt.png" alt="" id="logo"/>
    </div>
    <div className="mission">
        <div className="mission-title">Our Mission</div>
        <div className="mission-content">Founded in 1791, Nevermore Academy is an academic institution that nurtures outcasts, freaks and monsters. Our mission is to help each student master their extraordinary abilities through world-className academics and unique extracurriculars.</div>
        <video src="welcome.mp4" controls id="welcome"></video>
      </div>
      <div className="principle">
        <div className="principle-pic"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/principal.jpg" id="principle-pic" alt="principle pic" /></div>
        <div className="principle-content">
          <p>Meet Our principle</p>
          {/* <p className='p1' style={{"width": "50px"}}>“Nevermore is a safe haven for our students to learn and grow no matter who they are.</p> <br/> <br/> <br/> */}
          <p className='p2'>For over 200 years we have welcomed Outcasts of all kinds -- werewolves, vampires, sirens and gorgons. As Principal it is my honor to announce that Nevermore is now accepting applications from everybody. I extend my personal invitation to each and everyone of you to apply to our very unique school.”</p> <br/> <br/>
        <p className="quote">— Principal Larissa Weems</p>
        </div>
      </div>
      <div className="students">
        <div className="alumni">
          <h1>Notable Alumni</h1>
          <div className="alumnis">
            <div className="alumni1"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/alumni/morticia.jpg" alt="" style={{width: "100%",height:"60%"}}/><div className="alumni-content">
              <h4>Morticia Addams</h4>
              <p>“Nevermore holds a special place in my black heart. It’s where I met and fell in love with my husband, Gomez. I am so proud that my daughter, Wednesday, is following in our shadows and joining the Outcast className of 2027.”</p>
            </div></div>
            <div className="alumni1"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/alumni/cousin.jpg" alt="" style={{width: "100%",height:"60%"}}/><div className="alumni-content">
              <h4>Ignatius Itt</h4>
              <p>“Members of my family have been attending Nevermore for generations. It’s the source of so many unforgettable memories -- late-night seances, dancing at the Dark Prom, fencing to the death -- what fun!”</p>
            </div></div>
            <div className="alumni1"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/alumni/edgar.jpg" alt="" style={{width: "100%",height:"60%"}}/><div className="alumni-content">
              <h4>Edgar Allen Poe</h4>
              <p>The master of macabre is Nevermore’s most famous alumni. His time at Nevermore fostered his madness and inspired his most morbid literary works.
              </p>
            </div></div>
          </div>
        </div>
        <div className="notable-students">
            <div className="alumni">
              <h1>Meet The Students</h1>
              <div className="alumnis">
                <div className="alumni1"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/students/bianca.jpg" alt="" style={{width: "100%",height:"60%"}}/><div className="alumni-content">
                  <h4>Bianca Barclay</h4>
                  <p>“As a siren, className valedictorian and reigning champion of the Poe Cup, I have truly become the most enchanting version of myself at Nevermore.”</p>
                </div></div>
                <div className="alumni1"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/students/wednesday.jpg" alt="" style={{width: "100%",height:"60%"}}/><div className="alumni-content">
                  <h4>Wednesday Addams</h4>
                  <p>“The students at Nevermore have been smothering me with hospitality. I hope to return the favor - in their sleep.”</p>
                </div></div>
                <div className="alumni1"><img src="https://dx35vtwkllhj9.cloudfront.net/netflix/wednesday-addams-nevermore-academy/images/students/yoko.jpg" alt="" style={{width: "100%",height:"60%"}}/><div className="alumni-content">
                  <h4>Yoko Tanaka</h4>
                  <p>“Nevermore has encouraged me to sharpen my mind and my fangs. My warm memories of Nevermore will last a lifetime — which for me, will likely be around 3 centuries long.”
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </div>
            </>
        )
    }
}