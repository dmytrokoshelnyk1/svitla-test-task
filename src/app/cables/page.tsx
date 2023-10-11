'use client'
import React, { useEffect, useState } from 'react'
import { BackButton } from '@/components/BackButton/backButton'
import styles from './cablePage.module.css'
import { AxiosError, AxiosResponse } from 'axios'
import { MOCK_DATA } from '@/api/_mockData/_mockDataResponses'
import { EntriT, MockDataResponseT } from '@/api/_mockData/_mockData.types'
import { ListView } from '@/components/ListView/ListView'
require('dotenv').config()

const isMockedData = process.env.NEXT_PUBLIC_IS_MOCKED_DATA

export default function Cables(): React.ReactElement {
  const [entries, setEntries] = useState<EntriT[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [isError, setIsError] = useState<Boolean>(false)
  const [page, setPage] = useState<Number>(1)
  const [nextPage, setNextPage] = useState<String>('')
  const [total, setTotal] = useState<Number | null>(null)

  const fakeApiCall = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const fetchMockedData = async () => {
    setIsLoading(true)
    setIsError(false)
    fakeApiCall(500)
      .then((response: AxiosResponse) => {
        const data: MockDataResponseT = MOCK_DATA
        setEntries(data.entities)
        setNextPage(data.next)
        setTotal(data.total)
      })
      .catch((e) => {
        setIsError(true)
        console.error('error:', e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchMockedData()
  }, [])

  const handlePrevPageClick = () => {
    const prevPage = page - 1
    setPage(prevPage > 0 ? prevPage : 0)
    fetchMockedData()
  }

  const handleNextPageClick = () => {
    setPage(page + 1)
    fetchMockedData()
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.topBlock}>
        <BackButton />
      </div>
      <div className={styles.listContainer}>
        <div className={styles.listHeader}>
          <h2> Cable types </h2>
        </div>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.listBody}>
            <ListView entries={entries} />
            <div className={styles.paginationContainer}>
              <button
                className={styles.buttonNav}
                disabled={page - 1 <= 0}
                onClick={handlePrevPageClick}
              >
                {'<-'}
              </button>
              <span className={styles.currentPage} data-testid={'current-page'}>
                {page}
              </span>
              {nextPage.length > 0 && (
                <button
                  className={styles.buttonNav}
                  onClick={handleNextPageClick}
                >
                  {'->'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
