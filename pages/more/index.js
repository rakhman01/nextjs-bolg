import React from "react";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return {
    props: { data: data },
  };
}

const More = ({ data }) => {
  return (
    <div className={utilStyles.container}>
      <h2>All User (Dumy)</h2>
      {data.map((val, index) => (
        <div key={val.id}>
          <Link href={`/more/` + val.id} key={val.id}>
            <a>
              <h3>{val.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default More;
