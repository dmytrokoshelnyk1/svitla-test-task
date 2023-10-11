import React from 'react'
import styles from './ListViewItem.module.css'
import { ListViewItemProps } from '@/components/ListViewItem/ListViewItem.types'

export const ListViewItem: React.FC<ListViewItemProps> = ({ item }) => {
  const diameterValue = item?.diameter?.published?.value || '0'
  const manufactureName = item?.manufacturer?.name || '-'
  const unit = item?.diameter?.published?.unit || '-'

  return (
    <div className={styles.row} data-testid={item?.id}>
      <div className={styles.column}>
        <span data-testid={'itemId'}>{item?.catid}</span>
      </div>
      <div className={styles.column}>
        <div data-testid={'manufactureName'}>{manufactureName}</div>
      </div>
      <div className={styles.column}>
        <span data-testid={'diameterValue'}>{diameterValue}</span> {unit}
      </div>
    </div>
  )
}
