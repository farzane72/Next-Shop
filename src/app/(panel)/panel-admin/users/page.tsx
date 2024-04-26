"use client";
import UsersPage from "../../components/template/UsersPage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUsers } from "@/redux/features/panel/panelSlice";
import { LineWave } from "react-loader-spinner";

function Users() {
  const { currentPage, loading } = useAppSelector((store) => store.panel);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers((currentPage - 1) * 10));
  }, [currentPage]);
  return (
    <>
      {loading ? (
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#1d3855"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      ) : (
        <UsersPage />
      )}
    </>
  );
}

export default Users;
