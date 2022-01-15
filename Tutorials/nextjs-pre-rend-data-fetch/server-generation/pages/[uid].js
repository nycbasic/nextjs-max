<<<<<<< HEAD
function UserId (props) {
    return <h1>{props.id}</h1>
}

export default UserId;

export async function getServerSideProps(context) {
    const {params} = context;
    
    return {
        props: {
            id: params.uid
        }
    }
}
=======
function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  console.log("From the server", userId);
  return {
    props: {
      id: userId,
    },
  };
}
>>>>>>> c51461140a9685e460184890c1f4a4d7104426d7
function UserIdPage(props) {
    return <h1>ID</h1>
}
