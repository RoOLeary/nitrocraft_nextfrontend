import { signIn } from "next-auth/react"
import Link from 'next/link'



export default function AccessDenied(props:{onClick?:()=>void}) {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link href={`/api/auth/signin`}>
        <a onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          You must be signed in to view this page.
        </a>
        </Link>
      </p>
      <p>Trust me, it's worth it.</p>
    </>
  )
}