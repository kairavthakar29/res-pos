import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import { useCombineData } from '../components/globaldata'


export default function DynamicPage({posts, deviceType}) {

  //console.log(posts);


  return (
   <Fragment>
     
      <div id="content-wrap">
      
        <div className="body-wrapper">
          <div className="page-content bg-white">
          
		  
        {/* Banner */}
            <div className="dz-bnr-inr style-1 text-center bg-parallax" style="background-image:url('/images/banner/bnr2.jpg'); background-size:cover; background-position:center;">
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Shop Style 2</h1>
                        {/* Breadcrumb Row */}
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Shop</li>
                            </ul>
                        </nav>
                        {/* Breadcrumb Row End */}
                    </div>
                </div>
            </div>
        {/* Banner End */}
		
		{/* Search Section */}
		<section className="content-inner-1">
			<div className="container">
				<div className="row search-wraper text-center">
					<div className="col-lg-8 m-auto">
						<form>
							<div className="input-group">
								<input required="required" type="text" className="form-control" placeholder="Type here" />
								<div className="input-group-addon">
									<button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-2">
										<span>Search</span><i className="icon-search"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<aside className="side-bar left sticky-top">
							<div className="shop-filter">
								<div className="widget widget_tag_cloud ">
									<div className="d-flex justify-content-between">
										<div className="widget-title">
											<h4 className="title">Current Search</h4>
										</div>
										<a href="javascript:void(0);" className="panel-close-btn"><i className="fa-solid fa-xmark"></i></a>
									</div>
									<div className="tagcloud"> 
										<a href="product-detail.html">Burger</a>
										<a href="product-detail.html">Restaurant</a>
										<a href="product-detail.html">Pizza</a>
									</div>
								</div>
								<div className="widget dz-widget_services">
									<div className="widget-title">
										<h4 className="title">Refine By Categories</h4>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-01" />
										<label className="form-check-label" for="productCheckBox-01">
											Pizza
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-02" />
										<label className="form-check-label" for="productCheckBox-02">
											Hamburger
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-03" />
										<label className="form-check-label" for="productCheckBox-03">
											Cold Drink
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-04" />
										<label className="form-check-label" for="productCheckBox-04">
											Sandwich
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-05" />
										<label className="form-check-label" for="productCheckBox-05">
											Muffin
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-06" />
										<label className="form-check-label" for="productCheckBox-06">
											Burrito
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-07" />
										<label className="form-check-label" for="productCheckBox-07">
											Taco
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="productCheckBox-08" />
										<label className="form-check-label" for="productCheckBox-08">
											Hot Dog
										</label>
									</div>
								</div>
								<div className="widget">
									<div className="widget-title">
										<h4 className="title">Price Range</h4>
									</div>
									<div className="range-slider style-1">
										<div id="slider-tooltips"></div>
									</div>
								</div>
							</div>
						</aside>
					</div>
					<div className="col-lg-9">
						<div className="d-flex justify-content-between align-items-center">
							<h5 className="title mb-md-3 mb-lg-4 m-b20 d-none d-lg-block">Search Results</h5>
							<strong className="filter-item-show m-b20">Search: 51,740 items</strong>
							<a href="javascript:void(0);" className="btn btn-primary panel-btn">Filter</a>
						</div>
						<ul id="masonry" className="row">
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic1.jpg" alt="images" with="550" height="330"/>
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 4.5</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Burger</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$4.56</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic2.jpg" alt="images" with="550" height="330"/>
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 4.0</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Chicken Burger</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$17.56</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic3.jpg" alt="images" with="550" height="330"/>
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 3.5</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Pineapple Pizza</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$24.50</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic4.jpg" alt="images" with="550" height="330"/>
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 5.0</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Pineapple Soup</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$11.02</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic5.jpg" alt="images" with="550" height="330"/>
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 4.2</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Momos</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$4.56</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic6.jpg" alt="images"with="550" height="330" />
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 4.0</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Pancake</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$12.20</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic3.jpg" alt="images" with="550" height="330"/>
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 4.1</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Pineapple Pizza</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$10.50</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic1.jpg" alt="images"with="550" height="330" />
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 4.0</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Spicy Burger</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$4.56</span>
									</div>
								</div>
							</li>
							<li className="card-container col-xl-4 col-md-6 m-b30">
								<div className="dz-img-box style-7">
									<div className="dz-media">
										<Image src="/images/gallery/grid4/pic2.jpg" alt="images" with="550" height="330" />
										<div className="dz-meta">
											<ul>
												<li className="seller">Top Seller</li>
												<li className="rating"><i className="fa-solid fa-star"></i> 3.8</li>
											</ul>
										</div>
									</div>
									<div className="dz-content">
										<h5 className="title"><a href="product-detail.html">Cheese Burger</a></h5>
										<p>It is a long established fact that a reader will be distracted.</p>
										<span className="price">$17.56</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		{/* Search Section */}

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=43200, stale-while-revalidate=60'
    )

  const page_id = 'home-page'
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/pages/?slug=home&_fields=acf,yoast_head,title,id,slug&acf_format=standard&?version=${Math.random()}`);
    const posts = res.data;
    if(posts.length){
      return {
          props: {
            posts ,
            deviceType: isMobile ? 'mobile' : 'desktop',
            page_id 
          }
      }
    }
    else{
      return { 
        notFound: true 
      }
    }

  } catch (error) {
    return { 
      notFound: true 
    }
  }

}