import HeaderBlock from "../components/HeaderBlock";
import { useState } from "react";
const AddAccount = () => {
  const [username, setUsername] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [grade, setGrade] = useState();
  const [department, setDepartment] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-gray-100  min-h-screen flex items-center">
      <form
        className="flex flex-col items-center justify-center w-[500px] mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="font-scoutcond uppercase text-7xl font-black">
          Create New Account
        </h1>
        <div className="py-4 w-full">
          <label className="text-lg font-productsans ">Username</label>
          <input
            className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="py-4 w-full flex flex-row gap-4">
          <div>
            <label className="text-lg font-productsans ">First Name</label>
            <input
              className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setFirst(e.target.value)}
              value={first}
            />
          </div>
          <div>
            <label className="text-lg font-productsans ">Last Name</label>
            <input
              className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setLast(e.target.value)}
              value={last}
            />
          </div>
        </div>
        <div className="py-4 w-full flex flex-row gap-4 ">
          <div>
            <label className="text-lg font-productsans ">Grade</label>
            <input
              className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
              type="number"
              onChange={(e) => setGrade(e.target.value)}
              value={grade}
            />
          </div>
          <div>
            <label className="text-lg font-productsans ">Department</label>
            <input
              className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
