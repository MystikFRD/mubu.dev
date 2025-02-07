import React, { useEffect, useState } from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  // Dynamically set cursor color based on theme
  const getCustomColor = () => {
    if (theme.theme === "dark") {
      return "#fff"; // White for dark mode
    } else if (theme.theme === "light") {
      return "#000"; // Black for light mode
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
      <>
        {mounted && (
            <CustomCursor
                targets={[".link", "button", "a"]} // Add more targets as needed
                customClass="custom-cursor"
                dimensions={30} // Cursor size
                fill={getCustomColor()} // Dynamic color
                smoothness={{
                  movement: 0.3, // Increase for smoother movement
                  scale: 0.2,
                  opacity: 0.3,
                }}
                targetOpacity={0.6} // Targeted element opacity
                targetScale={1.8} // Scale of targeted elements
            />
        )}
      </>
  );
};

export default Cursor;
