import axios from "axios";
import { fetchData, deleteData } from "./actions/dataActions";

jest.mock("axios");

describe("dataActions", () => {
  it("should fetch data successfully", async () => {
    const responseData = [{ id: 1, name: "John Doe" }];
    axios.get.mockResolvedValue({ data: responseData });

    const dispatch = jest.fn();

    await fetchData()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "FETCH_DATA_SUCCESS",
      payload: responseData,
    });
  });

  it("should delete data successfully", async () => {
    const id = 1;
    axios.delete.mockResolvedValue();

    const dispatch = jest.fn();

    await deleteData(id)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: "DELETE_DATA",
      payload: id,
    });
  });
});
