// @ts-nocheck
import React from 'react'
import { render, screen } from '@testing-library/react'
import { MOCK_DATA } from '@/api/_mockData/_mockDataResponses'
import { ListViewItem } from '@/components/ListViewItem/ListViewItem'

const entries = MOCK_DATA.entities

describe('ListViewItem', () => {
  it('Renders correctly initial component', async () => {
    render(<ListViewItem item={entries[0]} />)
    screen.debug()
    const ID = screen.getByText('1622475')
    const Manufacturer = screen.getByText('Kerite')
    const Diameter = screen.getByTestId('diameterValue')

    expect(ID).toBeInTheDocument()
    expect(Manufacturer).toBeInTheDocument()
    expect(Diameter).toBeInTheDocument()
  })

  it('Should render correctly if without properties values', async () => {
    const brokenItem = {
      ...entries[0],
      diameter: null,
      manufacturer: '',
      id: null,
      catid: null,
    }

    render(<ListViewItem item={brokenItem} />)

    const ID = screen.getByTestId('itemId').textContent
    const Manufacturer = screen.getByTestId('manufactureName').textContent
    const Diameter = screen.getByTestId('diameterValue').textContent

    expect(ID).toEqual('')
    expect(Manufacturer).toEqual('-')
    expect(Diameter).toEqual('0')
  })
})
