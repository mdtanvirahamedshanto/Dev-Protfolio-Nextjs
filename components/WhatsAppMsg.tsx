"use client";
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const WhatsAppMsg = () => {
  return (
    <FloatingWhatsApp
    phoneNumber="01614081441"
    accountName="Md Tanvir Ahamed Shanto"
    allowEsc
    allowClickAway
    notification
    notificationSound
    avatar='https://avatars.githubusercontent.com/u/146053285?s=200&v=4'
  />
  )
}

export default WhatsAppMsg