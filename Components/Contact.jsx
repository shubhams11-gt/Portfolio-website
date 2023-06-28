const Contact=()=>{
    return(
        <>
          <div className="heading">
            <h1> <span>0.4</span> Get in touch</h1>
          </div>
          <div className="contact-container">
            <div className="contact-l">
                <div>
                    <h1>
                        Available for select <br/>
                        freelance opportunities
                    </h1>
                    <h3>
                        <span>Have</span> an exciting project <br/>
                        you need <span>help</span> with? <br/>
                        Send <span>me</span> an email <br/>
                        or contact me via <span>instant</span> message!
                    </h3>
                </div>
                <div className="email">
                    <h3><a href="#"><span>Shubham</span>@gmail.com</a></h3>
                </div>
            </div>
            <div className="contact-r">
                <div className="social-media-boxes">
                    <a href="#"><i className='bx bxl-github'/></a>
                </div>
                <div className="social-media-boxes">
                    <a href="#"><i className='bx bxl-linkedin-square'/></a>
                </div>
                <div className="social-media-boxes">
                   <a href="#"><i className='bx bxl-instagram'/></a>
                </div>
                <div className="social-media-boxes">
                    <a href="#"><i className='bx bxl-spotify'/></a>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Contact;