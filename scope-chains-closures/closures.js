function foo () {
  var bar;
  quux = 'outter';

  function zip () {
    var quux = 'inner';
    bar = true;
  }

  return zip;
}
