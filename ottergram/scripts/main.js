var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetail(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title')
}

function setDetailFromThumb(thumbnail) {
  'use strict';
  setDetail(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumbnail) {
  'use strict';
  thumbnail.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailFromThumb(thumbnail);
    showDetails();
  })
}

function showDetails() {
  'user strict';
  var bodyClassList = document.querySelector('body').classList;
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  if (bodyClassList.contains(HIDDEN_DETAIL_CLASS)) {
    bodyClassList.remove(HIDDEN_DETAIL_CLASS);
  }
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);

}

function hideDetails() {
  document.querySelector('body').classList.add(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  'user strict';
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode == ESC_KEY) {
      hideDetails();
    }
  });
}
function initializeEvents() {
  'use strict';
  var thumbList = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  for (let i = 0; i < thumbList.length; i += 1) {
    addThumbClickHandler(thumbList[i]);
  }
  addKeyPressHandler();
}

initializeEvents();
