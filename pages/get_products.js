import React,{Fragment, useState} from "react"
import axios from "axios"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

export default function Products({posts, deviceType}){
    posts ? console.log(posts) : console.log("not found"); 
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
      const res = await axios.get(`${process.env.NEXT_PUBLIC_POS_BASE_API_URL}products?per_page=4&page=1`);
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