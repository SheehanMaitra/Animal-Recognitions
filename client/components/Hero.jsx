"use client"
import Form from 'next/form'
import React, { useState } from "react";
import StateDropdown from "./StateDropdown";
const Hero = () => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  return (
    <section className='bg-blue-50'>
      <Form>
        <input type="text" placeholder='Enter your first name' />
        <input type="text" placeholder='Enter your last name' />
        <input type='text' placeholder='Enter your email' />
        <input type="text" placeholder="Enter your animal's name" />
        <input type="text" placeholder="Enter your animal's microchip #" />
        <input type="radio" id='d' value='Dog' />
        <label htmlFor="d">Dog</label>
        <input type="radio" id='f' value='Cat' />
        <label htmlFor="c">Cat</label>
      </Form>
    </section>
  )
}

export default Hero