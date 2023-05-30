import UserInfo from "./user-info";
import useData from "../hooks/userData";

function Users() {
  const { users, isLoading, error } = useData();
  function deleteUser(id) {
    console.log(id);
  }
  return (
    <>
      <div className="margin-top-10"></div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <UserInfo users={users} error={error} deleteUser={deleteUser} />
      )}
    </>
  );
}

export default Users;
