"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function ClientNav() {
  const router = useRouter();
  const pathname = usePathname();

  return <div>{pathname}</div>;
}