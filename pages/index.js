import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCombineData, useProductData } from '../components/globaldata'
import Products from './get_products'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/grid'


export default function DynamicPage({posts, deviceType}) {

const { data } = useCombineData(`testimonials/?_fields=acf,title,id,slug,yoast_head_json.og_image,content&acf_format=standard`);
const { dataProducts } = useProductData(`products?per_page=4&page=1`);
console.log("dataProducts " + dataProducts);
  //console.log(posts);


  return (
   <Fragment>
      <Head>
        {posts[0].yoast_head && parse(posts[0].yoast_head) }
      </Head>
      <div id="content-wrap">
      
        <div className="body-wrapper">
          <div className="page-content bg-white">
          {/* Banner */}
          <div className="main-bnr-one">
            <div className="main-slider-1 swiper">
             
                <Swiper
                    modules={[Navigation, Scrollbar, EffectFade]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                { posts.length ? 
              
                posts[0].acf.slider.slider_information.map((item, index) => {

                 return (
              <SwiperSlide key={index}>
                  <div className="banner-inner">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-7">
                          <div className="banner-content">
                            <span className="sub-title wow fadeInUp" data-wow-delay="0.2s"> {item.small_text} </span>
                            <h1 className="title  wow fadeInUp" data-wow-delay="0.4s">{parse(item.title)}</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.6s">{item.short_description}</p>
                            <div className="banner-btn d-flex align-items-center wow fadeInUp" data-wow-delay="0.8s">
                              <Link href="/" className="btn btn-primary btn-md shadow-primary m-r30 btn-hover-1">{item.button.title}</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                          <div className="banner-media wow fadeInRight" data-wow-delay="1s">
                            <Image src={item.image.url} alt={item.image.title} title={item.image.title} width={item.image.width} height={item.image.height}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image src="/images/main-slider/slider1/img3.png" className="img1" alt="/" width="560" height="930"/>
                    <Image src="/images/main-slider/slider1/img1.png" className="img2" alt="/" width="910" height="650"/>
                    <Image src="/images/main-slider/slider1/img2.png" className="img3" alt="/" width="177" height="182"/>
                  </div>
                </SwiperSlide>
                )
              })
              
              : <></> } </Swiper>

             
            </div>
          </div>  
          {/* Banner */}

          {/* Image Box-3 */}
          <section className="content-inner-1 section-wrapper-3 overflow-hidden">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="title wow flipInX" data-wow-delay="0.2s">Quick Menu</h2>
              </div>
              <Products /> 
              <div className="row inner-section-wrapper">
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="dz-img-box style-3 box-hover">
                    <div className="dz-media">
                      <Image src="/images/gallery/grid2/pic2.jpg" alt="/" width="400" height="520"/>
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title"><a href="our-menu-1.html">Pasta</a></h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0"><a href="our-menu-1.html">Pasta</a></h5>
                        <span className="dz-price">$35.00</span>
                      </div>
                      <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="dz-img-box style-3 box-hover">
                    <div className="dz-media">
                      <Image src="/images/gallery/grid2/pic5.jpg" alt="/" width="400" height="520"/>
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title"><a href="our-menu-1.html">Oreo Shake</a></h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0"><a href="our-menu-1.html">Shake</a></h5>
                        <span className="dz-price">$55.00</span>
                      </div>
                      <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="dz-img-box style-3 box-hover">
                    <div className="dz-media">
                      <Image src="/images/gallery/grid2/pic4.jpg" alt="/" width="400" height="520"/>
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title"><a href="our-menu-1.html">Dal Fry</a></h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0"><a href="our-menu-1.html">Dal</a></h5>
                        <span className="dz-price">$25.00</span>
                      </div>
                      <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="dz-img-box style-3 box-hover">
                    <div className="dz-media">
                      <Image src="/images/gallery/grid2/pic6.jpg" alt="/" width="400" height="520" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title"><a href="our-menu-1.html">Pizza</a></h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0"><a href="our-menu-1.html">Pizza</a></h5>
                        <span className="dz-price">$90.00</span>
                      </div>
                      <a href="shop-cart.html" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center m-t10">
                  <a href="our-menu-2.html" className="btn btn-md btn-primary btn-hover-1"><span>See All Dishes</span></a>
                </div>
              </div>
              <div className="section-head text-center">
                <h2 className="title wow flipInX" data-wow-delay="0.2s">Quality Services</h2>
              </div>
              {/* Icon Wrapper 1 */}
              <div className="icon-wrapper1">
                <div className="row wow fadeInUp" data-wow-delay="0.2s">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="icon-bx-wraper style-1 box-hover center" style={{backgroundImage:`url(/images/gallery/grid/pic1.jpg)`}}>
                      <div className="inner-content">
                        <div className="icon-bx m-b25"> 
                          <span className="icon-cell icon-md">
                            <i className="flaticon-restaurant"></i>
                          </span> 
                        </div>
                        <div className="icon-content">
                          <h5 className="dz-title">Restaurant</h5>
                          <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="icon-bx-wraper style-1 box-hover center" style={{backgroundImage: `url(/images/gallery/grid/pic2.jpg)`}}>
                      <div className="inner-content">
                        <div className="icon-bx m-b25"> 
                          <span className="icon-cell icon-md">
                            <i className="flaticon-martini"></i>
                          </span> 
                        </div>
                        <div className="icon-content">
                          <h5 className="dz-title">Bar</h5>
                          <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                        </div>
                      </div>
                    </div>
                
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="icon-bx-wraper style-1 box-hover center" style={{backgroundImage: `url(/images/gallery/grid/pic3.jpg)`}}>
                      <div className="inner-content">
                        <div className="icon-bx m-b25"> 
                            <span className="icon-cell icon-md">
                              <i className="flaticon-coffee-cup"></i>
                            </span> 
                          </div>
                        <div className="icon-content">
                          <h5 className="dz-title">Cafe</h5>
                          <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="icon-bx-wraper style-1 box-hover center" style={{backgroundImage: `url(/images/gallery/grid/pic4.jpg)`}}>
                      <div className="inner-content">
                        <div className="m-b25"> 
                          <span className="icon-cell icon-md">
                            <i className="flaticon-cake"></i>
                          </span> 
                        </div>
                        <div className="icon-content">
                          <h5 className="dz-title">Dessert</h5>
                          <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Icon Wrapper 1 */}
            </div>
            <Image className="bg1 dz-parallax" data-parallax-speed="0.05" src="/images/background/pic3.png" alt="/" width="191" height="203"/>
            <Image className="bg2 dz-parallax" data-parallax-speed="0.05" src="/images/background/pic4.png" alt="/" width="170" height="184"/>
          </section>
          {/* Image Box-3 */}

          {/* Testimonials */}
          
          <section className="content-inner-1 section-wrapper-2 right overflow-hidden">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="title wow flipInX" data-wow-delay="0.2s">{parse("Customer's Comment")}</h2>
              </div>
              <div className="row gx-0 wow fadeInUp" data-wow-delay="0.4s">
                <div className="col-lg-7 col-md-12">
                  <div className="swiper testimonial-one-thumb">

                   <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    grid={{
                      rows: 2,
                    }}
                    >
                    { data ? 
                  
                    data.map((item, index) => {

                     return (
                    <SwiperSlide key={index}>
                            <Image src={item.yoast_head_json.og_image[0].url}
                             width={item.yoast_head_json.og_image[0].width} height={item.yoast_head_json.og_image[0].height} />
                    </SwiperSlide>
                          )
                  })
                  
                  : <></> } 
                  </Swiper>

                    </div>
                  </div>
                

                <div className="col-lg-5 col-md-12">
                  <div className="swiper testimonial-one-swiper h-100">


                   <Swiper
                    modules={[Autoplay]}
                   slidesPerView={1}
                   autoplay= {{delay: 2500, disableOnInteraction: false}}
                    >
                    { data ? 
                  
                    data.map((item, index) => {

                     return (
                    <SwiperSlide key={index}>
                    <div className="testimonial-1">
                          <div className="testimonial-text">
                            {parse(item.content.rendered)}
                          </div>
                          <div className="testimonial-info">
                            <h5 className="testimonial-name">John Doe</h5>
                            <span className="testimonial-position">{item.acf.rolepassion}</span>
                          </div>
                          <i className="flaticon-right-quote quote"></i>
                        </div>
                    </SwiperSlide>
                          )
                    })
                    
                    : <></> } 
                    </Swiper>

                   
                  </div>
                </div>
                
               
            </div>
          
            </div>
            
          </section>
          {/* Testimonial */}

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