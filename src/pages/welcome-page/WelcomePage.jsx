import React from 'react'
import Form from '../form/Form'
import Scoops from './Scoops'
import Toppings from './Toppings'

const WelcomePage = () => {
  return (
    <div>
      <Scoops/>
      <Toppings/>
       <Form />
    </div>
  )
}

export default WelcomePage