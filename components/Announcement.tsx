import React from "react";
import Image from "next/image";

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
        <div style={{ maxWidth: 100, minWidth: 100 }}>
          <Image
            src={`/img/updates/${image}`}
            height={400}
            width={400}
            alt=""
            className="update-image"
          />
        </div>
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
