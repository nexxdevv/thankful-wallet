import { auth } from "@/lib/firebase"
import {
  signInWithEmailAndPassword
} from "firebase/auth"

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    return { success: true }
  } catch (error) {
    console.error("Error logging in:", error)
    throw new Error("Failed to login")
  }
}
