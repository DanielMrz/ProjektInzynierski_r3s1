var valcursorSon2 = 100;

function hoverPlay2(element2) {
    element2.setAttribute('src', 'img/playFocus.svg');
}
function unhoverPlay2(element2) {
    element2.setAttribute('src', 'img/playNoFocus.svg');
}

function hoverPause2(element2) {
    element2.setAttribute('src', 'img/pauseFocus.svg');
	
}
function unhoverPause2(element2) {
    element2.setAttribute('src', 'img/pauseNoFocus.svg');
}

function pausePlay2(etat2){
	var audio = document.getElementById("audio2");
	
	if (etat2 == "pause") {
		document.getElementById("audio_controllers_pauseStart2").innerHTML = "<img src = 'img/playNoFocus.svg' class = 'controllers' onmouseover = 'hoverPlay2(this)' onmouseout = 'unhoverPlay2(this)' onclick = 'pausePlay2(\"play\")'/ id = 'btn_playPause2'>";
		audio.pause();
	}
	else {
		document.getElementById("audio_controllers_pauseStart2").innerHTML = "<img src = 'img/pauseNoFocus.svg' class = 'controllers' onmouseover = 'hoverPause2(this)' onmouseout = 'unhoverPause2(this)' onclick = 'pausePlay2(\"pause\")' id = 'btn_playPause2' />";
		audio.play();
	}
}

function stop2() {
	var audio = document.getElementById("audio2");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic2");
	audio.currentTime = 0;
	document.getElementById("audio_controllers_pauseStart2").innerHTML = "<img src = 'img/playNoFocus.svg' class = 'controllers2' onmouseover = 'hoverPlay2(this)' onmouseout = 'unhoverPlay2(this)' onclick = 'pausePlay2(\"play\")'/ >";
	audio.pause();
	cursorMusic.value = "0";	
}

function changeMusic2(title) {

	var titleMusic = document.getElementById("titleMusic_blockTitle2");
	var blockAudio = document.getElementById("audioContainerAudio2");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic2");
	
	blockAudio.innerHTML = "<audio id = 'audio2' src = 'audio/" + title + ".mp3' /></audio>";
	pausePlay2("play");
	titleMusic.innerHTML = title;
	
	var audio = document.getElementById("audio2");
	
	cursorMusic.value = audio.duration;
	
	initcursor2();
}

function initcursor2() {
	
	var cursorSon = document.getElementById("audio_controllers_cursorSon2");
	var audio = document.getElementById("audio2");
	var btnSon = document.getElementById("btnSon2");
	
	cursorSon.onchange = function(){
		audio.volume = cursorSon.value / 100;
		if (cursorSon.value > 50) {
			btnSon.innerHTML = "<img src = 'img/volumeUp.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"mute\")'/>";
		}
		else if (cursorSon.value > 25) {
			btnSon.innerHTML = "<img src = 'img/volumeDown.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"mute\")'/>";
		}
		else if (cursorSon.value > 1) {
			btnSon.innerHTML = "<img src = 'img/volumeReallyDown.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"mute\")'/>";
		}
		else {
			btnSon.innerHTML = "<img src = 'img/volumeMute.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"unmute\")'/>";
		}
	}
	
	initcursorMusic2();
}

function initcursorMusic2() {
	var audio = document.getElementById("audio2");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic2");
	var up = true;
	cursorMusic.onmousedown = function() { up = false; };
	cursorMusic.onmouseup = function() { up = true; };
	
	
	audio.ontimeupdate = function() {
		if (up) {
			if (audio.currentTime == audio.duration) {
				stop2();
			}
			cursorMusic.value = parseInt(audio.currentTime);	
		}
	};
}

function changerPositionMusic2(element) {
	var audio = document.getElementById("audio2");
	var btn = document.getElementById("btn_playPause2");
	var cursorMusic = document.getElementById("audio_controllers_cursorMusic2");
	
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

function muteUnMute2(action) {

	var btnSon = document.getElementById("btnSon2");
	var cursorSon = document.getElementById("audio_controllers_cursorSon2");
	var audio = document.getElementById("audio2");
	
	if (action == "mute") {
		btnSon.innerHTML = "<img src = 'img/volumeMute.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"unmute\")'/>";
		valcursorSon2 = cursorSon.value;
		cursorSon.value = "0";		
		audio.volume = 0;
	}
	else {
		
		cursorSon.value = valcursorSon2.toString();
		audio.volume = cursorSon.value / 100;
		
		if (cursorSon.value > 50) {
			btnSon.innerHTML = "<img src = 'img/volumeUp.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"mute\")'/>";
		}
		else if (cursorSon.value > 25) {
			btnSon.innerHTML = "<img src = 'img/volumeDown.svg' class = 'controllers2'  onclick = 'muteUnMute2(\"mute\")'/>";
		}
		else if (cursorSon.value > 1) {
			btnSon.innerHTML = "<img src = 'img/volumeReallyDown.svg'  class = 'controllers2'  onclick = 'muteUnMute2(\"mute\")'/>";
		}else {
			btnSon.innerHTML = "<img src = 'img/volumeMute.svg'  class = 'controllers2'  onclick = 'muteUnMute2(\"unmute\")'/>";
		}
	}
}