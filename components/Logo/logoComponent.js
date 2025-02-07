import React from "react";
import { useRouter } from "next/router";

const LogoComponent = () => {
    const router = useRouter();

    return (
        <img
            src="/images/logo.svg"
            alt="logoComponent"
            className="h-8 w-8 cursor-none hover:scale-110 transition-transform duration-200"
            onClick={() => router.push("/")}
        />
    );
};

export default LogoComponent;
