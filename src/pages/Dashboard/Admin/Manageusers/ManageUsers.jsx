import { useState } from "react";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  return (
    <div className="w-full px-4">
      <div className=" bg-[#606C5D] py-4 rounded">
        <h2 className="text-center text-2xl font-bold uppercase rounded-md text-white">
          Manage Users{" "}
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className=" font-bold  bg-[#606C5D] text-white">
            <tr>
              <th className="border-[1px] rounded-sm">#</th>
              <th className="border-[1px] rounded-sm">Photo</th>
              <th className="border-[1px] rounded-sm">Name</th>
              <th className="border-[1px] rounded-sm">Email</th>
              <th className="border-[1px] rounded-sm">Role</th>
              <th className="border-[1px] rounded-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {allUsers &&
              allUsers.map((data, index) => (
                <tr key={data._id}>
                  <th className=" font-semibold border-[1px] rounded-sm">
                    {index + 1}
                  </th>
                  <td className="border-[1px] rounded-sm">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={""} />
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    Mr x
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    email
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    user
                  </td>

                  <td className=" border-[1px] rounded-sm space-y-1">
                    <button
                      //   disabled={data?.role === "vendor" && "disabled"}
                      //   onClick={() => roleChangeHandler(data._id, "vendor")}
                      className="btn btn-ghost px-4 py-1  bg-orange-600 text-white"
                    >
                      Make vendor
                    </button>
                    <br />
                    <button
                      //   disabled={data?.role === "admin" && "disabled"}
                      //   onClick={() => roleChangeHandler(data._id, "admin")}
                      className="btn btn-ghost px-4 py-1   bg-blue-600 text-white"
                    >
                      Make Admin
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
