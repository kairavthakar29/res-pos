import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import Slider from "@mui/material/Slider"


export default function CategoryPage({getCategoryProducts, getResCategories, deviceType}) {

  console.log(getResCategories);
  //console.log(getCategoryProducts.categories[0].category);

var min = Math.min(...getCategoryProducts && getCategoryProducts.categories[0].products.map(item => item.price));
var max = Math.max(...getCategoryProducts && getCategoryProducts.categories[0].products.map(item => item.price));

console.log("min: " + min);
console.log("max: " + max);

const [value, setValue] = React.useState(min && min);
function handleChanges(event, newValue) {
    setValue(newValue);
}
  return (
   <Fragment>
     <Head>
        
      </Head>
      <div id="content-wrap">
      
        <div className="body-wrapper">
          <div className="page-content bg-white">
          
		  
        {/* Banner */}
            <div className="dz-bnr-inr style-1 text-center bg-parallax" style={{
                backgroundImage:`url(/images/banner/bnr2.jpg')`,
                backgroundSize:`cover`,
                backgroundPosition:`center`}}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{getCategoryProducts && getCategoryProducts.categories[0].category}</h1>
                        {/* Breadcrumb Row */}
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li key={0} className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li key={1} className="breadcrumb-item active" aria-current="page">{getCategoryProducts && getCategoryProducts.categories[0].category}</li>
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
						<aside className="side-bar left">
							<div className="shop-filter">
                            <div className="widget">
									<div className="widget-title">
										<h4 className="title">Price Range</h4>
									</div>
									<div className="range-slider style-1">
                                    <Slider defaultValue = {value} min={min && min} step={1} max={max && max} onChange = {handleChanges} valueLabelDisplay="on" color="primary"/>
									</div>
								</div>
								<div className="widget dz-widget_services">
									<div className="widget-title">
										<h4 className="title">Refine By Categories</h4>
									</div>
                  
                                  {getResCategories ?
                                    getResCategories.categories.map((item, index) => {

                                  return (
                                  
                                  item.products.length > 0 ?
                                  <div className="form-check">
                                    <label className="form-check-label" for="productCheckBox-01">
                                                        <Link href={'/product-category/'+item.category.toLowerCase().replace(/ /g, '-')
                                .replace(/[^\w-]+/g, '')}>{item.category}</Link>
                                    </label>
                                  </div>
                                : <></>
                                    )
                                    })
                                    :
                                    <></>
                                    }
									
								</div>
								
							</div>
						</aside>
					</div>
					<div className="col-lg-9">
						<div className="d-flex justify-content-between align-items-center">
							<h5 className="title mb-md-3 mb-lg-4 m-b20 d-none d-lg-block"></h5>
							<strong className="filter-item-show m-b20">{getCategoryProducts && getCategoryProducts.categories[0].products.length} items</strong>
							<a href="javascript:void(0);" className="btn btn-primary panel-btn">Filter</a>
						</div>
						<ul id="masonry" className="row catProducts">

                            {
                                getCategoryProducts ?
                                getCategoryProducts.categories[0].products.filter( product => { return product.price >= parseFloat(value && value, 0) }).map((item, index) => {

                                return (
                                <li className="card-container col-xl-4 col-md-6 m-b30" key={index}>
                                    <div className="dz-img-box style-7">
                                        <div className="dz-media">
                                            <Image src="/images/gallery/grid4/pic1.jpg" alt="images" width="550" height="330"/>
                                            
                                        </div>
                                        <div className="dz-content">
                                            
                                            <h5 className="title"><Link href={'/'+getCategoryProducts.categories[0].category.toLowerCase().replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')+"/"+item.name.toLowerCase().replace(/ /g, '-')}>{item.name}</Link></h5>
                                            <div className="dz-info category_page_info_pa">
                                            <span className="price">${item.price}</span>
                                            
                                            <Link href="/" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                )
                                })
                                :
                                <></>
                            }
							
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
  
    const page_id = 'category-page'
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}/categories?category_name=${context.query.slug.replaceAll("-", " ")}&restaurant_id=1`);
      const getCategoryProducts = res.data;

    const resCategories = await axios.get(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}/categories?per_page=50&restaurant_id=1&page=1`, { withCredentials: true });
    const getResCategories = resCategories.data;

      if(getCategoryProducts && getResCategories){
        return {
            props: {
                getCategoryProducts,
                getResCategories,
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