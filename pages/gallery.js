import React,{Fragment} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'

export default function DynamicPage({posts, deviceType}) {
  return (
   <Fragment>
      <Head>
        {posts[0].yoast_head && parse(posts[0].yoast_head) }
      </Head>
      <div id="content-wrap">
        <div className="body-wrapper">
         <div className="sub-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="detail">
                  <h1>{posts[0].title.rendered}</h1>
                  <span>{posts[0] && posts[0].acf.sub_heading}</span>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link className="select" href="">{posts[0].title.rendered}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {posts[0] && posts[0].acf.add_featured_image.url ?
          <div className="banner-img" style={{ background: 'url('+ posts[0].acf.add_featured_image.url +' ) '}}></div>
          :
          <div className="banner-img"></div> 
          }
         </div>
         <div className="wave"></div>
          
          
         { posts.length ? 
        
          <div className="gallery">
            <div className="container">

              <div className="row">
             
              <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto gallerySection" showThumbnails={true} lightboxIdentifier="lightbox1" >
                  {posts[0].acf.add_gallery ? posts[0].acf.add_gallery.map((item, j) => {
                     return(
                      <Image data-lightboxjs="lightbox1" key={j} quality={80} src={item.images.url} alt={item.images.alt} title={item.images.title} width={item.images.width} height={item.images.height}/>
                    )
                  }) : 'Not Found!'}
              </SlideshowLightbox> 

              </div>  

            </div>
          </div>

          : 'Not Found !'
          
          }


         

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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/pages/?slug=gallery&_fields=acf,yoast_head,title,id,slug,featured_media&acf_format=standard&?version=${Math.random()}`);
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