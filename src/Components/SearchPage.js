import React from "react";
import "./SearchPage.css";
import { data } from "./Header";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function Searchpage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image={``}
        channel={``}
        verified
        subs={``}
        noOfVideoes={``}
        description={``}
      />

      <hr />
      {console.log(data)}
      {data.map((e) => (
        <VideoRow
          key={e.id.videoId}
          views={``}
          subs={``}
          description={e.snippet.description}
          timestamp={``}
          channel={e.snippet.channelTitle}
          title={e.snippet.title}
          image={e.snippet.thumbnails.default.url}
        />
      ))}
    </div>
  );
}

export default Searchpage;
