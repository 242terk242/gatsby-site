import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ 
    display: `inline-block`, 
    marginRight: `1rem`
    }}>
    <Link style={{
          textDecoration: `none`,
          color: `#330000`
    }} to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ 
      margin: `3rem auto`, 
      maxWidth: 650, 
      padding: `0 1rem`, 
      fontFamily: `sans-serif`
      }}>
      <header style={{ 
        marginBottom: `1.5rem`,
        backgroundColor: `#ff6699`,
        minHeight: `3em`,
        display: `flex`,
        flexFlow: `row wrap`,
        writingMode: `horizontal-tb`,
        justifyContent: `space-between`
        }}>
        <Link to="/" style={{ 
          textShadow: `none`, 
          backgroundImage: `none`,
          textDecoration: `none`
          }}>
          <p style={{ 
            display: `inline-block`,
            padding: `4em 4em`,
            color: `#ffcccc`,
            fontSize: `1.4em`
             }}>hum<span style={{
               color: `#330000`,
               padding: `5px`
             }}>mingbird</span> 
             <span style={{
               display: `block`,
               height:`42px`,
               width:`42px`,
               backgroundColor: `#ffcc99`
             }}
             ></span>
             </p>
        </Link>
        <ul>
          <ListLink to="/blog/">blog</ListLink>
          <ListLink to="/store/">store</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}