// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Cables from '@/app/cables/page'
import { jest } from '@jest/globals'
import { fireEvent, waitFor } from '@testing-library/dom'

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

describe('Cables page', () => {
  it('Renders correctly initial component', async () => {
    render(<Cables />)
    const title = screen.getByText('Cable types')
    await waitFor(() => expect(screen.getByText('<-')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('->')).toBeInTheDocument())
    await waitFor(() =>
      expect(screen.getByTestId('current-page')).toHaveTextContent('1')
    )

    expect(title).toBeInTheDocument()
  })

  it('Should fetch data right after render', async () => {
    const page = render(<Cables />)
    await screen.getByText('Loading...')
  })

  it('Should fetch 2 page after click -> button', async () => {
    render(<Cables />)
    await waitFor(() => {
      expect(screen.getByText('->')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('->'))
    await waitFor(() =>
      expect(screen.getByTestId('current-page')).toHaveTextContent('2')
    )
  })

  it('renders correctly toMatchSnapshot', () => {
    const tree = renderer.create(<Cables />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
