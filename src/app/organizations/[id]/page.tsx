import React from 'react'
import { fetchOrganizations, fetchUniverse } from '../../../../db/todo'

const page = async ({ params }: { params: { id: string } }) => {
  const universes = await fetchUniverse(params.id)
  console.log(universes)
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <ul>
        {universes.map((universe) => (
          <li key={universe.id}>{universe.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default page
