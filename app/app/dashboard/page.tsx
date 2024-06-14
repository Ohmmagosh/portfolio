"use server"

import { redirect } from "next/navigation"

export default async function Dashboard() {
  //maybe some logic here
  return redirect("/portfolio")
}
