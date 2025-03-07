"use client"

import Link from "next/link"
import React from "react"
import { useAuth } from "@/context/AuthContext"

const Home = () => {
  const { user } = useAuth()
  return (
    <div>
      <Link href="/login">Login</Link>
      <p>{user?.email}</p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Home
