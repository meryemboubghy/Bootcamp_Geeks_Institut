class Video {
  constructor(uploader, title, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}`;
  }
}
const mavideo = new Video("Meryem", "Preson Break", 300);
console.log(mavideo.watch());
const secondVideo = new Video("Boubghy", "tom and jerry", 200);
console.log(secondVideo.watch());

// BONUS :
const videos = [
  new Video("Ali", "JS Tutorial", 300),
  new Video("Sara", "CSS Basics", 200),
  new Video("Youssef", "HTML Intro", 180),
  new Video("Youssef", "HTML Intro", 180),
  new Video("Youssef", "HTML Intro", 180),
];
videos.forEach((ved) => console.log(ved.watch()));
