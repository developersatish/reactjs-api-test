import React, { useEffect } from "react";
import UserInfo from "./user-info";
import { connect } from "react-redux";
import { fetchData, deleteData } from "../actions/dataActions";

function UsersRedux({ data, loading, error, fetchData, deleteData }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = (id) => {
    const isConfirm = window.confirm("Delete the record!");
    if (isConfirm) deleteData(id);
  };
 
  return (
    <>
      <div className="margin-top-10"></div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <UserInfo users={data} error={error} deleteUser={handleDelete} />
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchData,
  deleteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux);
