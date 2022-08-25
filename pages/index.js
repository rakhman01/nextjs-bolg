import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Next js</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Wakhid Hidayatur Rakhman</p>
          <p>
            (This is a sample website - you’ll be building a site like this in{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </>
  );
}
