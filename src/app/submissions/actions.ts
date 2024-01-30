import { GrantSubmission } from '@/app/types'

export async function getGrantSubmissions(): Promise<GrantSubmission[]> {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/nonprofits/submissions`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error creating grant submission:', error)
    throw error
  }
}

export async function exportSubmissions() {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/nonprofits/submissions/export`,
      {
        method: 'GET',
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
