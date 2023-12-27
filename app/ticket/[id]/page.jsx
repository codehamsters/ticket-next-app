import TicketForm from "../../Componenets/TicketForm/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(
    `https://ticket-next-app.vercel.app/api/myTickets/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

const ticketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default ticketPage;
