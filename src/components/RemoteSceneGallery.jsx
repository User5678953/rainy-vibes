// src/components/RemoteSceneGallery.jsx
import { useState, useRef } from "react";
import "../index.css";

const playlistIds = [
  "37i9dQZF1DWWQRwui0ExPn",
  "37i9dQZF1DX8Uebhn9wzrS",
  "37i9dQZF1DX2PQDq3PdrHQ",
  "5ce4gBznuECuLEWGxp8eQO",
  "37i9dQZF1DXc8kgYqQLMfH",
  "37i9dQZF1DWYoYGBbGKurt",
  "0vvXsWCC9xrXsKd4FyS8kM",
  "37i9dQZF1DXbITWG1ZJKYt",
];

const remoteScenes = [
  {
    image:
      "https://uinona.net/wp-content/uploads/gif_729/animated_0000031174.webp",
  },
  { image: "https://media1.tenor.com/m/J7uxrx5tI4wAAAAd/chicken-cute.gif" },
  {
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW93YTJpY2w2cHh4bnJ2aHp2bGg4OGVtMHJ6MjA5N2F5YzhxM3pnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjH6Fuif3r2056Q38Q/giphy.gif",
  },
  {
    image:
      "https://media1.tenor.com/m/mICtSAVY7Y4AAAAC/autism-creature-yippee-creature.gif",
  },
  {
    image:
      "https://media1.tenor.com/m/_qhMXgjN0B8AAAAd/autism-creature-tbh-creature.gif",
  },
  {
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXE1emgwdnR6eHhmaHk4YzBic3B6ejhjYmpkZGdyeG16cXFraDRhNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jaBnN9CJxIALDmjvQ8/giphy.gif",
  },
  {
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb29kdDVwamxsOHAxYnF2Y2YzcHdtbHNua2l1MHhrdjAzNHFtZHliNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SVlKRhAgd5bBLemzfX/giphy.gif",
  },
  {
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2g2cGQ5OWNoZmc3NGRxanl1bmNvNzJmOXNjdzlnNGxuZmZ1aWVsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vMbC8xqhIf9ny/giphy.gif",
  },
  {
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZlcWI1ZGwzeHVnMmIwZjhjcGthZ21lZmFla2ZxbTdjYWUyaTE2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QIffFsILJEtR6/giphy.gif",
  },
  {
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczNnZ2d2MTlzMDJvOW0yOWxodmxscTlrNDlyNXU5MW1mMjYwNTVtNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DuG8cjSqv3chq/giphy.gif",
  },
  {
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExam5zajZ6dThhd3MwZ3F6dWlxbzgwZXlnbzJ1MDU2dzZrZDN5NmhnaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ONuQzM11fjvoY/giphy.gif",
  },
  {
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXhuY3pudDhyNHU0YWQ2bnM4NzFpMnNmeTl4cjBwaHl6MHl3bW45YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/teNIxdOwyPC3C/giphy.gif",
  },
  {
    image:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTVyNXc0Y3E4ZWx2M2hsazRkcDBhZ2M3dHZmZ3UyMzV1djltbDljaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URExNvlgfjZ2rd5Gl0/giphy.gif",
  },
  {
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWM3NzdnN3lqc2p3Ynhwdzdpd3Z6a3I1N2YxYzV6c25zdGFqcXJ4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vd0yvC5g4G15rT62hL/giphy.gif",
  },
];

export default function RemoteSceneGallery() {
  const [hoverIdx, setHoverIdx] = useState(null); // footer under cursor
  const [activeIdx, setActiveIdx] = useState(null); // playing card
  const players = useRef({});

  const pause = (idx) => {
    const frame = players.current[idx];
    frame?.contentWindow?.postMessage(
      { method: "pause" },
      "https://open.spotify.com"
    );
  };

  return (
    <div className="gallery">
      {remoteScenes.map(({ image }, idx) => {
        const playlistId = playlistIds[idx % playlistIds.length];

        return (
          <div key={idx} className="card">
            {/* GIF */}
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="gif-box"
            >
              <img src={image} alt={`scene-${idx}`} className="gif" />
            </a>

            {/* Listen footer */}
            <div
              className="listen-bar"
              onMouseEnter={() => {
                if (activeIdx !== idx) pause(activeIdx);
                setHoverIdx(idx);
                setActiveIdx(idx);
              }}
              onMouseLeave={() => setHoverIdx(null)}
            >
              {hoverIdx === idx || activeIdx === idx ? (
                <iframe
                  ref={(el) => (players.current[idx] = el)}
                  title={`spotify-${idx}`}
                  src={`https://open.spotify.com/embed/playlist/${playlistId}`}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{
                    height: hoverIdx === idx ? 80 : 0,
                    transition: "height .25s",
                    width: "100%",
                    border: "none",
                  }}
                />
              ) : (
                <span>Listen →</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
