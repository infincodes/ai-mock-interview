"use client";
import React from 'react'

import AddNewInterview from '../_components/AddNewInterview'


function Dashboard() {
  return (
    <div>
    <h2 className='font-bold text-2xl'>Dashboard</h2>
   <h2>Create and start your AI Mockup Interview</h2>
   <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
    <AddNewInterview />
   
    
    
   </div>
  
   </div>

    );
  
}

export default Dashboard