import { useState } from "react";
const AccountListing = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="bg-white flex flex-row justify-between p-4 w-full  h-16">
        <h1 className="font-productsans text-xl my-auto">
          {user.lastName + ", " + user.firstName}
        </h1>
        <div
          className="h-full aspect-square bg-gray-300 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        ></div>
      </div>
      {open && (
        <div className="bg-gray-200 w-full h-fit p-4">
          {user.grade != 0 && (
            <h1 className="font-productsans">
              <span className="font-semibold">Grade: </span>
              {user.grade}
            </h1>
          )}
          <h1 className="font-productsans">
            <span className="font-semibold">Title: </span>
            {user.isBoard && user.title
              ? user.title
              : user.isBoard
              ? "Board title not specified"
              : user.isAdvisor
              ? "Advisor"
              : user.department + " Member"}
          </h1>
        </div>
      )}
    </div>
  );
};

export default AccountListing;
