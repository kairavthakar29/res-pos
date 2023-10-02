import Link from 'next/link' 
import Image from 'next/image'
import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCombineData } from './globaldata'
import parse from 'html-react-parser'



export default function Header(props){ 

const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });

 }, []);

    const { data} = useCombineData(`combine`);
    const router = useRouter();
    const currentRoute = router.query.slug;
    //console.log(currentRoute);
    return(
    <section>
	<header className="site-header mo-left header header-transparent style-1" id={currentRoute ? 'nothome' : 'ishome'}>
		
		<div className={scroll ? "sticky-header main-bar-wraper navbar-expand-lg is-fixed" : "nofix sticky-header main-bar-wraper navbar-expand-lg" }>
			<div className="main-bar clearfix ">
				<div className="container clearfix">
					<div className="logo-header mostion">
					{data ? 
						<Link href="/" className='anim-logo'>
							<Image src={data.src} alt={data.alt} title={data.title} width={data.width} height={data.height}/>
						</Link>
						: 
					<></>
					}
					</div>
					
					{/*Nav Toggle Button*/}
					<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
					
					{/*EXTRA NAV*/}
					<div className="extra-nav">
						<div className="extra-cell">
							<ul>
								<li>
									<button type="button" className="btn btn-white btn-square btn-shadow cart-btn">
										<i className="flaticon-shopping-bag-1"></i>
										<span className="badge">6</span>
									</button>
									<ul className="dropdown-menu cart-list">
										<li className="cart-item">
											<div className="media"> 
												<div className="media-left"> 
													<a href="product-detail.html"> 
														<Image alt="/" className="media-object" src="/images/shop/pic2.jpg" width="200" height="200"/> 
													</a> 
												</div> 
												<div className="media-body"> 
													<h6 className="dz-title"><a href="product-detail.html" className="media-heading">Double Burger</a></h6>
													<span className="dz-price">$28.00</span>
													<span className="item-close">&times;</span>
												</div> 
											</div>
										</li>
										<li className="cart-item">
											<div className="media"> 
												<div className="media-left"> 
													<a href="product-detail.html"> 
														<Image alt="/" className="media-object" src="/images/shop/pic3.jpg" width="200" height="200" /> 
													</a> 
												</div> 
												<div className="media-body"> 
													<h6 className="dz-title"><a href="product-detail.html" className="media-heading">Cheese Burger</a></h6>
													<span className="dz-price">$20.00</span>
													<span className="item-close">&times;</span>
												</div> 
											</div>
										</li>
										<li className="cart-item">
											<div className="media"> 
												<div className="media-left"> 
													<a href="product-detail.html"> 
														<Image alt="/" className="media-object" src="/images/shop/pic4.jpg" width="200" height="200" /> 
													</a> 
												</div> 
												<div className="media-body"> 
													<h6 className="dz-title"><a href="product-detail.html" className="media-heading">Burger</a></h6>
													<span className="dz-price">$15.00</span>
													<span className="item-close">&times;</span>
												</div> 
											</div>
										</li>
										<li className="cart-item text-center d-flex justify-content-between">
											<h6 className="text-primary mb-0">Total:</h6>
											<h6 className="text-primary mb-0">$63</h6>
										</li>
										<li className="text-center d-flex">
											<a href="shop-cart.html" className="btn btn-primary me-2 w-100 d-block btn-hover-1"><span>View Cart</span></a>
											<a href="our-menu-1.html" className="btn btn-outline-primary w-100 d-block btn-hover-1"><span>Menu</span></a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					
					
					
					<div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
						<div className="logo-header">
							{data ? 
								<Link href="/" className='anim-logo'>
									<Image src={data.src} alt={data.title} title={data.title} width={data.width} height={data.height}/>
								</Link>
								: 
							<></>
							}
						</div>
						<div className="primary-menu-container">
							{data && parse(data.menu.replaceAll(`${process.env.NEXT_PUBLIC_URL}`, ""))}
						</div>
						<div className="dz-social-icon">
							<ul>
								<li><a rel="noreferrer" target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
								<li><a rel="noreferrer" target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a></li>
								<li><a rel="noreferrer" target="_blank" className="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
								<li><a rel="noreferrer" target="_blank" className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
							</ul>
						</div>	
					</div>
					
				</div>
			</div>
		</div>
		
	</header>
	</section>
    
  
    )
}
