import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchBox from '../Components/SearchBox/SearchBox';
import ListingContainer from '../Components/ListingContainer/ListingContainer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate app | Codemia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBox />
        <ListingContainer />

      </main>
    </div>
  )
}
