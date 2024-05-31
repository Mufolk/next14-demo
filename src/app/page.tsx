'use client'
import React from "react"
import Image from "next/image"
import s from "./page.module.css"
import UserProfile from "@/components/UserProfile"

export default function Home() {
  return (
    <div className={s.wrapper}>
      <h1>Welcome to Apps Sharing Knowledge</h1>
      <UserProfile userId={1} />
      <Image
        src="/images/img.png"
        alt="Example Image"
        width={500}
        height={500}
        quality={75}
        priority
      />
    </div>
  )
}
