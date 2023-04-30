'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/about')}>
      About
    </button>
  )
}
