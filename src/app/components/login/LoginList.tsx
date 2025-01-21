import { RootState } from "../../GlobalRedux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function NewProductList() {
  const newlog = useSelector((state: RootState) => {
    return state.login.newlogin;
  });
  console.log(newlog);
  return (
    <div>
      {newlog &&
        newlog.map((p) => {
          return (
            <h5>
              {p.username} {p.password}
            </h5>
          );
        })}
    </div>
  );
}
