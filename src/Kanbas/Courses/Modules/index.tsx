import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState } from "react";


export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    setModules([ ...modules, { _id: new Date().getTime().toString(),
                                     name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  // set the module's editing flag to true so that we can display the input field to edit name update any field(s) of a module
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };



  // filter modules by course ID
  const filteredModules = modules.filter((module: any) => module.course === cid);
  

  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule}/>
      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {filteredModules.map((module: any) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

            <div className="wd-title p-3 ps-2 bg-secondary">

              <BsGripVertical className="me-2 fs-3" /> 

              {/* show name if not editing show input field if editing when typing edit the module's name
              if "Enter" key is pressed then set editing field to false so we hide the text field */}
              {!module.editing && module.name}
              { module.editing && (
                <input className="form-control w-50 d-inline-block"
                      onChange={(e) => updateModule({ ...module, name: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          updateModule({ ...module, editing: false });
                        }
                      }}
                      defaultValue={module.name}/>
              )}


              {/* Implement the ModuleControlButtons component with the moduleId and deleteModule props */}
              <ModuleControlButtons 
                moduleId={module._id}  
                deleteModule={deleteModule}

                // pass editModule function to so if pencil is clicked we can set editing to true
                editModule={editModule}/>

            </div>

            {module.lessons && module.lessons.length > 0 && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
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
