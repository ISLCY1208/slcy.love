const modeToggleButton = document.querySelector('.mode-toggle-button');
const body = document.querySelector('body');

modeToggleButton.addEventListener('click', function() {
  if (body.classList.contains('dark-mode')) {
    // 切换到白天模式
    body.classList.remove('dark-mode');
    body.style.backgroundColor = '#fff';
  } else {
    // 切换到黑夜模式
    body.classList.add('dark-mode');
    body.style.backgroundColor = '#1d1d1f';
  }
});
 // 黑夜模式



window.addEventListener('DOMContentLoaded', function() {
  var columns = document.querySelectorAll('.gallery > div');
  columns = Array.from(columns); // 将 NodeList 转换为数组

  // 打乱数组顺序
  columns.sort(function() {
    return 0.5 - Math.random();
  });

  // 重新按顺序添加到父元素中
  var gallery = document.querySelector('.gallery');
  columns.forEach(function(column) {
    gallery.appendChild(column);
  });
});

window.addEventListener('DOMContentLoaded', function() {
  var columns = document.querySelectorAll('.gallery > div');
  columns = Array.from(columns);

  // 打乱每列的图片位置
  columns.forEach(function(column) {
    var images = column.querySelectorAll('img');
    images = Array.from(images);

    images.sort(function() {
      return 0.5 - Math.random();
    });

    images.forEach(function(image) {
      column.appendChild(image);
    });
  });
});

var currentZoom = 1;

function openOverlay(imageSrc) {
  var overlay = document.querySelector('.overlay');
  var enlargedImg = document.getElementById('enlarged-img');
  enlargedImg.src = imageSrc;
  overlay.classList.add('active');
}

function closeOverlay() {
  var overlay = document.querySelector('.overlay');
  overlay.classList.remove('active');
  resetZoom();
}

function toggleZoom(event) {
  var enlargedImg = document.getElementById('enlarged-img');
  if (event.target === enlargedImg) {
    if (currentZoom === 1) {
      enlargedImg.classList.add('zoom-in');
      currentZoom = 1.2;
    } else {
      enlargedImg.classList.remove('zoom-in');
      currentZoom = 1;
    }
  }
}

function zoomImage(event) {
  var enlargedImg = document.getElementById('enlarged-img');
  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  if (delta > 0) {
    if (currentZoom < 2) {
      currentZoom += 0.1;
    }
  } else {
    if (currentZoom > 0.5) {
      currentZoom -= 0.1;
    }
  }
  enlargedImg.style.transform = "scale(" + currentZoom + ")";
}

function resetZoom() {
  var enlargedImg = document.getElementById('enlarged-img');
  if (enlargedImg.classList.contains('zoom-in')) {
    enlargedImg.classList.remove('zoom-in');
  }
  currentZoom = 1;
  enlargedImg.style.transform = "scale(" + currentZoom + ")";
}

