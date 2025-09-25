import { useState } from "react";
import AddTodoModal from "./modals/addtodo";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" m-2 flex justify-between items-center text-white">
        <div className="p-10">
          <h1 className="text-[2rem] text-white font-bold">
            Welcome Back Taofeeqoh!
          </h1>
            <p className="text-sm text-white">
            You can add a new task or view your tasks below.
            </p>
        </div>
        <div className="heading-buttons">
          <AddTodoModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
          <button
            className="max-lg:w-18 font-bold bg-white text-sm text-purple-800 mr-8 items-center p-2 rounded-md px-6 py-2"
            onClick={() => setShowModal(true)}
          >
            Add todos
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
