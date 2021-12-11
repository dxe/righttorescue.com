import React from "react";

export const Announcement = ({
  title,
  date,
  image,
  children,
}: AnnouncementProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {image && (
        <img
          className="img-fluid mb-3 mb-lg-0 update-image"
          src={`img/updates/${image}`}
          alt=""
        />
      )}

      <p className="px-4 pb-3">
        <strong>{title}</strong>
        <span className="update-date">{date}</span>
        <br />
        {children}
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
