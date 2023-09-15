import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [themeColor, setThemeColor] = useState("light");

  function toggleTheme() {
    const newTheme = themeColor === "light" ? "dark" : "light";
    setThemeColor(newTheme);
    localStorage.setItem("theme", newTheme);

    if (
      newTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // load it from local storage

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setThemeColor(savedTheme);
    }

    if (
      savedTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <section className="h-[300px] bg-no-repeat dark:bg-hero bg-cover dark:bg-blend-hard-light dark:bg-slate-900 bg-slate-300 bg-center py-24">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-around h-full">
        {/* text */}
        <div className="px-5 md:px-0">
          <h1 className="text-5xl font-extrabold dark:text-white">
            BROTHERHOOD.
          </h1>
          <h2 className="text-1xl dark:text-white">For the man of culture</h2>
          <select
            name="theme"
            className="bg-white outline-none w-[120px] h-[40px] rounded-md p-2"
            onChange={toggleTheme}
            value={themeColor}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Hero;
