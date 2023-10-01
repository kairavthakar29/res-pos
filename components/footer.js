import Link from 'next/link' 
import Image from 'next/image'
import { useFooterData } from './globaldata'
import parse from 'html-react-parser'

export default function Footer() {
    //const { data }  = useFooterData(`/wp-json/options/all`);
    //console.log(data);
    return (
        <section>
        <footer className="site-footer style-1 bg-dark" id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="dz-form-card bg-primary">
                                <div className="section-head">
                                    <h4 className="title m-0">Contact us</h4>
                                    <p className="m-t10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <form className="dzForm dezPlaceAni" method="POST" action="script/contact_smtp.php">
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
								<div className="dzFormMsg"></div>
								<div className="row">
									<div className="col-lg-12 col-md-12">
										<div className="input-group input-line">
											<input name="dzName" required type="text" className="form-control" placeholder="Your Name" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="input-group input-line">
											<input name="dzEmail" required type="text" className="form-control" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="input-group input-line">
											<input name="dzOther[Subject]" required type="text" className="form-control" placeholder="Subject" />
										</div>
									</div>
									<div className="col-sm-12 ">
										<div className="input-group input-line">
											<textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-sm-12">
										<button type="submit" name="submit" value="submit" className="btn btn-md btn-white btn-hover-1"><span>Send Message</span></button>	
									</div>
								</div>
							</form>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="widget widget_getintuch">
                                <h5 className="footer-title">Contact</h5>
                                <ul>
                                    <li>
                                        <i className="flaticon-placeholder"></i>
                                        <p>1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-telephone"></i>
                                        <p>+91 987-654-3210<br/>
                                            +91 123-456-7890</p>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <p>info@example.com<br/>
                                        info@example.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Our Links</h5>
                                <ul>
                                    <li><a href="index.html"><span>Home</span></a></li>
                                    <li><a href="about-us.html"><span>About Us</span></a></li>
                                    <li><a href="services.html"><span>Services</span></a></li>
                                    <li><a href="team.html"><span>Team</span></a></li>
                                    <li><a href="blog-standard.html"><span>Blog</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Help Center</h5>
                                <ul>
                                    <li><a href="faq.html"><span>FAQ</span></a></li>
                                    <li><a href="shop-style-1.html"><span>Shop</span></a></li>
                                    <li><a href="shop-style-2.html"><span>Category Filter</span></a></li>
                                    <li><a href="testimonial.html"><span>Testimonials</span></a></li>
                                    <li><a href="contact-us.html"><span>Contact Us</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 text-md-start">
                            <p>Copyright 2023 All rights reserved.</p>
                        </div>
                        <div className="col-xl-6 col-md-6 text-md-end">
                            <span className="copyright-text">Powered by <a href="#" target="_blank">Achyut Labs</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <Image className="bg1 dz-move" src="/images/background/pic5.png" alt="/" width="205" height="195"/>
            <Image className="bg2 dz-move" src="/images/background/pic6.png" alt="/" width="191" height="203"/>
        </footer>
        
        
        <div className="scroltop-progress scroltop-primary">
            <svg width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
        </div>
        </section>
     
    )
}