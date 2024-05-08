import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
const AddAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [grade, setGrade] = useState();
  const [department, setDepartment] = useState("");
  const [isBoard, setIsBoard] = useState(false);
  const [isAdvisor, setIsAdvisor] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const { auth, isLoading } = useAuth("signup");

  async function handleSubmit(e) {
    e.preventDefault();
    await auth({
      username,
      password,
      firstName: first,
      lastName: last,
      grade,
      department,
      isBoard,
      isAdvisor,
      title: boardTitle,
    });
  }

  return (
    <div className="bg-gray-100  min-h-screen flex items-center">
      <form
        className="flex flex-col items-center justify-center w-[500px] mx-auto gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="font-scoutcond uppercase text-7xl font-black">
          Create New Account
        </h1>
        <div className=" w-full">
          <label className="text-lg font-productsans ">Username</label>
          <input
            className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className=" w-full">
          <label className="text-lg font-productsans ">Password</label>
          <input
            className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="w-full flex flex-row gap-4 ">
          <div className="w-full flex flex-col">
            <label className="text-lg font-productsans ">First Name</label>
            <input
              className="px-2 bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setFirst(e.target.value)}
              value={first}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-lg font-productsans ">Last Name</label>
            <input
              className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setLast(e.target.value)}
              value={last}
            />
          </div>
        </div>
        <div className=" w-full flex flex-row gap-4 ">
          <div className="w-full flex flex-col">
            <label className="text-lg font-productsans ">Grade</label>
            <input
              className="px-2  bg-slate-300 rounded h-8 text-black font-productsans"
              type="number"
              onChange={(e) => setGrade(e.target.value)}
              value={grade}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-lg font-productsans ">Department</label>
            <input
              className="px-2  bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
            />
          </div>
        </div>
        <div className=" w-full flex flex-row gap-4 ">
          <div className="flex flex-row gap-2 w-full">
            <label className="text-lg font-productsans ">Board</label>
            <input
              className="bg-slate-300 h-8 text-black font-productsans"
              type="checkbox"
              onChange={(e) => {
                let prev = isBoard;
                setIsBoard((prev) => !prev);
                if (!prev) {
                  setIsAdvisor(false);
                }
              }}
              checked={isBoard}
            />
          </div>
          <div className="flex flex-row gap-2 w-full">
            <label className="text-lg font-productsans ">Advisor</label>
            <input
              className="px-2  bg-slate-300 rounded h-8 text-black font-productsans"
              type="checkbox"
              onChange={(e) => {
                let prev = isAdvisor;
                setIsAdvisor((prev) => !prev);
                if (!prev) {
                  setIsBoard(false);
                  setBoardTitle("");
                }
              }}
              checked={isAdvisor}
            />
          </div>
        </div>
        {isBoard && (
          <div className="flex flex-col w-full">
            <label className="text-lg font-productsans ">Board Position</label>
            <input
              className="px-2 bg-slate-300 rounded h-8 text-black font-productsans"
              type="text"
              onChange={(e) => setBoardTitle(e.target.value)}
              value={boardTitle}
            />
          </div>
        )}
        <Button text="Submit" color="bg-blue-400" disabled={isLoading} />
      </form>
    </div>
  );
};

export default AddAccount;
