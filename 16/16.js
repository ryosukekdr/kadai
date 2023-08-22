$('#msg').text('メッセージ');

$(function () {
    $('#btn').on('click', function() {
        $('#msg').toggleClass('blue');  
    });
  });