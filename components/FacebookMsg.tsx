"use client";

import { CustomChat, FacebookProvider } from "react-facebook";
const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1368739967110642" chatSupport>
      <CustomChat pageId="1730233083737541" minimized="true" />
    </FacebookProvider>
  );
};

export default FacebookMsg;
