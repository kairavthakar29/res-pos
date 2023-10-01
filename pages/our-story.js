import React,{Fragment} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

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

        <div className="our-story">
        <div className="container">
        <div className="row">
          {
          posts[0].acf.image_with_text ? posts[0].acf.image_with_text.map((item) => {
           if(item.acf_fc_layout=='adjust_sections'){
            return (
              <div className="col-md-7 mb-4" key={item.id}>
              <div className="atmosphere">
              <div className="main-title">
                <span>{item.text_content.text_uppertitle} </span>
                <h2>{item.text_content.text_main_title}</h2>
              </div>
              {parse(item.text_content.text_content_area)}
              </div>
            </div>
              ) 
          }
          if(item.acf_fc_layout=='add_image_content'){
             return (
            <div className="col-md-5 mb-4" key={item.id}>
              <Image src={item.add_image.url} alt={item.add_image.alt} title={item.add_image.title} width={item.add_image.width} height={item.add_image.height}/>
            </div>
            )
          }
          }) : 'Not Found!'}

        </div>  
        </div>  
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/pages/?slug=our-story&_fields=acf,yoast_head,title,id,slug,featured_media&acf_format=standard&?version=${Math.random()}`);
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