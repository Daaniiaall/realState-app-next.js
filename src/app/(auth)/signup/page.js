import SignUpPage from "@/templates/SignUpPage"

import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import { redirect } from "next/navigation"

async function Signup() {

  const session = await getServerSession(authOptions)
  // console.log(session)
  if (session) {
    redirect("/")
  }

  return (
    <SignUpPage />
  )
}

export default Signup