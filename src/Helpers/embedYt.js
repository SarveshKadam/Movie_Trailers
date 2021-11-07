function getVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);

  const videoId = match && match[2].length === 11 ? match[2] : null;

  const embedVideo = "https://www.youtube.com/embed/" + videoId;
  return embedVideo;
}

export default getVideoId;
