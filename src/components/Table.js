import React, { useState, Fragment, useRef } from "react";
import TableItem from "./TableItem";

export default function Table(props) {
  const [actors, setRes] = useState(props.actors);
  const actorRef = useRef(null);
  const deleteUser = id => {
    let rezArr = actors.filter((el, i) => {
      return i !== id;
    });
    setRes(rezArr);
  };
  const AddActor = () => {
    //current is pointing to input element when component is mounts to dom
    let actor = actorRef.current.value;
    let rezActors = actors.concat({ name: actor });
    setRes(rezActors);
    actorRef.current.value = "";
  };

  return (
    <Fragment>
      <div className="addActor">
        <input ref={actorRef} />
        <button className="actor" onClick={AddActor}>
          Add actor
        </button>
      </div>
      <table>
        <thead />
        <tbody>
          {!actors.length ? (
            <tr>
              <td style={{ color: "red" }} colSpan={3}>
                No actors
              </td>
            </tr>
          ) : (
            actors.map((user, i) => (
              <TableItem
                key={i}
                id={i}
                user={user.name}
                deleteUser={deleteUser}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
