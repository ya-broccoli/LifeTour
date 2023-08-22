const videoContainer = document.querySelector('.hero__video');
const videoLink = videoContainer.querySelector('.video__link');
const videoButton = videoContainer.querySelector('.video__button');

const initVideo = () => {
  videoButton.addEventListener('click', () => {
    videoLink.remove();
    videoButton.remove();

    const iframe = document.createElement('iframe');

    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.loading = 'lazy';
    videoContainer.appendChild(iframe);
  });

  videoButton.removeAttribute('href');
  videoContainer.classList.add('video--enabled');
};

export {initVideo};
