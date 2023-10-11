import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home(): React.ReactElement {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.description}>
        <p>{"Hello, it's a test app for interview"}</p>
        <div>
          <a
            href="https://github.com/dmytrokoshelnyk1/svitla-test-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Dmytro Koshelnyk
            <Image
              src="/author_logo.jpeg"
              alt="Dmytro Kosheknyk avatar"
              className={styles.authorLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.center}>
          <a href="/cables" className={styles.card}>
            <h2>
              Cable types <span>-&gt;</span>
            </h2>
            <p>A list of available Cable types</p>
          </a>
        </div>
      </div>
    </main>
  )
}
