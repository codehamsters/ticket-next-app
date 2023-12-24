// import "../../globals.css";
import "./deleteblock.css";
import { useRouter } from "next/navigation";

import React from "react";

const DeleteBlock = (params) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(
      `https://ticket-next-app.vercel.app/api/myTickets/${params.id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <button className="delete-button" onClick={handleDelete}>
      <i className="fa-solid fa-x"></i>
    </button>
  );
};

export default DeleteBlock;
