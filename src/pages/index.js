import React from "react"
import Layout from "../components/layout"
import study from '../../static/mehgan_4.png'


export default function Home() {
  return (
  <Layout>
    <h1>12/22/2020 Updates</h1>
    <p>
      Logo studies part II
    </p>
          
    <p><img src={study} alt="Logo study"/></p>
    
  </Layout>)
}
