import React, {Component} from 'react';
import '../App.css';
import webtorrent from 'webtorrent';

const client = new webtorrent();
const torrentId = 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d&dn=sintel.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel-1024-surround.mp4'

const startDownload = () => {
  client.add(torrentId, function(torrent) {
    // Torrents can contain many files. Let's use the first.
    var file = torrent.files[0];
    console.log(file);

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('body');
  })
}

// const stopDownload = ()=>{
//   client.remove(torrentId, ()=>{console.log("removed");});
//   document.getElementById('body').detach();
// }

const TorrentDownload = () => {
  return (
    <div>
      <label>STREAMING A WebRTC Torrent :
      </label>
      <button onClick={startDownload}>
        START STREAM
      </button>
      {/* <button onClick={stopDownload}>
        STOP STREAM
      </button> */}
    </div>
  );
}

export default TorrentDownload;
