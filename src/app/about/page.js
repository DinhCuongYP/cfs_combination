import Link from 'next/link';

export const metadata = {
  title: 'CFSC - About Page',
  description: 'Generated by create next app',
}
export default function AboutPage() {
  return (
    <div>
      <Link href="/">Go To Home</Link>
      <h1>About Page</h1>
    </div>
  )
}
