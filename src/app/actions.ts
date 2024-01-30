'use server'

import { Nonprofit } from '@/app/types'

export async function getNonprofits(): Promise<Nonprofit[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/nonprofits`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error creating grant submission:', error)
    throw error
  }
}

export async function exportNonprofits() {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/nonprofits/export`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'text/csv' },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.blob()
  } catch (error) {
    console.error('Error creating grant submission:', error)
    throw error
  }
}
