import React, { useState, useEffect } from "react";
import "./RecommendedVids.css";
import VideoCard from "./VideoCard";

function RecommendedVids() {
  const [frData, setfrData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function address() {
      const a = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyDrctz_uPcHUAsVHIPmS9OwZEzReB9ySgY`,
        { signal: signal }
      );

      const b = a.json();
      return b;
    }
    address()
      .then((res) => {
        console.log(res);
        setfrData(res.items);
      })
      .catch((err) => console.log(err));

    return function cleanup() {
      // setIsLoading(false);
      abortController.abort();
    };
  }, []);

  return (
    <div className="recommendedVids">
      <h2>Recommended</h2>
      <div className="recommendedVids__videos">
        {frData.map((e) => (
          <VideoCard
            key={e.id.videoId}
            views={``}
            channelImage={``}
            timestamp={``}
            channel={e.snippet.channelTitle}
            title={e.snippet.title}
            image={e.snippet.thumbnails.default.url}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVids;
