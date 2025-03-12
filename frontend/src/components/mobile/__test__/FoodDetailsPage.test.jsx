import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { BrowserRouter } from 'react-router';
import FoodDetailsPage from '../FoodDetailsPage';
import apiService from '../../../services/apiService';
import AppProvider from '../../../context/AppProvider';

// Mock the apiService
vi.mock('../../../services/apiService');

// Mock useParams
vi.mock(import("react-router"), async (importOriginal) => {
    const actual = await importOriginal()
    return {
      ...actual,
      useParams: () => ({ id: '123' })
    }
})

const mockFoodData = {
  data: [{
    Pilt: '/test-image.jpg',
    Nimetus: 'Test Food',
    Kommentaar: 'Test Description',
    Lisatud_kuupaev: '2024-01-01',
    Sailivus_paevad: 5
  }]
};

describe('FoodDetailsPage', () => {
  beforeEach(() => {
    // Setup API mock
    vi.mocked(apiService.get).mockResolvedValue(mockFoodData);
    vi.mocked(apiService.put).mockResolvedValue({});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('displays correct food name', async () => {
    render(
        <BrowserRouter>
            <AppProvider>
                <FoodDetailsPage />
            </AppProvider>
        </BrowserRouter>
    );

    const name = await screen.findByText('Test Food');
    expect(name).toBeTruthy();
  });

  test('displays correct food description', async () => {
    render(
        <BrowserRouter>
            <AppProvider>
                <FoodDetailsPage />
            </AppProvider>
        </BrowserRouter>
    );

    const description = await screen.findByText('Test Description');
    expect(description).toBeTruthy();
  });

  test('displays correct formatted date', async () => {
    render(
        <BrowserRouter>
            <AppProvider>
                <FoodDetailsPage />
            </AppProvider>
        </BrowserRouter>
    );

    const dateText = await screen.findByText('Parim enne: 06.01.2024');
    expect(dateText).toBeTruthy();
  });

  test('calls API when "Võtan selle!" button is clicked', async () => {
    render(
        <BrowserRouter>
            <AppProvider>
                <FoodDetailsPage />
            </AppProvider>
        </BrowserRouter>
    );

    const takeButton = await screen.findByText('Võtan selle!');
    fireEvent.click(takeButton);

    await waitFor(() => {
      expect(apiService.put).toHaveBeenCalledWith('/takeProduct/123');
    });
  });
});
