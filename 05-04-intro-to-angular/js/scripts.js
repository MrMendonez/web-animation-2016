$(document).ready(function() {

  var userName = '';

  $('#username').on('keypress', function() {
    console.log('on function fired')
    userName = $('#username').val();
    console.log('The username is ' + userName);
    $('#username-displayed').text(userName);
  })

}); // End document.ready function