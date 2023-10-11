import React from 'react'
import { ListViewProps } from '@/components/ListView/ListView.types'
import styles from './ListView.module.css'
import { EntriT } from '@/api/_mockData/_mockData.types'
import { ListViewItem } from '@/components/ListViewItem/ListViewItem'

export const ListView: React.FC<ListViewProps> = ({ entries }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.columnTitle}>
          <span>ID</span>
        </div>
        <div className={styles.columnTitle}>
          <span>Manufacturer</span>
        </div>
        <div className={styles.columnTitle}>
          <span>Diameter</span>
        </div>
      </div>
      <div className={styles.divider} />
      {entries.map((item: EntriT) => {
        return <ListViewItem item={item} key={item.id} />
      })}
    </div>
  )
}
