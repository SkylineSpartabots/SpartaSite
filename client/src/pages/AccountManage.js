import HeaderBlock from "../components/HeaderBlock";
import AccountListing from "../components/AccountListing";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AccountManage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function getAccounts() {
      const res = await fetch("/api/user/getUsers");
      const users = await res.json();
      setAccounts(users);
    }
    getAccounts();
    console.log(accounts);
}, [accounts]);

  return (
    <div className="pt-[135px] bg-gray-100 flex flex-col items-center gap-4 min-h-screen ">
      <HeaderBlock text="Active Accounts" />
      <div className="flex flex-col gap-4 w-full max-w-[1000px]">
        <Link
          to="/addAccount"
          className="bg-blue-400 w-full h-16 cursor-pointer rounded-[3px] font-productsans font-semibold text-xl text-white flex items-center"
        >
          <h1 className="w-fit h-fit m-auto">Create New</h1>
        </Link>
        {accounts &&
          accounts.map((account, index) => (
            <AccountListing key={index} user={account} />
          ))}
      </div>
    </div>
  );
};

export default AccountManage;
