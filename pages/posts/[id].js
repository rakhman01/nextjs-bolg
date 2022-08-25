import React from "react";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

const route = ({ postData }) => {
  return (
    <Layout>
      {/* {postData.title} */}
      <Date dateString={postData.date} />
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br></br>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default route;
