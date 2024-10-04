'use server'

import { Entity, Organization, Prisma, TemplateType } from '@prisma/client'
import db from './db'

// Insert organizations from api to database
// export const insertOrganizationsIntoDb = async () => {
//   const response = await fetch(
//     'https://0ab8-125-238-232-95.ngrok-free.app/api/organizations'
//   )
//   const organizations = (await response.json()) as Organization[]
// for (const organization of organizations) {
//   const organizationToInsert = {
//     id: organization.id,
//     clerkOrganizationId: organization.clerkOrganizationId,
//     createdAt: organization.createdAt,
//     name: organization.name,
//     tokens: organization.tokens,
//     clerkImageUrl: organization.clerkImageUrl,
//   }
//   try {
//     await db.organization.create({
//       data: {
//         ...organizationToInsert,
//       },
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// }

export const fetchOrganizations = async () => {
  const organizations = await db.organization.findMany()
  return organizations
}

export const fetchUniverse = async (organizationId: string) => {
  const universes = await db.universe.findMany({
    where: {
      organizationId,
    },
  })
  return universes
}

// export const insertTemplateType = async () => {
//   const response = await fetch(
//     'https://0ab8-125-238-232-95.ngrok-free.app/api/templates'
//   )
//   const templateTypes = (await response.json()) as TemplateType[]
//   console.log(templateTypes)
//   for (const templateType of templateTypes) {
//     const templateTypeToInsert = {
//       id: templateType.id,
//       type: templateType.type,
//     }
//     try {
//       await db.templateType.create({
//         data: {
//           ...templateTypeToInsert,
//         },
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

// export const insertEntity = async () => {
//   const universes = await db.universe.findMany({})
//   for (const universe of universes) {
//     const universeId = universe.id
//     try {
//       const response = await fetch(
//         `https://0ab8-125-238-232-95.ngrok-free.app/api/universes/${universeId}`
//       )
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       const entities = (await response.json()) as Entity[]
//       for (const entity of entities) {
//         const entityToInsert = {
//           id: entity.id,
//           name: entity.name,
//           description: entity.description,
//           archive: entity.archive,
//           slug: entity.slug,
//         }
//         await db.entity.create({
//           data: {
//             ...entityToInsert,
//             universe: {
//               connect: {
//                 id: universeId,
//               },
//             },
//             templateType: {
//               connect: {
//                 id: entity.templateTypeId,
//               },
//             },
//           },
//         })
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
// export const insertUniverse = async () => {
//   const organizations = await db.organization.findMany({})
//   for (const organization of organizations) {
//     const organizationId = organization.id
//     try {
//       const response = await fetch(
//         `https://0ab8-125-238-232-95.ngrok-free.app/api/organizations/${organizationId}`
//       )
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       const universes = await response.json()
//       for (const universe of universes) {
//         const univerToInsert = {
//           id: universe.id,
//           name: universe.name,
//           description: universe.description,
//         }
//         await db.universe.create({
//           data: {
//             ...univerToInsert,
//             Organization: {
//               connect: {
//                 id: organizationId,
//               },
//             },
//           },
//         })
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
