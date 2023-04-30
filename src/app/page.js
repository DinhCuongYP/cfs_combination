'use client';

import Link from "next/link";


export default function Home() {
  return (
    <>
    <Link href='/about'>
      <h1>About Page</h1>
    </Link>
    <Link href='/project'>
      <h1>Project Page</h1>
    </Link>
    <Link href='/fqa'>
      <h1>FQA Page</h1>
    </Link>
    </>
    
  )
}
