// src/components/RemoteSceneGallery.jsx
// Renders every remote GIF + a random chill lofi Spotify playlist.

const playlistIds = [
  "37i9dQZF1DWWQRwui0ExPn", // lofi beats
  "37i9dQZF1DX8Uebhn9wzrS", // chill lofi study beats
  "37i9dQZF1DX2PQDq3PdrHQ", // lofi sleep
  "5ce4gBznuECuLEWGxp8eQO", // lofi café
  "37i9dQZF1DXc8kgYqQLMfH", // lush lofi
  "37i9dQZF1DWYoYGBbGKurt", // lofi chill
  "0vvXsWCC9xrXsKd4FyS8kM", // beats to relax/study to
  "37i9dQZF1DXbITWG1ZJKYt", // lofi chill & jazzy
];


const remoteScenes = [
  {
    image:
      "https://uinona.net/wp-content/uploads/gif_729/animated_0000031174.webp",
  },
  {
    image: "https://media1.tenor.com/m/J7uxrx5tI4wAAAAd/chicken-cute.gif",
  },
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
];

const getRandomQuery = (url) => {
  const sep = url.includes("?") ? "&" : "?";
  const random = Math.random().toString(36).substring(2, 10);
  return `${sep}chill=lofi&r=${random}`;
};

const getRandomPlaylistId = () =>
  playlistIds[Math.floor(Math.random() * playlistIds.length)];

const RemoteSceneGallery = () => (
  <div className="gallery">
    {remoteScenes.map(({ image }, idx) => {
      const playlistId = getRandomPlaylistId();
      const spotify = `https://open.spotify.com/embed/playlist/${playlistId}`;
      return (
        <div key={idx} className="card">
          <img src={image} alt={`scene-${idx}`} />

          <iframe
            title={`spotify-${idx}`}
            src={spotify + getRandomQuery(spotify)}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      );
    })}
  </div>
);

export default RemoteSceneGallery;
