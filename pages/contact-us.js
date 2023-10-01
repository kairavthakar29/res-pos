import Image from 'next/image'
import Link from 'next/link'
import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import axios from "axios"
import Head from 'next/head'
import parse from 'html-react-parser'
import { ToastContainer } from 'react-toastify'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFooterData } from '../components/globaldata' 

export default function Contact({posts, deviceType}){
        const { data }  = useFooterData(`/all`);
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = async(data) => {
            let axiosConfig = {
              headers: {
                "Content-Type": "multipart/form-data",
              }
            };
            try {
              const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/wp-json/contact-form-7/v1/contact-forms/125/feedback`, data,axiosConfig);
              toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER
              });
              setTimeout(function(){
                document.getElementById("contact-form").reset();
            }, 1000);
            } catch (e) {
              toast.error('Something wrong with API connection !', {
                position: toast.POSITION.TOP_CENTER
              });
            }   
          }

    return(
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
         <div className="contact-page">
            <div className="get-in-touch">
<div className="container">
<div className="row">

<div className="col-md-6">

<div className="get-touch-detail">
<h3>{posts[0].acf.get_in_touch_title}</h3>
{parse(posts[0].acf.get_in_touch_content)}
</div>

{data && data.follow_us && data.follow_us_title ?
<div className="social-icons">
<h5>{data.follow_us_title}</h5>
<ul>
{data.follow_us.map((item) => {
    
    return (
    <li key={item.id}><Link href={item.add_url}><i className={`icon-${item.platforms}`}></i></Link></li>
    )
})}
</ul>
</div>
: 'Not Found!' }

</div>

<div className="col-md-6">
<div className="get-touch-form">
                
<div className="project-inquery" data-aos="fade-up" data-aos-duration="2000">
<ToastContainer style={{ width: "420px" }} />
<form onSubmit={handleSubmit(onSubmit)} id="contact-form">
   <h4>Share Your Queries</h4>
    <div className='form-group'>
       <input className='form-control' type="text" placeholder="Full Name *" {...register("full_name", {required:'This is required.'})}/>
       <ErrorMessage
            errors={errors}
            name='full_name'
            render={({ message }) => <div className="invalid-feedback">{message}</div>}
        />
    </div>
    <div className='form-group'>
    <input className='form-control' type="email" placeholder="Email Address *" {...register("email_address",{   
        required:'This is required.', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address"}})} />
    <ErrorMessage
            errors={errors}
            name='email_address'
            render={({ message }) => <div className="invalid-feedback">{message}</div>}
        />
    </div>
    
    <div className='form-group'>
    <input className='form-control' type="tel" placeholder="Phone *" {...register("phone", {required:'This is required.', pattern: { value:/^[0-9]+$/,message: "Invalid mobile number"}})} />
    <ErrorMessage
            errors={errors}
            name='phone'
            render={({ message }) => <div className="invalid-feedback">{message}</div>}
        />
    </div>
    <div className='form-group'>
    <textarea placeholder="Project Description" className='form-control' {...register("project_description", {required: false})} />
    </div>
    <div className='form-group'>
      <input className="primary-button" type="submit" value="Send Message"/>
    </div>
</form>
</div>

</div>
</div>
</div>
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/wp/v2/pages/?slug=contact-us&_fields=acf,yoast_head,title,id,slug,featured_media&acf_format=standard&?version=${Math.random()}`);
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