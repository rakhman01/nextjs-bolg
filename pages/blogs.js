import React from "react";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const blogs = ({ allPostsData }) => {
  return (
    <Layout blogs>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <br />
              {id}
              <br />
              <Date dateString={date} />
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default blogs;
