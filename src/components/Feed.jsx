import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
    const { loading, searchResults } = useContext(Context);

    useEffect(() => {
        // Adjusting classList manipulation
        const rootElement = document.getElementById("root");
        if (rootElement) {
            rootElement.classList.remove("custom-h");
        }
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResults &&
                        searchResults.map((item) => {
                            if (item?.type !== "video") return null; // Returning null instead of false
                            return (
                                <>
                                <VideoCard
                                key={item?.video?.videoId}
                                video={item?.video}
                            />
                           
                                </>
                               
                            );
                        })}
                    {loading && <p>Loading...</p>}
                    {!loading && searchResults && searchResults.length === 0 && (
                        <p>No videos found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Feed;
