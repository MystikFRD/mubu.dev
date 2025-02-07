import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import LogoComponent from "../Logo/logoComponent"; // Correct import
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const { name, showBlog, showResume } = data;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <Popover className="block tablet:hidden mt-5">
                {({ open }) => (
                    <>
                        <div className="flex items-center justify-between p-2 laptop:p-0">
                            <div className="flex items-center gap-2">
                                {/* Use LogoComponent */}
                                <LogoComponent />
                                <h1
                                    onClick={() => router.push("/")}
                                    className="font-medium p-2 laptop:p-0 link "
                                >
                                    {name}.
                                </h1>
                            </div>
                            <Button onClick={handleAboutScroll}>About</Button>
                            <div className="flex items-center">
                                {data.darkMode && (
                                    <Button
                                        onClick={() =>
                                            setTheme(theme === "dark" ? "light" : "dark")
                                        }
                                    >
                                        <img
                                            className="h-6"
                                            src={`/images/${
                                                theme === "dark" ? "moon.svg" : "sun.svg"
                                            }`}
                                            alt="Theme Icon"
                                        />
                                    </Button>
                                )}

                                <Popover.Button>
                                    <img
                                        className="h-5"
                                        src={`/images/${
                                            !open
                                                ? theme === "dark"
                                                    ? "menu-white.svg"
                                                    : "menu.svg"
                                                : theme === "light"
                                                    ? "cancel.svg"
                                                    : "cancel-white.svg"
                                        }`}
                                        alt="Menu Icon"
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                        <Popover.Panel
                            className={`absolute right-0 z-10 w-11/12 p-4 ${
                                theme === "dark" ? "bg-slate-800" : "bg-white"
                            } shadow-md rounded-md`}
                        >
                            {!isBlog ? (
                                <div className="grid grid-cols-1">
                                    <Button onClick={handleWorkScroll}>Work</Button>
                                    <Button onClick={handleAboutScroll}>About</Button>
                                    {showBlog && (
                                        <Button onClick={() => router.push("/blog")}>Blog</Button>
                                    )}
                                    {showResume && (
                                        <Button
                                            onClick={() => router.push("/resume")}
                                            className="first:ml-1"
                                        >
                                            Resume
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() => window.open("mailto:work@mubu.dev")}
                                    >
                                        Contact
                                    </Button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1">
                                    <Button onClick={() => router.push("/")}>
                                        Home
                                    </Button>
                                    {showBlog && (
                                        <Button onClick={() => router.push("/blog")}>Blog</Button>
                                    )}
                                    {showResume && (
                                        <Button
                                            onClick={() => router.push("/resume")}
                                            className="first:ml-1"
                                        >
                                            Resume
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() => window.open("mailto:work@mubu.dev")}
                                    >
                                        Contact
                                    </Button>
                                </div>
                            )}
                        </Popover.Panel>
                    </>
                )}
            </Popover>
            <div
                className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 ${
                    theme === "light" ? "bg-white" : ""
                } dark:text-white tablet:flex`}
            >
                <div className="flex items-center gap-2">
                    {/* Use LogoComponent */}
                    <LogoComponent />
                    <h1
                        onClick={() => router.push("/")}
                        className="font-medium cursor-none mob:p-2 laptop:p-0 "
                    >
                        {name}.
                    </h1>
                </div>
                {!isBlog ? (
                    <div className="flex">
                        <Button onClick={handleWorkScroll}>Work</Button>
                        <Button onClick={handleAboutScroll}>About</Button>
                        {showBlog && (
                            <Button onClick={() => router.push("/blog")}>Blog</Button>
                        )}
                        {showResume && (
                            <Button
                                onClick={() => router.push("/resume")}
                                className="first:ml-1"
                            >
                                Resume
                            </Button>
                        )}
                        <Button onClick={() => window.open("mailto:work@mubu.dev")}>
                            Contact
                        </Button>
                        {mounted && theme && data.darkMode && (
                            <Button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <img
                                    className="h-6"
                                    src={`/images/${
                                        theme === "dark" ? "moon.svg" : "sun.svg"
                                    }`}
                                    alt="Theme Icon"
                                />
                            </Button>
                        )}
                    </div>
                ) : (
                    <div className="flex">
                        <Button onClick={() => router.push("/")}>Home</Button>
                        {showBlog && (
                            <Button onClick={() => router.push("/blog")}>Blog</Button>
                        )}
                        {showResume && (
                            <Button
                                onClick={() => router.push("/resume")}
                                className="first:ml-1"
                            >
                                Resume
                            </Button>
                        )}
                        <Button onClick={() => window.open("mailto:work@mubu.dev")}>
                            Contact
                        </Button>
                        {mounted && theme && data.darkMode && (
                            <Button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <img
                                    className="h-6"
                                    src={`/images/${
                                        theme === "dark" ? "moon.svg" : "sun.svg"
                                    }`}
                                    alt="Theme Icon"
                                />
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
