import React from "react";
import TicketCard from "./Componenets/TicketCard/TicketCard";
import "./page.css";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/myTickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to fetch tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <>
      {tickets &&
        uniqueCategories?.map((uniqueCategorie, categoryIndex) => (
          <div className="category" key={categoryIndex} style={{}}>
            <h2>{uniqueCategorie}</h2>
            <div className="dashboard">
              {tickets
                .filter((ticket) => ticket.category == uniqueCategorie)
                .map((fileterdTicket, _index) => {
                  return <TicketCard key={_index} {...fileterdTicket} />;
                })}
            </div>
          </div>
        ))}
    </>
  );
};

export default Dashboard;
