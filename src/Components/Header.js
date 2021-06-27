import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

let data = null;

const Header = () => {
  const [isInputSearch, setisInputSearch] = useState("");
  const [Data, setData] = useState([]);
  // const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log(isInputSearch);
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function address() {
      const a = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${isInputSearch}&key=AIzaSyDrctz_uPcHUAsVHIPmS9OwZEzReB9ySgY`,
        { signal: signal }
      );

      const b = a.json();
      return b;
    }
    address()
      .then((res) => {
        console.log(res);
        setData(res.items);
      })
      .catch((err) => console.log(err));

    return function cleanup() {
      // setIsLoading(false);
      abortController.abort();
    };
  }, [isInputSearch]);

  data = Data;

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />

        <Link
          to="/"
          onClick={() => {
            setisInputSearch("");
          }}
        >
          <img src="./Images/logo.png" alt="" className="header__logo" />
        </Link>
      </div>

      <div className="header__input">
        <input
          value={isInputSearch}
          onChange={(e) => setisInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />

        <Link
          to={`/search/${isInputSearch}`}
          // onClick={() => {
          //   setIsLoading(true);
          // }}
        >
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallSharpIcon className="header__rightIcon" />
        <AppsIcon className="header__rightIcon" />
        <NotificationsIcon className="header__rightIcon" />
        <Avatar
          src="https://avatars.githubusercontent.com/u/59798109?s=400&u=cc4be5ab33f09a6749d0121118b8c6ed4f217dad&v=4"
          alt=""
        />
      </div>
    </div>
  );
};

export { Header, data };
