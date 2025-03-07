"use client"

import React from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Dashboard = () => {
  const { logout, user } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div>
      Dashboard
      <button onClick={handleLogout}>Logout</button>
      <p>{user?.email}</p>
      <button>
        <Link href="/">Home</Link>
      </button>
    </div>
  )
}

export default Dashboard
