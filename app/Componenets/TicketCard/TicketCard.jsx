"use client";
import React, { useState } from "react";
import DeleteBlock from "../DeleteBlock/DeleteBlock";
import PriorityDisplay from "../PriorityDisplay/PriorityDisplay";
import ProgressDisplay from "../ProgressDisplay/ProgressDisplay";
import StatusDisplay from "../StatusDisplay/StatusDisplay";
import "./ticketcard.css";
import dateTimeUtil from "./DateTimeUtil";
import Link from "next/link";

const TicketCard = (params) => {
  // const [createdAt] = useState(dateTimeUtil(params.createdAt));

  return (
    <div className="ticket-card" id={params._id}>
      <div className="card-top">
        <PriorityDisplay priority={params.priority} />
        <DeleteBlock id={params._id} />
      </div>
      <Link
        href={`/ticket/${params._id}`}
        style={{
          display: "contents",
        }}
      >
        <h4>{params.title}</h4>
        <hr />
        <p>{params.description}</p>
        <div style={{ flex: 1 }}></div>
        <div className="card-bottom">
          <div className="progress">
            {/* <p>{createdAt}</p> */}
            <ProgressDisplay progress={params.progress} />
          </div>
          <div className="status">
            <StatusDisplay status={params.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
