//src/Kanbas/Courses/Modules/index.tsx
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import "../../styles.css";
import React, { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  // filter modules by course ID
  // const filteredModules = modules.filter((module: any) => module.course === cid);
  
  return (
    <div className="wd-modules container-fluid">
      
      {currentUser && currentUser.role === "FACULTY" && (
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse} />
      )}

      <ul id="wd-modules"  className="list-group rounded-0">
        {/* {filteredModules.map((module: any) => ( */}
        {modules.map((module: any) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

            <div className="wd-title p-3 ps-2 bg-secondary">

              <BsGripVertical className="me-2 fs-3" /> 
              {/* show name if not editing show input field if editing when typing edit the module's name
              if "Enter" key is pressed then set editing field to false so we hide the text field */}
              {!module.editing && module.name}

              { module.editing  && currentUser && currentUser.role === "FACULTY" && (
                <input className="form-control w-50 d-inline-block"

                      onChange={(e) =>
                        dispatch(updateModule({ ...module, name: e.target.value })
                        )
                      }

                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          // dispatch(updateModule({ ...module, editing: false }));
                          saveModule({ ...module, editing: false });
                        }
                      }}
                      
                      defaultValue={module.name}/>
              )}

              {currentUser && currentUser.role === "FACULTY" && (
              
              <ModuleControlButtons 
                moduleId={module._id}  

                // deleteModule={(moduleId) => {
                //   dispatch(deleteModule(moduleId));
                //   }
                // }
                deleteModule={(moduleId) => removeModule(moduleId)}

                // pass editModule function to so if pencil is clicked we can set editing to true
                editModule={(moduleId) => dispatch(editModule(moduleId))} 
              />
              
              )}
            </div>

            {module.lessons && module.lessons.length > 0 && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> 
                    {lesson.name}  
                    {currentUser && currentUser.role === "FACULTY" && <LessonControlButtons />}
                  </li>
                ))}
              </ul>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}