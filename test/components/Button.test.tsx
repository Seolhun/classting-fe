import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../../src/components/button/Button'


describe('Button Test', () => {
  test('Button', () => {
    let button = render(<Button>classting</Button>);
    const { container } = button;

    expect(button.getByText('classting'));
    expect(container.classList.contains('SH__Button'));
  });

  test('Button: Intent', () => {
    let button = render(<Button>classting</Button>);
    expect(button.container.getElementsByClassName('bg-blue-500').length).toBe(1);
    button = render(<Button intent='success'>classting</Button>);
    expect(button.container.getElementsByClassName('bg-green-500').length).toBe(1);
  });

  test('Button: Intent Weight', () => {
    let button = render(<Button>classting</Button>);
    expect(button.container.getElementsByClassName('bg-blue-500').length).toBe(1);
    button = render(<Button intentWeight={200}>classting</Button>);
    expect(button.container.getElementsByClassName('bg-blue-200').length).toBe(1);

  });

  test('Button: Hover', () => {
    let button = render(<Button>classting</Button>);
    fireEvent.mouseOver(button.container);
    expect(button.container.getElementsByClassName('hover:bg-blue-400').length).toBe(1);

    button = render(<Button intentWeight={200}>classting</Button>);
    fireEvent.mouseOver(button.container);
    expect(button.container.getElementsByClassName('hover:bg-blue-100').length).toBe(1);

  });
});
