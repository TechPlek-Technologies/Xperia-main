import React from 'react'
import { ServiceItem } from './Services'

const ServiceContent = ({InnerData}) => {
  return (
    <>
        {InnerData.map((item, index) => (
        <ServiceItem key={index} item={item} index={index} />
      ))}
    </>
  )
}

export default ServiceContent
