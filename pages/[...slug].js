import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

export default function ProductPage({getProducts, sendCategorySlug, deviceType}) {

console.log(getProducts);

const arr = sendCategorySlug.split("-");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");


let newArray = getProducts.restaurant_products.filter(function (el) {
    return el.products.categories.category === str2
}
);
const filterProduct = newArray;

  //console.log(getCategoryProducts.categories[0].category);
  return (
   <Fragment>
     <Head>
        
      </Head>
      <div id="content-wrap">
      
        <div className="body-wrapper">
          <div className="page-content bg-white">
          
            {/* Banner */}
            <div className="dz-bnr-inr style-1 text-center bg-parallax" style={{backgroundImage:`url('/images/banner/bnr1.jpg')`, backgroundSize:`cover`, backgroundPosition:`center`}}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{filterProduct && filterProduct[0].products.name}</h1>
                        {/* Breadcrumb Row */}
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li key={0} className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li key={0} className="breadcrumb-item"><Link href={"/product-category/"+sendCategorySlug}>{sendCategorySlug.charAt(0).toUpperCase() + sendCategorySlug.slice(1).replaceAll("-", " ")}</Link></li>
                                <li key={1} className="breadcrumb-item active" aria-current="page">{filterProduct && filterProduct[0].products.name}</li>
                            </ul>
                        </nav>
                        {/* Breadcrumb Row End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}
            
            {/* Product Detail Section */}
            <section className="content-inner-1 overflow-hidden">
                <div className="container">
                    <div className="row product-detail">
                        <div className="col-lg-4 col-md-5">
                            <div className="detail-media m-b30">
                                {filterProduct && filterProduct[0].images.length > 1 ? 
                                    filterProduct[0].images.map((item, index) => {
                                        <Image src="/images/modal/pic1.jpg" alt="/" width="550" height="800"/>
                                    })
                                : 
                                    filterProduct[0].images.length <= 1 ? 
                                    <Image src={filterProduct[0].images[0].upload_path} alt="/" width="550" height="800"/>

                                    :

                                    <Image src="/images/modal/pic1.jpg" alt="/" width="550" height="800"/>
                                }
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="detail-info">
                                <div className="dz-head">
                                    <h2 className="title">{filterProduct && filterProduct[0].products.name}</h2>
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i> <span><strong className="text-dark">4.5</strong> - 20 Reviews</span>
                                    </div>
                                </div>
                                <p className="text">{filterProduct && filterProduct[0].products.description}</p>
                                <ul className="detail-list">
                                    <li>Price <span className="text-primary m-t5">${filterProduct && filterProduct[0].products.price}</span></li>
                                    <li>Quantity
                                        <div className="btn-quantity style-1 m-t5">
                                            <input id="demo_vertical2" type="text" value="1" name="demo_vertical2" />
                                        </div>
                                    </li>
                                </ul>
                               
                                <div className="d-lg-flex justify-content-between">
                                    <ul className="modal-btn-group">
                                        <li><a href="shop-cart.html" className="btn btn-primary btn-hover-1"><span>Add To Cart <i className="flaticon-shopping-bag-1 m-l10"></i></span></a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="content-inner pt-0">			
                <div className="container">			
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs tabs-style-1">
                                <li className="nav-item" key="1">
                                    <button className="nav-link" data-bs-toggle="tab" href="#developement-1">
                                        <i className="icon-settings"></i>
                                        <span className="d-none d-md-inline-block m-l10">Product Review</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="developement-1" className="tab-pane active">
                                    <div className="comments-area" id="comments">
                                        <ul className="comment-list">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> 
                                                        <Image  className="avatar photo" src="/images/testimonial/mini/pic1.jpg" alt="/" width="100" height="100"/> 
                                                        <cite className="fn">Monsur Rahman Lito</cite>
                                                    </div>
                                                    <div className="star-rating" data-rating="2">
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="far fa-star text-secondary"></i> 
                                                        <i className="far fa-star text-secondary"></i> 
                                                        <i className="far fa-star text-secondary"></i> 
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                                {/* list END */}
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> 
                                                        <Image  className="avatar photo" src="/images/testimonial/mini/pic2.jpg" alt="/" width="100" height="100"/> 
                                                        <cite className="fn">Jake Johnson</cite>
                                                    </div>
                                                    <div className="star-rating" data-rating="3">
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="far fa-star text-secondary"></i> 
                                                        <i className="far fa-star text-secondary"></i> 
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-author vcard"> 
                                                        <Image  className="avatar photo" src="/images/testimonial/mini/pic3.jpg" alt="/" width="100" height="100"/> 
                                                        <cite className="fn">John Doe</cite> 
                                                    </div>
                                                    <div className="star-rating" data-rating="4">
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="fas fa-star text-secondary"></i> 
                                                        <i className="far fa-star text-secondary"></i> 
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comment-respond style-1" id="respond">
                                        <h3 className="comment-reply-title mb-4" id="reply-title">Add a review</h3>
                                        <form className="comment-form" id="commentform" method="post">
                                            <p className="comment-form-author">
                                                <label for="author">Name <span className="required">*</span></label>
                                                <input type="text" name="dzName"  placeholder="Author" id="author" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label for="email">Email <span className="required">*</span></label>
                                                <input type="text" placeholder="Email" name="dzEmail" id="email" />
                                            </p>
                                            <div className="comment-form-rating d-flex p-lr10">
                                                <label className="pull-left m-r10 m-b20">Your Rating</label>
                                                <div className="rating-widget">
                                                    {/* Rating Stars Box */}
                                                    <div  className="rating-stars">
                                                        <ul id="stars">
                                                            <li className="star" title="Poor" data-value="1">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="Fair" data-value="2">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="Good" data-value="3">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="Excellent" data-value="4">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                            <li className="star" title="WOW!!!" data-value="5">
                                                                <i className="fas fa-star fa-fw"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="comment-form-comment">
                                                <label for="comment">Comment</label>
                                                <textarea rows="10" name="comment" placeholder="Type Review Here" id="comment"></textarea>
                                            </p>
                                            <p className="form-submit">
                                                <button type="submit" className="btn btn-primary btn-hover-2" id="submit">Submit Now</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
            
            {/* Product Detail Section */}

          
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
  
    const page_id = 'product-page'
    try {
     const getCategorySlug = `${context.query.slug[1]}`;
     const sendCategorySlug = `${context.query.slug[0]}`;
      const res = await axios.get(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}/restaurant-products?restaurant_id=1&product_name=${getCategorySlug.replaceAll("-", " ")}`);
      const getProducts = res.data;
      if(getProducts){
        return {
            props: {
              getProducts,
              deviceType: isMobile ? 'mobile' : 'desktop',
              page_id,
              sendCategorySlug
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