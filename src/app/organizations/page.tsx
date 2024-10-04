import React from 'react'
import { fetchOrganizations } from '../../../db/todo'
import OrganizationComponent from '../components/Organization'

const page = async () => {
  const organizations = await fetchOrganizations()

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <ul className='flex-col gap-20 sm:flex md:flex-row'>
        {organizations.map((organization) => (
          <OrganizationComponent key={organization.id} {...organization} />
        ))}
      </ul>
    </div>
  )
}

export default page
