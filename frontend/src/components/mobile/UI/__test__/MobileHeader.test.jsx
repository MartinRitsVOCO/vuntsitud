import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import MobileHeader from '../MobileHeader'
import AppProvider from '../../../../context/AppProvider'

describe('MobileHeader', () => {
  const renderMobileHeader = () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <MobileHeader />
        </AppProvider>
      </BrowserRouter>
    )
  }

  test('opens MobileNavMenu when action button is clicked', () => {
    renderMobileHeader()
    
    // Find and click the action button
    const actionButtons = document.querySelectorAll('img[src$="action-button.svg"]');
    expect(actionButtons.length).toBe(1);
    const actionButton = actionButtons[0];
    fireEvent.click(actionButton)

    // Verify that MobileNavMenu is rendered
    expect(screen.getByText('KKK')).toBeInTheDocument()
    expect(screen.getByText('Anna tagasisidet')).toBeInTheDocument()
    expect(screen.getByText('Võta ühendust')).toBeInTheDocument()
  })
})
