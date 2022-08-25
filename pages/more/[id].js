import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((val) => {
    return {
      params: { id: val.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (contex) => {
  const id = contex.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
  const data = await res.json();

  return {
    props: {
      data: { data: data },
    },
  };
};

const Detail = ({ data }) => {
  console.log(data.data.name), "lol";
  return (
    <div className={utilStyles.container}>
      <div className={utilStyles.user}>
        <div>
          <p>Nama</p>
          <p>Nama Panggilan</p>
          <p>Email</p>
          <p>Nomor Telepon</p>
        </div>
        <div>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>
        <div>
          <p>{data.data.name}</p>
          <p>{data.data.username}</p>
          <p>{data.data.email}</p>
          <p>{data.data.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
