'use client'

import Link from 'next/link'
import { fetchOrganizations } from '../../db/todo'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen p-8 pb-20 '>
      <Link href='/organizations'>
        <Button onClick={async () => await fetchOrganizations()} className=''>
          Organizations
        </Button>
      </Link>
    </div>
  )
}
