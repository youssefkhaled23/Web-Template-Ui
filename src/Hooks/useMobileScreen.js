import { useEffect, useState } from "react";

const useMobileScreen = () => {
  const [mobileStatus, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { mobileStatus };
};

export default useMobileScreen;
