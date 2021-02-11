import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonic Mini Project | Home</title>
        <meta name='keywords' content='sonic' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          dignissimos maiores dolorem distinctio dolor. Obcaecati, suscipit in
          soluta a doloribus deleniti, numquam facere similique illo sunt minus,
          corporis saepe consectetur?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          dignissimos maiores dolorem distinctio dolor. Obcaecati, suscipit in
          soluta a doloribus deleniti, numquam facere similique illo sunt minus,
          corporis saepe consectetur?
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
