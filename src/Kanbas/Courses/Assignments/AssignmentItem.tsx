// src/Kanbas/Courses/Assignments/AssignmentItem.tsx
import { BsGripVertical } from "react-icons/bs";
import SingleAssignmentButton from "./SingleAssignmentButton";
import { LuFileEdit } from "react-icons/lu";
import { FaTrash } from "react-icons/fa"; // 引入删除图标
import { useDispatch, useSelector } from "react-redux"; // 引入 useDispatch
import { deleteAssignment } from "./reducer"; // 引入删除作业的 action
import { useNavigate } from "react-router-dom"; // 引入 useNavigate 以便在删除后导航

export default function AssignmentItem({
  id, // 添加 id 属性
  title,
  modules,
  availability,
  dueDate,
  points,
  link,
}: {
  id: string; // 添加 id 属性
  title: string;
  modules: string;
  availability: string;
  dueDate: string;
  points: string;
  link: string;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser ? currentUser.role : null;

  const handleDelete = () => {
    if (window.confirm("are you sure you want to remove the assignment")) {
      dispatch(deleteAssignment(id));
    }
  };

  return (
    <li className="wd-assignment-item list-group-item p-3 d-flex align-items-center gap-3">
      {/* left side button*/}
      <div className="d-flex align-items-center gap-2">
        <BsGripVertical className="fs-5 text-muted" />
        {role === "FACULTY" && <LuFileEdit className="fs-5 text-success" />}
      </div>
      
      {/* middle content */}
      <div className="flex-grow-1">
        <a href={link} className="text-decoration-none text-dark">
        <h5 className="mb-1">{title}</h5> </a>
        <p className="text-muted mb-1">
          <span className="text-danger">{modules}</span> | <b>Not available until</b> {availability}
        </p>
        <p className="mb-0">Due {dueDate} | {points} pts</p>
      </div>
      
      {/* right side button*/}
      <div className="d-flex align-items-center">
        {role === "FACULTY" && (
            <button
              onClick={handleDelete}
              className="btn btn-link text-danger me-2"
            >
              <FaTrash />
            </button>
          )}
        <SingleAssignmentButton />
      </div>
    </li>
  );
}