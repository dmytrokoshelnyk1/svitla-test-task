// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Home from '@/app/page'

describe('BackButton component tests', () => {
  it('Renders correctly initial component', async () => {
    render(<Home />)
    const p = screen.getByText("Hello, it's a test app for interview")
    const p2 = screen.getByText('A list of available Cable types')
    const h2 = screen.getByText('Cable types')

    expect(p).toBeInTheDocument()
    expect(p2).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
  })

  it('Renders with user logo', async () => {
    const { getByAltText } = await render(<Home />)

    const image = getByAltText('Dmytro Kosheknyk avatar')

    expect(image.src).toContain('author_logo.jpeg')
  })

  it('Should have a link to /cables page', async () => {
    const { getByText } = render(<Home />)
    const link = getByText('Cable types').closest('a')
    expect(link).toBeInTheDocument()
    expect(link.href).toContain('/cables')
  })

  it('renders correctly toMatchSnapshot', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
