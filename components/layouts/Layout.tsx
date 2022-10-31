import React from 'react'
import Home from '../../pages'
import Footer from './Footer';
import Navbar from './Navbar'

interface Props {
    children: React.ReactNode;
  }
  
function Layout({ children }: Props) {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <main>{children}</main>
        <div className='fixed bottom-0'><Footer/></div>
    </div>
  )
}

export default Layout