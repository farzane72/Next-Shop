"use client";
import UsersPage from "../../components/template/UsersPage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUsers } from "@/redux/features/panel/panelSlice";


function Users() {
  const { currentPage } = useAppSelector((store) => store.panel);

  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsers((currentPage - 1) * 10));
  // }, [currentPage]);
  return (
    <>
     
        <UsersPage />
     
    </>
  );
}

export default Users;
