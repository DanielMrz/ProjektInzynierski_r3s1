var valcursorSon = 100;

function hoverPlay(element) {
    element.setAttribute('src', 'img/playFocus.svg');
}
function unhoverPlay(element) {
    element.setAttribute('src', 'img/playNoFocus.svg');
}

function hoverPause(element) {
    element.setAttribute('src', 'img/pauseFocus.svg');
	
}
function unhoverPause(element) {
    element.setAttribute('src', 'img/pauseNoFocus.svg');
}

function pausePlay(etat){
	var audio = document.getElementById("audio");
	
	if (etat == "pause") {
		document.getElementById("audio_controllers_pauseStart").innerHTML = "<img src = 'img/playNoFocus.svg' class = 'controllers' onmouseover = 'hoverPlay(this)' onmouseout = 'unhoverPlay(this)' onclick = 'pausePlay(\"play\")'/ id = 'btn_playPause'>";
		audio.pause();
	}
	else {
		document.getElementById("audio_controllers_pauseStart").innerHTML = "<img src = 'img/pauseNoFocus.svg' class = 'controllers' onmouseover = 'hoverPause(this)' onmouseout = 'unhoverPause(this)' onclick = 'pausePlay(\"pause\")' id = 'btn_playPause' />";
		audio.play();
	}
}

function stop() {
	var audio = document.getElementById("audio");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic");
	audio.currentTime = 0;
	document.getElementById("audio_controllers_pauseStart").innerHTML = "<img src = 'img/playNoFocus.svg' class = 'controllers' onmouseover = 'hoverPlay(this)' onmouseout = 'unhoverPlay(this)' onclick = 'pausePlay(\"play\")'/ >";
	audio.pause();
	cursorMusic.value = "0";	
}

function changeMusic(title) {
	stop();
	var titleMusic = document.getElementById("titleMusic_blockTitle");
	var blockAudio = document.getElementById("audioContainerAudio");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic");
	
	blockAudio.innerHTML = "<audio id = 'audio' src = 'audio/" + title + ".mp3' /></audio>";
	pausePlay("play");
	titleMusic.innerHTML = title;
	
	var audio = document.getElementById("audio");
	
	cursorMusic.value = audio.duration;
	
	initcursor();
}

function initcursor() {
	
	var cursorSon = document.getElementById("audio_controllers_cursorSon");
	var audio = document.getElementById("audio");
	var btnSon = document.getElementById("btnSon");
	
	cursorSon.onchange = function(){
		audio.volume = cursorSon.value / 100;
		if (cursorSon.value > 50) {
			btnSon.innerHTML = "<img src = 'img/volumeUp.svg' class = 'controllers'  onclick = 'muteUnMute(\"mute\")'/>";
		}
		else if (cursorSon.value > 25) {
			btnSon.innerHTML = "<img src = 'img/volumeDown.svg' class = 'controllers'  onclick = 'muteUnMute(\"mute\")'/>";
		}
		else if (cursorSon.value > 1) {
			btnSon.innerHTML = "<img src = 'img/volumeReallyDown.svg' class = 'controllers'  onclick = 'muteUnMute(\"mute\")'/>";
		}
		else {
			btnSon.innerHTML = "<img src = 'img/volumeMute.svg' class = 'controllers'  onclick = 'muteUnMute(\"unmute\")'/>";
		}
	}
	
	initcursorMusic();
}

function initcursorMusic() {
	var audio = document.getElementById("audio");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic");
	var up = true;
	cursorMusic.onmousedown = function() { up = false; };
	cursorMusic.onmouseup = function() { up = true; };
	
	
	audio.ontimeupdate = function() {
		if (up) {
			if (audio.currentTime == audio.duration) {
				stop();
			}
			cursorMusic.value = parseInt(audio.currentTime);	
		}
	};
}

function changerPositionMusic(element) {
	var audio = document.getElementById("audio");
	var btn = document.getElementById("btn_playPause");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic");
	
		if (btn.getAttribute('src') == "img/pauseNoFocus.svg") {
			
			var valcursor = element.value;	
			audio.pause();
			audio.currentTime = parseFloat(valcursor.toString() + ".00");		
			audio.play();
		}
		else {
			var valcursor = element.value;	
			audio.pause();
			audio.currentTime = parseFloat(valcursor.toString() + ".00000");
		}
}

function muteUnMute(action) {

	var btnSon = document.getElementById("btnSon");
	var cursorSon = document.getElementById("audio_controllers_cursorSon");
	var audio = document.getElementById("audio");
	
	if (action == "mute") {
		btnSon.innerHTML = "<img src = 'img/volumeMute.svg' class = 'controllers'  onclick = 'muteUnMute(\"unmute\")'/>";
		valcursorSon = cursorSon.value;
		cursorSon.value = "0";		
		audio.volume = 0;
	}
	else {
		
		cursorSon.value = valcursorSon.toString();
		audio.volume = cursorSon.value / 100;
		
		if (cursorSon.value > 50) {
			btnSon.innerHTML = "<img src = 'img/volumeUp.svg' class = 'controllers'  onclick = 'muteUnMute(\"mute\")'/>";
		}
		else if (cursorSon.value > 25) {
			btnSon.innerHTML = "<img src = 'img/volumeDown.svg' class = 'controllers'  onclick = 'muteUnMute(\"mute\")'/>";
		}
		else if (cursorSon.value > 1) {
			btnSon.innerHTML = "<img src = 'img/volumeReallyDown.svg' class = 'controllers'  onclick = 'muteUnMute(\"mute\")'/>";
		}else {
			btnSon.innerHTML = "<img src = 'img/volumeMute.svg' class = 'controllers'  onclick = 'muteUnMute(\"unmute\")'/>";
		}
	}
}