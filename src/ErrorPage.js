import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from './components/layout/Layout';

const ErrorPage = () => {
  return (
   <Layout>
    <Wrapper>
   <div className="container">
    <div>
        <h2>404</h2>
        <h3>Oh ! Somthing went wrong.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur totam reiciendis eligendi! A eaque suscipit enim voluptates consectetur asperiores dicta!</p>
       <Link to="/">Go Back to Home</Link> 
    </div>
   </div>
    </Wrapper>
   </Layout>
  )
};

const Wrapper = styled.section`
 .container{
    padding : 9rem 0;
    text-align:center;
    h2{
        font-size:10rem;
    }
    p{
        margin:2rem 0;
    }
    h3{
        font-size:5.2rem;
    }
 }
`;

export default ErrorPage
