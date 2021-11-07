function getThumbNail(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);

  const videoId = match && match[2].length === 11 ? match[2] : null;
  const embedVideo = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return embedVideo;
}

export default getThumbNail;
