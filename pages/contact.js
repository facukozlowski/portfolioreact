import Layout from "../components/Layout";
import Error from "./_error";

const Contact = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/facundo-kozlowski-257100246"
              target="_blank"
              className="btn btn-outline-secondary">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/facukozlowski");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Contact;
