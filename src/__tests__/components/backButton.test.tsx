// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { BackButton } from '@/components/BackButton/backButton'
import { fireEvent } from '@testing-library/dom'
import { jest } from '@jest/globals'

const mockBackFn = jest.fn()
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: mockBackFn,
    }),
  }
})

describe('BackButton component tests', () => {
  it('Renders correctly initial component', async () => {
    render(<BackButton />)
    const btn = screen.getByText('<- Go Back')

    expect(btn).toBeInTheDocument()
  })

  it('Should handle rounter.push after click', () => {
    render(<BackButton />)

    const btn = screen.getByText('<- Go Back', { selector: 'button' })
    fireEvent.click(btn)

    expect(mockBackFn).toHaveBeenCalled()
  })

  it('renders correctly toMatchSnapshot', () => {
    const tree = renderer.create(<BackButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
