"use client";
import styles from "@/styles/globals.css";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IP Tracker</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default layout;
