(function(){
  var boundingBox = $('.abs-bounding-box');
  var height = boundingBox.height();
  var width = boundingBox.width();
  var top = boundingBox.offset().top;
  var left = boundingBox.offset().left;
  var gap = parseInt(boundingBox.attr('gap'), 10) || 20;
  
  for(var i = 0; i <= width; i ++) {
    if(i % gap == 0 || i == width) {
      svg = makeSVG(1, height, 0, i);
      boundingBox.prepend(svg);
    }
  }

  for(var i = 0; i <= height; i++) {
    if(i % gap == 0 || i == height) {
      svg = makeSVG(width, 1, i, 0);
      boundingBox.prepend(svg);
    }
  }

  var lineUp = makeSVG(2, 10, -10, 0);
  boundingBox.prepend(lineUp);

  var lineLeft = makeSVG(10, 2, 0, -10);
  boundingBox.prepend(lineLeft);

  var letterUp = makeLetter('0', -30, -3);
  boundingBox.prepend(letterUp);

  var letterLeft = makeLetter('0', -8, -23);
  boundingBox.prepend(letterLeft);
})();

function makeLetter(letter, top, left) {
  var baseStyle = {
    height: 1,
    width: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#2C3B63',
    opacity: 0.8,
    'z-index': 1
  };

  var style = $.extend({}, baseStyle, {top: top, left: left});
  var span = $('<span>' + letter + '</span>');
  span.css(style);
  return span;
}

function makeSVG(width, height, top, left) {
  var baseStyle = {
    height: 1,
    width: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#FD6E8A',
    opacity: 0.3,
    'z-index': 1
  };

  var style = $.extend({}, baseStyle, {width: width, height: height, top: top, left: left});
  var svg = $('<svg>');
  svg.css(style);
  return svg;
}