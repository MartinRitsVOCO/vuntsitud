import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import LandingPage from '../LandingPage'
import AppProvider from '../../../context/AppProvider'
import apiService from '../../../services/apiService'

vi.mock('../../../services/apiService')
vi.mock('react-router', () => ({
  Link: ({ children }) => children
}))

describe('LandingPage', () => {
  const mockFood = {
    ID: 1,
    Nimetus: "Test Food",
    Kategooria: "Test Category",
    Lisatud_kuupaev: new Date(),
    Sailivus_paevad: 10,
    Pilt: "test.jpg"
  }

  beforeEach(() => {
    apiService.get.mockImplementation((url) => {
      if (url === '/recent/Kopli') {
        return Promise.resolve({ data: [mockFood] })
      }
      return Promise.resolve({ data: [] })
    })
  })

  it('renders FoodCard with mock data when location is Kopli', async () => {
    render(
      <AppProvider initialState={{ selectedLocation: 'Kopli' }}>
        <LandingPage />
      </AppProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Test Food')).toBeInTheDocument()
    })
  })

  it('shows empty state when location is Põllu', async () => {
    render(
      <AppProvider initialState={{ selectedLocation: 'Põllu' }}>
        <LandingPage />
      </AppProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Ups! Praegu pole kapis ühtegi toitu.')).toBeInTheDocument()
    })
  })
})
