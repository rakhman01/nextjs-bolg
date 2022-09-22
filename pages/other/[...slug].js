import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const other = () => {
  const [data, setData] = useState();
  const router = useRouter();
  const { slug } = router.query;

  // console.log(slug, "lol");

  useEffect(() => {
    if (slug) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${slug[0]}`)
        .then((val) => val.json())
        .then((val) => setData(val));
    }
  }, [slug]);

  console.log(data, "ini mas");
  return <div>{data && <div>{data.title}</div>}</div>;
};

export default other;
