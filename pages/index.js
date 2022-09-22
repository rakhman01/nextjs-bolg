import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/todos")
          .then((val) => val.json())
          .then((json) => setData(json));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Layout home>
        <Head>
          <title>Next js</title>
        </Head>
        {data &&
          data.map((slug) => (
            <section className={utilStyles.headingMd}>
              <p>Wakhid Hidayatur Rakhman</p>
              <p>
                (This is a sample website - you’ll be building a site like this
                in <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
              </p>
              <Link href="/other/[...slug]" as={`/other/${slug.id}`}>
                <a>Other</a>
              </Link>
            </section>
          ))}
      </Layout>
    </>
  );
}
