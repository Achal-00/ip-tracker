"use client";

import ImageContainer from "@/components/ImageContainer";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/components/Map"), { ssr: false });
import { useState, useEffect } from "react";
import useDidMountEffect from "@/components/useDidMountEffect";

const page = () => {
  const [userData, setUserData] = useState(null);
  const [IP, setIP] = useState(null);

  useEffect(() => {
    try {
      const firstRender = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await res.json();
        setUserData(data);
      };
      firstRender();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useDidMountEffect(() => {
    try {
      const nextRender = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            process.env.NEXT_PUBLIC_API_KEY
          }&${
            isIP(IP) ? `ipAddress=${IP}` : isDomain(IP) ? `domain=${IP}` : ""
          }`
        );
        const data = await res.json();
        setUserData(data);
      };
      nextRender();
    } catch (err) {
      console.log(err);
    }
  }, [IP]);

  function isIP(ipaddress) {
    var ipFormat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (ipaddress.match(ipFormat)) {
      return true;
    }
    return false;
  }

  function isDomain(str) {
    const regex = new RegExp(/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i);

    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    userData && (
      <div className="background">
        <div className="top">
          <ImageContainer />
        </div>
        <div className="map">
          <NoSSR
            latitude={userData.location.lat}
            longitude={userData.location.lng}
            userData={userData}
          />
        </div>
        <div className="foreground">
          <Header
            ip={userData.ip}
            location={userData.location.city}
            timezone={userData.location.timezone}
            isp={userData.isp}
            setIP={setIP}
          />
        </div>
      </div>
    )
  );
};

export default page;
