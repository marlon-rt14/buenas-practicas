import React from "react";
import { SIZE_LIST } from "../constantes/common";

const DATA = new Array(SIZE_LIST).fill(0).map((_, index) => {
  return {
    id: index,
    name: `User ${index}`,
  };
});

const Users = () => {
  console.log("Rendering Users");
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {DATA.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
