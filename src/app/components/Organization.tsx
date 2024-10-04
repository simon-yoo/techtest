import { Button } from '@/components/ui/button'
import { Organization } from '@prisma/client'
import React from 'react'
import { fetchUniverse } from '../../../db/todo'
import Link from 'next/link'

const OrganizationComponent: React.FC<Organization> = ({
  id,
  name,
  tokens,
}) => {
  return (
    <Link href={`/organizations/${id}`}>
      <Button className='flex-col border-black border px-6 py-16'>
        {name}
        <div>{tokens}</div>
      </Button>
    </Link>
  )
}

export default OrganizationComponent
