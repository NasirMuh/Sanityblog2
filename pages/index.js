import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity"

export default function Home({authors,category}) {
  console.log(authors)
  console.log(category)


  const client = createClient({
    projectId: "iuh30fxh",
    dataset: "production",
    apiVersion: '2021-10-21',
    useCdn: true
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <h1>Nasir</h1>
     <h1>Author :{authors[0].name}</h1>
     <h1>category :{category[0].title}</h1>
    </div>
  )
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "iuh30fxh",
    dataset: "production",
    apiVersion: '2021-10-21',
    useCdn: true
  });
  const authors = await client.fetch(`*[_type == "author"]`);
  const category = await client.fetch(`*[_type == "category"]`);

  return {
    props: {
      authors,category
    }
  };
}