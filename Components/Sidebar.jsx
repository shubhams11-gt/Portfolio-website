const Sidebar=()=>{
    return(
        <nav className="sidebar">
        <div className="sidebar-arrow">
            <i class='bx bx-left-arrow-alt'></i>
        </div>
            <div className="sb-name">
                <img src="./images/i1.jfif" className="pfp"/>
                <h4>Shubham Sharma</h4>
                <h6>Web developer</h6>
            </div>
            <div class="navigation-btn">
                <ul>
                    <li className="about"><a href="#"><span>0.1</span>Home</a></li>
                    <li className="about"><a href="#"><span>0.2</span>About me</a></li>
                    <li><a href="#work"><span>0.3</span>My creations</a></li>
                    <li><a href="#"><span>0.4</span>Contact me</a></li>
                    {/* <li><a href="#"><span>0.3</span>Non-tech exp.</a></li> */}
                </ul>
            </div>
            <div class="nav-socials">
                <ul>
                    <li><a href="#"><i className='bx bxl-github'/></a></li>
                    <li><a href="#"><i className='bx bxl-linkedin-square'/></a></li>
                    <li><a href="#"><i className='bx bxl-instagram'/></a></li>
                    <li><a href="#"><i className='bx bxl-spotify'/></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;