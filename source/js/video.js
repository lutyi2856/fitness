const videoWrapper = document.querySelector('.information__wrapper-video');

if (videoWrapper) {
  const videoLink = videoWrapper.querySelector('.information__video-link');
  const playButton = videoWrapper.querySelector('.information__play-button');
  const preview = videoWrapper.querySelector('.information__wrapper-image-preview');
  videoLink.removeAttribute('href');
  videoWrapper.classList.add('information__wrapper-video--enabled');

  videoWrapper.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.classList.add('information__video');
    iframe.width = 364;
    iframe.height = 228;
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw/?rel=0&showinfo=0&autoplay=1';
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = '';
    iframe.setAttribute('autoplay', '');
    iframe.setAttribute('muted', '');
    playButton.remove();
    videoLink.remove();
    preview.appendChild(iframe);
  });
}
