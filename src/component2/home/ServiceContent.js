import React from 'react'
import { ServiceItem } from './Services'

const ServiceContent = ({InnerData}) => {
  return (
    <>
      {InnerData && InnerData.slice(0, 6).map((item, index) => (
  <ServiceItem key={index} item={item} index={index} />
))}
    </>
  )
}

export default ServiceContent
