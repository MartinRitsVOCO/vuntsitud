import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import FoodCard from '../FoodCard';

const mockFood = {
  ID: '123',
  Pilt: '/test-image.jpg',
  Nimetus: 'Test Food',
  Kategooria: 'Joogid',
  Lisatud_kuupaev: '2024-01-01',
  Sailivus_paevad: 5
};

describe('FoodCard', () => {
  test('displays correct food name', () => {
    render(
      <BrowserRouter>
        <FoodCard food={mockFood} />
      </BrowserRouter>
    );

    const name = screen.getByText('Test Food');
    expect(name).toBeTruthy();
  });

  test('uses correct category icon', () => {
    render(
      <BrowserRouter>
        <FoodCard food={mockFood} />
      </BrowserRouter>
    );

    const categoryIcons = document.querySelectorAll('img[src$="/images/icons/Joogid.svg"]');
    expect(categoryIcons.length).toBe(1);
    const categoryIcon = categoryIcons[0];
    expect(categoryIcon.getAttribute('src')).toBe('/images/icons/Joogid.svg');
  });

  test('displays correct formatted date', () => {
    render(
      <BrowserRouter>
        <FoodCard food={mockFood} />
      </BrowserRouter>
    );

    const dateText = screen.getByText('06.01.2024');
    expect(dateText).toBeTruthy();
  });
});