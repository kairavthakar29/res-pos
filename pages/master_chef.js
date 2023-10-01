import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

export default function Categories({posts, deviceType}){
    return (
     posts ? 
                  
    console.log(posts)

    : 

    <Swiper
    className="team-swiper swiper-visible swiper-btn-lr"
    modules={[Autoplay, Navigation]}
    speed= {1000}
    parallax= {true}
    spaceBetween={30}
    slidesPerView={4}
    autoplay= {{delay: 2500}}
    navigation= {{
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
    
        <SwiperSlide>
            <div className="dz-team style-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-media">
                <Image src="/images/team/pic1.jpg" alt="/" width="400" height="460" />
            </div>
            <div className="dz-content">
                <div className="clearfix">
                <h6 className="dz-name"><Link href="/">category 1</Link></h6>
                <span className="dz-position">View Products</span>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="dz-team style-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-media">
                <Image src="/images/team/pic1.jpg" alt="/" width="400" height="460" />
            </div>
            <div className="dz-content">
                <div className="clearfix">
                <h6 className="dz-name"><Link href="/">category 2</Link></h6>
                <span className="dz-position">View Products</span>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="dz-team style-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-media">
                <Image src="/images/team/pic1.jpg" alt="/" width="400" height="460" />
            </div>
            <div className="dz-content">
                <div className="clearfix">
                <h6 className="dz-name"><Link href="/">category 3</Link></h6>
                <span className="dz-position">View Products</span>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="dz-team style-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-media">
                <Image src="/images/team/pic1.jpg" alt="/" width="400" height="460" />
            </div>
            <div className="dz-content">
                <div className="clearfix">
                <h6 className="dz-name"><Link href="/">category 4</Link></h6>
                <span className="dz-position">View Products</span>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="dz-team style-1 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-media">
                <Image src="/images/team/pic1.jpg" alt="/" width="400" height="460" />
            </div>
            <div className="dz-content">
                <div className="clearfix">
                <h6 className="dz-name"><Link href="/">category 5</Link></h6>
                <span className="dz-position">View Products</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        
        <div className="pagination mt-xl-0 m-t40">
        <div className="team-button-prev btn-prev-long"><i className="fa-solid fa-arrow-left"></i></div>
        <div className="team-button-next btn-next-long"><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    
    </Swiper>
        
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
  
    const page_id = 'product_section'
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}api/products?per_page=4&page=1`, { "Access-Control-Allow-Origin": "*" });
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
          notFound: "Not Found" 
        }
      }
  
    } catch (error) {
      return { 
        notFound: "Not Found"
      }
    }
  
  }