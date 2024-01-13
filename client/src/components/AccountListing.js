import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
const AccountListing = ({ user }) => {
  const [open, setOpen] = useState(false);

  async function deleteUser() {
    const res = await fetch("/api/user/deleteUser", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user.username }),
    });
    if (!res.ok) {
      console.log("Error in requesting deleteUser");
    }
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white flex flex-row justify-between p-4 w-full  h-16">
        <h1 className="font-productsans text-xl my-auto">
          {user.lastName + ", " + user.firstName}
        </h1>
        <div className="flex  justify-between gap-4">
          <button
            className="h-full w-12 bg-red-500 cursor-pointer text-white font-productsans text-sm hover:scale-110 rounded"
            onClick={deleteUser}
          >
            Delete
          </button>
          <div
            className="h-full aspect-square bg-gray-300 cursor-pointer flex items-center justify-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <GoTriangleUp className="w-8 h-8" />
            ) : (
              <GoTriangleDown className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-gray-200 w-full h-fit p-4">
          {user.grade !== 0 && (
            <h1 className="font-productsans">
              <span className="font-semibold">Grade: </span>
              {user.grade}
            </h1>
          )}
          {(user.isBoard || user.isAdvisor) && (
            <h1 className="font-productsans">
              <span className="font-semibold">Title: </span>
              {user.isBoard ? user.title : "Advisor"}
            </h1>
          )}
          {!user.isAdvisor && (
            <h1 className="font-productsans">
              <span className="font-semibold">Department: </span>
              {user.department}
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountListing;
