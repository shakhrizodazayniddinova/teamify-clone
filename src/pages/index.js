import React from 'react';
import Layout from '../components/Layout';
import Main from './dashboard';
import Rightsidebar from './rightSidebar';

export default function index() {
  return (
    <Layout>
      <Main/>
      <Rightsidebar/>
    </Layout>
  )
}
