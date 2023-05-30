import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserInfo({ users, error, deleteUser }) {
  return (
    <>
      <div className="margin-top-10"></div>
      {error ? (
        <Alert key="danger" variant="danger">
          {JSON.stringify(error)}
        </Alert>
      ) : users ? (
        users.map((user) => (
          <Card key={user.id} style={{ width: "100%", marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                Email: {user.email}
                <br />
                Phone No: {user.phone}
              </Card.Text>
              <Button variant="primary" onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : null}
    </>
  );
}

export default UserInfo;
