import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Text, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Nom</title>
          <meta name='description' content='Nom' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={styles.main}>
          <Text
            bgGradient='linear(to-br, #FFA500, #fc3503)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
            Welcome to Nom
          </Text>
          <Text fontSize='lg'>
            Because making food should be easy, enjoyable, and practical.
          </Text>
          <Link href='/make-recipe'>
            <Button mt='4' colorScheme='red' variant='solid' size='lg'>
              Start Cooking
            </Button>
          </Link>
        </main>
      </div>
    </div>
  )
}
