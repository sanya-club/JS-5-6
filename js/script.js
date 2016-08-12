var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
start.addEventListener('click', timer);
reset.addEventListener('click', resetTimer);
pause.addEventListener('click', pauseTimer);

function resetTimer() {
  start.style.display = 'inline';
  pause.style.display = 'none';
  clearInterval(time);
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  document.getElementById('timer').value = "00:00:00:00";

}

function pauseTimer() {
  start.style.display = 'inline';
  pause.style.display = 'none';
  clearInterval(time);

}

function timer() {
  pause.style.display = 'inline';
  start.style.display = 'none';
  time = setInterval(function timer() {
    msec++;

    document.getElementById('timer').value = '0' + hour + ':' + '0' + min + ':' + '0' + sec + ':' + '0' + msec;
    if (msec > 9) {
      document.getElementById('timer').value = '0' + hour + ':' + '0' + min + ':' + '0' + sec + ':' + msec;
    }
    if (sec > 9) {
      document.getElementById('timer').value = '0' + hour + ':' + '0' + min + ':' + sec + ':' + msec;
    }

    if (min > 9) {
      document.getElementById('timer').value = '0' + hour + ':' + min + ':' + '0' + sec + ':' + msec;
    }

    if (hour > 9) {
      document.getElementById('timer').value = hour + ':' + '0' + min + ':' + '0' + sec + ':' + msec;
    }

    if (msec > 99) {
      msec = 0;
      sec = sec + 1;
    }

    if (sec > 59) {

      sec = 0;
      min = min + 1;
    }
    if (min > 59) {
      min = 0;
      hour = hour + 1;
    }

  }, 10);

}