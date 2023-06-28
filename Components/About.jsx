export default function About(){
    return(
        <div id="about" className="about-me">
            <div class="about--heading flex">
                <img src="images/About Us.png" alt="" class="big"/>
                <p class="small">About Me</p>
            </div>
            
            <div className="about-content">
                <div className="about-l">
                    <h2><span>0.1</span> About me</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga<br/> 
                            modi, nihil, quis possimus, dolorem eligendi sunt hic doloremque volu<br/>
                            ptatibus eos. Temporibus repellendus voluptates ipsam minus. Obcaecati<br/>
                             earum delectus adipisci.
                        </p>
                       <div className="skills-section">
                           <span>Here are a few technologies I've been working with recently:</span> <br/>
                           <div className="skills-row flex-row">
                              <ul className="skills-column">
                                  <li><span><i class='bx bx-right-arrow'/></span> HTML 5</li>
                                  <li><span><i class='bx bx-right-arrow'/></span>CSS</li>
                                  <li><span><i class='bx bx-right-arrow'/></span>JavaScript</li>
                                  <li><span><i class='bx bx-right-arrow'/></span>React</li>
                              </ul>
                              <ul className="skills-column">
                                  <li><span><i class='bx bx-right-arrow'/></span>Express</li>
                                  <li><span><i class='bx bx-right-arrow'/></span>Mongo DB</li>
                                  <li><span><i class='bx bx-right-arrow'/></span>Node.js</li>
                                  <li><span><i class='bx bx-right-arrow'/></span>WordPress</li>
                              </ul>
                           </div>                           
                       </div>
                       <p>Outside of work, I'm interested in following the developments of science.<br/>
                        I also play a lot of video games. And make TikToks.</p>
                </div>
                <div className="about-r">
                    <img src="./images/pfp-2.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}