import SignInPage from "@/templates/SignInPage"

import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import { redirect } from "next/navigation"

async function Signin() {
  const session = await getServerSession(authOptions)
  // console.log(session)
  if (session) {
    redirect("/")
  }
  return (
    <SignInPage />
  )
}

export default Signin