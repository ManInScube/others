import Layout from '@/components/layout/Layout'
import { ProfilePage } from '@/components/templates/ProfilePage/ProfilePage'
import Head from 'next/head'
import favicon from '@/public/images/favicon.png';
import { CartPage } from '@/components/templates/CartPage/CartPage';


export default function Catalog(){

    return (
        <>
          <Head>
            <title>Others - Корзина</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={favicon.src} />
          </Head>
          <Layout>
            <CartPage/>
          </Layout>
        </>
      )
}