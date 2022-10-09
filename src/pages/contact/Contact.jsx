import React, { Component } from 'react'
import './contact.css'
import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_2.jpeg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam dolor, ipsam similique officiis itaque.
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@egattor.com" target='blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/" target='blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+60177516167" target='blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact