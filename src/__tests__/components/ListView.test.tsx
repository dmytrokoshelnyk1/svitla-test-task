// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import { fireEvent } from '@testing-library/dom'
import { ListView } from '@/components/ListView/ListView'
import { MOCK_DATA } from '@/api/_mockData/_mockDataResponses'

const entries = MOCK_DATA.entities

describe('ListView', () => {
  it('Renders correctly initial component', async () => {
    render(<ListView entries={entries} />)
    const headerTitle1 = screen.getByText('ID')
    const headerTitle2 = screen.getByText('Manufacturer')
    const headerTitle3 = screen.getByText('Diameter')

    const listItem = screen.getByTestId(entries[0].id)
    const listItem2 = screen.getByTestId(entries[1].id)

    expect(headerTitle1).toBeInTheDocument()
    expect(headerTitle2).toBeInTheDocument()
    expect(headerTitle3).toBeInTheDocument()
    expect(listItem).toBeInTheDocument()
    expect(listItem2).toBeInTheDocument()
  })

  it('Should render correct count of items', async () => {
    const { container } = render(<ListView entries={entries} />)
    const entriesCount = entries.length
    const rows = container.getElementsByClassName('row')
    expect(rows.length).toBe(entriesCount)
  })

  it('Should render 0 items', async () => {
    const { container } = render(<ListView entries={[]} />)
    const rows = container.getElementsByClassName('row')
    expect(rows.length).toBe(0)
  })
})
