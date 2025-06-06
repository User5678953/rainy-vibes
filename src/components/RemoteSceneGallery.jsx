// src/components/RemoteSceneGallery.jsx
// Renders every remote GIF + a random chill lofi Spotify playlist.

import React, { useState } from "react";

const playlistIds = [
  "37i9dQZF1DX4WYpdgoIcn6", // Chill Lofi Study Beats
  "37i9dQZF1DX0SM0LYsmbMT", // lofi beats
  "37i9dQZF1DXdLEN7aqioXM", // lofi chill
  "37i9dQZF1DX6VdMW310YC7", // lofi hip hop music - beats to relax/study to
  "37i9dQZF1DX7gIoKXt0gmx", // lofi sleep
  "37i9dQZF1DX2yvmlOdMYzV", // lofi cafe
  "37i9dQZF1DWUvZBXGjNCU4", // chill lofi study
  "37i9dQZF1DXbITWG1ZJKYt", // lofi chill & jazzy
  "37i9dQZF1DX0r3x8OtiwEM", // lofi chillhop
  "37i9dQZF1DXa6YOhGMjjgx", // lofi chillhop beats
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
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <div className="gallery">
      {remoteScenes.map(({ image }, idx) => {
        const playlistId = playlistIds[idx];
        return (
          <div key={idx} className="card">
            {/* Top: Click image to open in new tab */}
            <div
              className="gif-box clickable"
              onClick={() => window.open(image, "_blank")}
              style={{ cursor: "zoom-in" }}
            >
              <img src={image} alt={`scene-${idx}`} className="gif" />
            </div>
            {/* Bottom: Show Spotify on hover, no text */}
            <div
              className="spotify-toggle clickable"
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                width: "100%",
                textAlign: "center",
                padding: "0.5rem",
                background: "#222",
                color: "#1db954",
                fontWeight: "bold",
                cursor: "pointer",
                borderTop: "1px solid #333",
                userSelect: "none",
                minHeight: "40px",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80px", // Ensures the iframe fits perfectly
                boxSizing: "border-box",
              }}
            >
              {hoverIdx === idx && playlistId ? (
                <iframe
                  title={`spotify-${idx}`}
                  src={`https://open.spotify.com/embed/playlist/${playlistId}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  style={{
                    display: "block",
                    border: "none",
                    height: "80px",
                    width: "100%",
                  }}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
