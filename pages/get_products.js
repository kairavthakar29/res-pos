import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

export default function Products({posts, deviceType}){
	console.log("products" + posts);
    return (
     posts ? 
                  
            posts.products.map((item, index) => {
    
    <div className="row inner-section-wrapper">
        
        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-img-box style-3 box-hover">
            <div className="dz-media">
                <Image src="/images/gallery/grid2/pic2.jpg" alt="/" width="400" height="520"/>
            </div>
            {/*<span className="dz-tag">TOP SELLER</span>*/}
            <div className="dz-content">
                <h5 className="dz-title"><Link href="/">{item.name}</Link></h5>
                <p>{item.description}</p>
            </div>
            <div className="dz-hover-content">
                <div className="dz-info">
                <h5 className="dz-title mb-0"><Link href="/">{item.name}</Link></h5>
                <span className="dz-price">${item.price}</span>
                </div>
                <Link href="/" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></Link>
            </div>
            </div>
        </div>
        
        <div className="col-12 text-center m-t10">
            <Link href="/" className="btn btn-md btn-primary btn-hover-1"><span>See All Products1</span></Link>
        </div>
    </div>
            })
    : 

    <div className="row inner-section-wrapper">
        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dz-img-box style-3 box-hover">
            <div className="dz-media">
                <Image src="/images/gallery/grid2/pic2.jpg" alt="/" width="400" height="520"/>
            </div>
            <span className="dz-tag">TOP SELLER</span>
            <div className="dz-content">
                <h5 className="dz-title"><Link href="/">Pasta</Link></h5>
                <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
            </div>
            <div className="dz-hover-content">
                <div className="dz-info">
                <h5 className="dz-title mb-0"><Link href="/">Pasta</Link></h5>
                <span className="dz-price">$35.00</span>
                </div>
                <Link href="/" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></Link>
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
                <h5 className="dz-title"><Link href="/">Oreo Shake</Link></h5>
                <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
            </div>
            <div className="dz-hover-content">
                <div className="dz-info">
                <h5 className="dz-title mb-0"><Link href="/">Shake</Link></h5>
                <span className="dz-price">$55.00</span>
                </div>
                <Link href="/" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></Link>
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
                <h5 className="dz-title"><Link href="/">Dal Fry</Link></h5>
                <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
            </div>
            <div className="dz-hover-content">
                <div className="dz-info">
                <h5 className="dz-title mb-0"><Link href="/">Dal</Link></h5>
                <span className="dz-price">$25.00</span>
                </div>
                <Link href="/" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></Link>
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
                <h5 className="dz-title"><Link href="/">Pizza</Link></h5>
                <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
            </div>
            <div className="dz-hover-content">
                <div className="dz-info">
                <h5 className="dz-title mb-0"><Link href="/">Pizza</Link></h5>
                <span className="dz-price">$90.00</span>
                </div>
                <Link href="/" className="btn btn-cart btn-white text-primary btn-square"><i className="flaticon-shopping-cart"></i></Link>
            </div>
            </div>
        </div>
        <div className="col-12 text-center m-t10">
            <Link href="/" className="btn btn-md btn-primary btn-hover-1"><span>See All Products</span></Link>
        </div>
    </div>
        
    )
    
}



export async function getServerSideProps(context) {
    const UA = context.req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))
  
    const page_id = 'product_section'
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}/products?per_page=4&page=1`, { withCredentials: true });
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