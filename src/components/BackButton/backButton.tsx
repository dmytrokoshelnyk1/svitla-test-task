'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './backButton.module.css'

export const BackButton: React.FC = () => {
  const router = useRouter()

  return (
    <button
      className={styles.backButton}
      type="button"
      onClick={() => {
        router.back()
      }}
    >
      {'<- Go Back'}
    </button>
  )
}
