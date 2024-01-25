import React from 'react'
import "./LandingPage.css";
import { Link, Element } from 'react-scroll';
import { Carousel, Input, Typography } from 'antd';
import Logo from "./assets/logo/Image_Logo.png";

import { PlayCircleFilled } from '@ant-design/icons';
import { SettingFilled } from '@ant-design/icons';
import { MobileFilled } from '@ant-design/icons';
import { PlusCircleOutlined } from '@ant-design/icons';
import { ToolFilled } from '@ant-design/icons';
import { InstagramFilled } from '@ant-design/icons';
import { FacebookFilled } from '@ant-design/icons';
import HomeSectionImg from "./assets/logo/Home_section.png";
import AboutUsSectionImg from "./assets/logo/aboutus-section.png";
import Vector from "./assets/logo/Vector.png";
import Highlight1 from "./assets/logo/hl-1.png";
import Highlight2 from "./assets/logo/hl-2.png";
import QuoteMark from "./assets/logo/format_quote.png";
import Contact from "./assets/logo/contact.png";

export default function LandingPage() {
    return (
   
        <div>
            <Header />
            <HomeSection />
            <FunctionSection />
            <AboutUsSection />
            <ConfigurationSection />
            <PriceSection />

            <ContactSection />
            <Footer></Footer>

        </div>
    )
}

const Header = () => {


    return (
        <div className="header">

            <Link to="home" className='logo'>
                <img src={Logo} alt="Logo" />
            </Link>
            <Link to="home" spy={true} smooth={true} duration={500} offset={-50} className="header-option">
                Home
            </Link>
            <Link to="price" spy={true} smooth={true} duration={500} offset={-50} className="header-option">
                Price
            </Link>
            <Link to="function" spy={true} smooth={true} duration={500} offset={-50} className="header-option">
                Function
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="header-option">
                Contact
            </Link>
            <Link to="aboutUs" spy={true} smooth={true} duration={500} offset={-50} className="header-option">
                About Us
            </Link>
            <a href="/login"  className="login" >
                Login
            </a>

        </div>
    );
}

const HomeSection = () => {
    return (
        <Element name="home" className="section" id='home'>

            <div className='home-content'>
                <p className='home-content-title'>Advanced Class
                    Management System for future generations</p>
                <p className='home-content-body'>The best class manage system for your eLearning platform. </p>
                <div className='home-bnt'>
                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                        Start Now - Try it free
                    </Link>
                    <Link to="/" spy={true} smooth={true} duration={500} offset={-50} className="btn-how-work">
                        <PlayCircleFilled style={{ fontSize: '30px', color: "#5D9C59", marginRight: "10px" }} />How it work?
                    </Link>
                </div>
            </div>
            <div className='home-img'>
                <img src={HomeSectionImg} alt="HomeSectionImg" />
            </div>
        </Element>
    );
}

const PriceSection = () => {
    return (
        <Element name="price" id='price' className="section">
            <div className='price-container'>
                <p className='price-plan'>Pricing Plan</p>
                <p>Become a member</p>
                <p>Buy packages now to experience the great utilities of ClassY </p>
                <div className='price-cards'>
                    <div className='price-card'>
                        <p className='price'><strong style={{ fontSize: "30px" }}>FREE</strong>/month</p>
                        <p className='sub-title'>You will be able to use all the features of the ClassY system </p>
                        <div className='functions'>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />All the features</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Free</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Only 1 class</p>
                        </div>
                        <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                            Start Now
                        </Link>
                    </div>

                    <div className='price-card' style={{ backgroundColor: "rgba(93, 156, 89, 0.90)", color: "white" }}>
                        <p className='price'><strong style={{ fontSize: "30px" }}>599k</strong>/month</p>
                        <p className='sub-title'>You will be able to use all the features of the ClassY system</p>
                        <div className='functions'>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />All the features</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Unlimited storage capacity</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Only 1 class</p>
                        </div>
                        <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try" style={{ backgroundColor: "#DDF7E3", color: "black" }}>
                            Start Now
                        </Link>
                    </div>

                    <div className='price-card'>
                        <p className='price'><strong style={{ fontSize: "30px" }}>1.999k</strong>/month</p>
                        <p className='sub-title'>You will be able to use all the features of the ClassY system </p>
                        <div className='functions'>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />All the features</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Reasonable price than monthly</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Unlimited storage capacity</p>
                            <p className='function'><PlusCircleOutlined style={{ marginRight: "10px" }} />Only 1 class</p>
                        </div>
                        <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                            Start Now
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    );
}

const FunctionSection = () => {
    return (
        <Element name="function" id='function' className="section">
            <div class="classy-container">
                <p className='outstanding'>OUTSTANDING FEATURE</p>
                <p className='values'>3 distinct values ​​of ClassY </p>
                <div className='function-cards'>
                    <div class="function-card">
                        <SettingFilled style={{ padding: "10px", borderRadius: 50, backgroundColor: "#DDF7E3", fontSize: "30px" }}></SettingFilled>
                        <p class="function-card-title">Multi Functional</p>
                        <p class="function-card-content"> Convenient for teachers to monitor students' learning progress and homework so they can help and improve</p>
                    </div>
                    <div class="function-card">
                        <ToolFilled style={{ padding: "10px", borderRadius: 50, backgroundColor: "#DDF7E3", fontSize: "30px" }}></ToolFilled>
                        <p class="function-card-title">Operational management</p>
                        <p class="function-card-content"> Teachers can monitor and control class activity information such as teaching schedules, homework, tuition,...</p>
                    </div>
                    <div class="function-card">
                        <MobileFilled style={{ padding: "10px", borderRadius: 50, backgroundColor: "#DDF7E3", fontSize: "30px" }}></MobileFilled>
                        <p class="function-card-title">Update information</p>
                        <p class="function-card-content"> More convenient with just a few steps on the smartphone, right after the teacher updates. Students can absolutely collect information about the class.</p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

// const ContactSection = () => {
//     return (
//         <Element name="contact" id='contact' className="section">
//             <div className='contact-container'>
//                 <p>LISTEN TO</p>
//                 <p>What Teachers & Students Say About ClassY</p>

//             <Carousel autoplay>
//                 <div>
//                 <img src={AboutUsSectionImg} alt="AboutUsSectionImg" />
//                 <img src={QuoteMark} alt="AboutUsSectionImg" />
//                    <p className='contact'>ClassY is our platform for communicating with families about what is happening inside the classroom and school. It has cut the latency of providing families with these updated and it  is  also very intuitive, so parents look forward to seeing it.</p>
//                 </div>
//                 <div>
//                     <h3 style={contentStyle}>2</h3>
//                 </div>
//                 <div>
//                     <h3 style={contentStyle}>3</h3>
//                 </div>
//                 <div>
//                     <h3 style={contentStyle}>4</h3>
//                 </div>
//             </Carousel>
//             </div>
//         </Element>
//     );
// }

const ContactSection = () => {
    return (
        <Element name="contact" id='contact' className="section">
            <div className='contact-container'>
                <div className='contact-left'>
                    <p className='contact-title'>Improve your classroom
                        management efficiency</p>
                    <div>
                        <Typography.Title level={5} style={{ color: "white", marginTop: "2rem" }}>Email:</Typography.Title>
                        <Input
                            placeholder='Your email'
                        />
                    </div>
                    <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                        Register Now
                    </Link>
                </div>

                <div className='contact-right'>
                    <img src={Contact} alt="Contact" ></img>
                </div>
            </div>
        </Element>
    );
}


const AboutUsSection = () => {
    return (
        <Element name="aboutUs" id='aboutUs' className="section">
            <div class="aboutUs-container">
                <div className='aboutUs-left'>
                    <img src={AboutUsSectionImg} alt="AboutUsSectionImg" />
                </div>
                <div className='aboutUs-right'>
                    <p className='aboutUs-right-introduce'>INTRODUCE ABOUT</p>
                    <p className='aboutUs-right-classy-app'>ClassY Application</p>
                    <div className='aboutUs-right-content'>
                        <p className='content'> <strong>ClassY</strong> is an advanced platform for classroom management that bridges the gap between students and teachers, ensuring that information about grades, learning, and new information flows seamlessly between both sides.
                        </p>
                        <p className='content'><strong>Teachers</strong> can use the application to manage multiple classes, take attendance, grade, evaluate students, send notifications to student, storage learning material,...
                        </p>
                        <p className='content'><strong>Students</strong> can use the application to access learning materials, tracking grades, update new statistics and send reviews to teachers,...
                        </p>
                        <p className='content'>The application aims to build an optimal environment for comprehensive human development for students and students.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

const ConfigurationSection = () => {
    return (
        <Element name="configuration" id='configuration' className="section">
            <div className='config-container'>
                <div className='config-title'>
                    <p >ALL <span style={{ color: "#5D9C59" }}> PROFESSIONAL CLASS MANAGEMENT CONFIGURATIONS </span>
                        ARE AVAILABLE IN OUR SYSTEM</p>
                </div>

                <div className='hightlight-1'>

                    <div className='hl-1-container'>
                        <div className='hl-1-left'>
                            <p className='hl-1'>Highlight 1</p>
                            <p className='hl-1-title'>SUPPORT CREATING CLASS SCHEDULES
                                ACCURATELY & QUICKLY</p>
                            <p className='hl-1-content'>No more worries about class schedules clashing during the timetable arrangement process</p>
                            <p className='hl-1-content'>The application allows you to create COURSES - CLASSES - SUBJECTS EASILY</p>
                            <p className='hl-1-content'>This system integrates full of management and tracking configurations for academics - teachers - students</p>
                            <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                                Start Now - Try it free
                            </Link>
                        </div>

                        <div className='hl-1-right'>
                            <img src={Highlight1} alt="Highlight1" />
                        </div>

                    </div>
                </div>

                <div className='hightlight-2'>

                    <div className='hl-2-container'>

                        <div className='hl-2-left'>
                            <p className='hl-2'>Highlight 2</p>
                            <img src={Highlight2} alt="Highlight2" />
                        </div>
                        <div className='hl-2-right'>

                            <p className='hl-2-title'>MANAGEMENT THE DETAILED OF <strong style={{ color: "#5D9C59" }}>STUDENT’S GRADE</strong> </p>
                            <p className='hl-2-content'>The software has the ability to <strong style={{ color: "#5D9C59" }} >store unlimited student grade </strong> information, easily upgrade the memory server when needed, and <strong style={{ color: "#5D9C59" }} >quickly retrieve search and statistics </strong></p>
                            <p className='hl-2-content'>Manage student learning results, <strong style={{ color: "#5D9C59" }} >automatically calculate grade - remind - warn students</strong></p>
                            <p className='hl-2-content'>When teacher configure, students will be sent requests to complete the homework to advance to a higher result</p>
                            <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                                Start Now - Try it free
                            </Link>
                        </div>



                    </div>
                </div>

                <div className='hightlight-1'>

                    <div className='hl-1-container'>
                        <div className='hl-1-left'>
                            <p className='hl-1'>Highlight 3</p>
                            <p className='hl-1-title'>MULTI-FUNCTIONAL MANAGEMENT CONFIGURATION - EASY TO USE</p>
                            <p className='hl-1-content'>The interface is designed specifically for each individual, and high UX standards bring the most comfortable feeling when using.</p>
                            <p className='hl-1-content'>Management configuration is divided into clear management categories and has the ability to block inappropriate users.</p>
                            <p className='hl-1-content'>Diverse management configurations: courses, students, learning materials, grade,...</p>
                            <Link to="contact" spy={true} smooth={true} duration={500} offset={-50} className="btn-try">
                                Start Now - Try it free
                            </Link>
                        </div>

                        <div className='hl-1-right'>
                            <img src={Highlight1} alt="Highlight1" />
                        </div>

                    </div>
                </div>
            </div>
        </Element>
    );
}

const Footer = () => {
    return (
        <Element name="footer" id='footer' className="section">
            <div className='footer-container'>
                <div className='footer-left'>
                    <p className='footer-title'>ABOUT CLASSY</p>
                    <ul>
                        <li><p>Introduce</p></li>
                        <li><p>Product</p></li>
                        <li><p>About Us</p></li>
                        <li><p>News</p></li>
                        <li><p>Contact</p></li>
                    </ul>
                </div>

                <div className='footer-mid'>
                    <p className='footer-title'> USER SUPPORT</p>
                    <ul>
                        <li><p>Support department</p></li>
                        <li><p>Terms of use</p></li>
                        <li><p>Privacy policy</p></li>
                    </ul>
                </div>

                <div className='footer-right' >
                    <p className='footer-title'>CONTACT US</p>
                    <ul style={{display:"flex", listStyleType:"none", fontSize:"40px"}}>
                        <li style={{marginRight:"10px",textDecoration:"none", color: "#5D9C59"}}>
                            <a  style={{textDecoration:"none", color: "#5D9C59"}} href='https://www.instagram.com/classyvietnam/'>
                                <InstagramFilled />
                            </a>
                        </li>
                        <li>
                            <a  style={{textDecoration:"none", color: "#5D9C59"}}  href='www.facebook.com/classyedu'>
                                <FacebookFilled />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </Element>
    );
}


