import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Wakhid Hidayatur Rakhman";
export const siteTitle = "Next.js My Website";

export default function Layout({ children, home, blogs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rakhman</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <Link href={"/more"}>
              <a className={utilStyles.headingLg}>More</a>
            </Link>
            <main>{children}</main>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      {!home && (
        <div className={styles.backToHome}>
          <main>{children}</main>
          <Link href="/">
            <a>← Back to home ?</a>
          </Link>
        </div>
      )}

      {/*  */}
      {blogs ? (
        <main>{children}</main>
      ) : (
        <>
          <Link href={"/blogs"}>
            <a>Go To Blogs..</a>
          </Link>
        </>
      )}
    </div>
  );
}
