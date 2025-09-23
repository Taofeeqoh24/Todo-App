import { useState } from "react";
import AddTodoModal from "./modals/addtodo";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" m-2 flex justify-between">
        <div className="p-5">
          <h1 className="text-[2rem] text-[#192655] font-bold">
            Welcome Back Taofeeqoh!
          </h1>
          <p className="text-sm text-[#E1AA35]">
            This is the list of your tasks for today
          </p>
        </div>
        <div className="heading-buttons">
          <AddTodoModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={(newTodo: any) => console.log("New Todo:", newTodo)}
          />
          <button
            className="max-lg:w-18 bg-[#3876BF] text-sm text-[#F3F0CA] m-4 mt-[30px] p-2 rounded-lg"
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
