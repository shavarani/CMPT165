setup = function() {
  paper = Raphael('container', 600, 300)
  elli = paper.ellipse(150, 60, 120, 30)
  elli.attr({
    'fill': '#0f0',
    'stroke': '#999',
    'stroke-width': '12'
  })
  caption = paper.text(300, 150, 'I think this is going well.')
  caption.attr({
    'font-size': '42',
    'font-family': 'serif'
  })
  rect = paper.rect(450, 150, 120, 90)
  rect.attr({
    'transform': 'r30',
    'stroke': '#070',
    'stroke-width': '3'
  })
}
jQuery(document).ready(setup)