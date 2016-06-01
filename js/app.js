$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show().animate(
			{"left": "1020px"},
			500,
			function() {
				$(this).hide();
				$(this).css("left", "601px");
			}
		).finish();
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
	$(window).keydown(function (e) {
		if (e.keyCode == 88) {
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-cool").show();
		}
	})
	$(window).keyup(function (e) {
		if (e.keyCode == 88) {
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		}
	});

	$(".hulk-ryu").mouseenter(function() {
		$(".hulk-ryu-still").hide();
		$(".hulk-ryu-ready").show();
	})
	.mouseleave(function() {
		$(".hulk-ryu-ready").hide();
		$(".hulk-ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".hulk-ryu-ready").hide();
		$(".hulk-ryu-throwing").show();
		$(".hulk-hadouken").show().animate(
			{"left": "930px"},
			500,
			function() {
				$(this).hide();
				$(this).css("left", "510px");
			}
		).finish();
	})
	.mouseup(function() {
		$(".hulk-ryu-throwing").hide();
		$(".hulk-ryu-ready").show();
	});
	$(window).keydown(function (e) {
		if (e.keyCode == 77) {
			$(".hulk-ryu-ready").hide();
			$(".hulk-ryu-still").hide();
			$(".hulk-ryu-cool").show();
		}
	})
	$(window).keyup(function (e) {
		if (e.keyCode == 77) {
			$(".hulk-ryu-cool").hide();
			$(".hulk-ryu-still").show();
		}
	});
});
function playHadouken() {
	$("#hadouken-sound")[0].volume=0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}