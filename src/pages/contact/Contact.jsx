import React from 'react';
import './contact.css';
import styled from "styled-components";
import Layout from '../../components/layout/Layout';

const Contact = () => {
  const Wrapper = styled.section`
    text-align: center;
    .container {
      margin-top: 4rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        width:300px;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
            input{
            border:1px solid grey;
            width:300px;
          }
        }
        }
       }
      }
    }
  `;

  return (
    <Layout>
    <Wrapper>
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h4 style={{color:"green",textAlign:"center",fontFamily:"Arial, Helvetica, sans-serif",paddingTop:"10px",fontSize:"25px"}}>Feel Free to Contact Us ☎️</h4>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwkdagrr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              className='b'
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className='b'
            />

            <textarea
              name="Message"
              cols="32"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message" className='a'></textarea>

            <input type="submit" value="send" style={{backgroundColor:"green",borderRadius:'7px'}} />
          </form>
        </div>
      </div>
    </Wrapper>
    </Layout>
  );
};

export default Contact;