import React from "react";

export const Announcement = (props: AnnouncementProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {props.image && (
        <div style={{ maxWidth: 100, minWidth: 100 }}>
          <img
            src={`/img/updates/${props.image}`}
            alt=""
            className="update-image"
          />
        </div>
      )}

      <p className="px-4 pb-3">
        <strong>{props.title}</strong>
        <span className="update-date">{props.date}</span>
        <br />
        {props.children}
      </p>
    </div>
  );
};

interface AnnouncementProps {
  title: string;
  date: string;
  image?: string;
  featured?: boolean;
  children: any;
}
