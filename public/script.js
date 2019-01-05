/**
 * 
 * @param {string} selector 
 */
function $(selector) {      //jquery-like dollar sign query selector
    return document.querySelector(selector);
};

var home = true;

$('.pad').addEventListener('click', (event) => {
    $('.home').classList.add("animated", "fadeOutUp");

});

$('.home').addEventListener("animationend", (event) => {
    if ($('.home').classList.contains("fadeOutUp")) {
        $('.home').setAttribute('style', 'display: none');
        $('.home').classList.remove('animated', 'fadeOutUp');
        $('.second').setAttribute("style", "display: block;");
        $('.second').classList.add('animated', 'fadeInUp');
    } else if ($('.home').classList.contains("fadeInUp")) {
        $('.home').classList.remove('animated', 'fadeInUp');
    }
}, false);

$('.second').addEventListener("animationend", (event) => {
    if ($('.second').classList.contains('fadeInUp')) {
        $('.second').classList.remove('animated', 'fadeInUp');
    } else if ($('.second').classList.contains('fadeOutUp')) {
        $('.second').setAttribute('style', 'display: none;');
        $('.second').classList.remove('animated', 'fadeOutUp');
        $('.home').setAttribute('style', 'display: block;');
        $('.home').classList.add('animated', 'fadeInUp');
    }
}, false);

$('.return').addEventListener("click", (event) => {
    $(".second").classList.add("animated", "fadeOutUp");
});





//STUFF TO SEND TO SERVER

var xhttp = new XMLHttpRequest();

$('.power').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/power", true);
    xhttp.send();
});
$('.tvinput').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/input", true);
    xhttp.send();
});
$('.volup').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/volup", true);
    xhttp.send();
});
$('.voldown').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/voldown", true);
    xhttp.send();
});
$('.ok').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/select", true);
    xhttp.send();
});
$('.back').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/back", true);
    xhttp.send();
});
$('.up').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/up", true);
    xhttp.send();
});
$('.down').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/down", true);
    xhttp.send();
});
$('.left').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/left", true);
    xhttp.send();
});
$('.right').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/right", true);
    xhttp.send();
});
$('.chanup').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/chanup", true);
    xhttp.send();
});
$('.chandown').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/chandown", true);
    xhttp.send();
});
$('.one').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/1", true);
    xhttp.send();
});
$('.two').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/2", true);
    xhttp.send();
});
$('.three').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/3", true);
    xhttp.send();
});
$('.four').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/4", true);
    xhttp.send();
});
$('.five').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/5", true);
    xhttp.send();
});
$('.six').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/6", true);
    xhttp.send();
});
$('.seven').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/7", true);
    xhttp.send();
});
$('.eight').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/8", true);
    xhttp.send();
});
$('.nine').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/9", true);
    xhttp.send();
});
$('.zero').addEventListener("click", (event) => {
    xhttp.open("GET", "/api/0", true);
    xhttp.send();
});


// $('.power').click (event => {
// 	function httpGetAsync(http://thedrawingblog.com:8030/on, callback)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", http://thedrawingblog.com:8030/on, true); // true for asynchronous 
//     xmlHttp.send(null);
// }
// }


// $('.lightOneOn').click (event => {
// 	$.get( "C:\Users\Isaiah\workspace\alexa-rfoutlet\routes\devices", function( data ) {
// 	  console.log("success");
// 	  alert( "Load was performed." );
// 	});
// // function main(devices) {
// // 	console.log(devices);
// // }

// // fetch(`http://192.168.1.219:8031/api/devices`).then(data => data.json()).then(main);
// 	$('.lightOneOn').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightOneOn').removeClass('blackani');
// 		$('.lightOneOn').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightOneOn').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightOneOff').click (event => {

// 	$('.lightOneOff').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightOneOff').removeClass('blackani');
// 		$('.lightOneOff').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightOneOff').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightTwoOn').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightTwoOn').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightTwoOn').removeClass('blackani');
// 		$('.lightTwoOn').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightTwoOn').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightTwoOff').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightTwoOff').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightTwoOff').removeClass('blackani');
// 		$('.lightTwoOff').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightTwoOff').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightThreeOn').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightThreeOn').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightThreeOn').removeClass('blackani');
// 		$('.lightThreeOn').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightThreeOn').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightThreeOff').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightThreeOff').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightThreeOff').removeClass('blackani');
// 		$('.lightThreeOff').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightThreeOff').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightFourOn').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightFourOn').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightFourOn').removeClass('blackani');
// 		$('.lightFourOn').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightFourOn').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightFourOff').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightFourOff').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightFourOff').removeClass('blackani');
// 		$('.lightFourOff').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightFourOff').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightFiveOn').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightFiveOn').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightFiveOn').removeClass('blackani');
// 		$('.lightFiveOn').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightFiveOn').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });

// $('.lightFiveOff').click (event => {
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });
// 	$('.lightFiveOff').addClass('blackani');
// 	window.setTimeout(() => {
// 		$('.lightFiveOff').removeClass('blackani');
// 		$('.lightFiveOff').addClass('blueani');
// 		window.setTimeout(() => {
// 			$('.lightFiveOff').removeClass('blueani');
// 		}, 2500)
// 	}, 2500)

// });
// // $('.around').click(event => {
// // 	console.log('something');
// // 	const $target = $(event.target);


// // 	$target.addClass('blackani');
// // 	//document.querySelector('.lightfive').classList.add('blackani');
// // 	window.setTimeout(() => {
// // 		$target.removeClass('blackani');
// // 		$target.addClass('blueani');
// // 		window.setTimeout(() => {
// // 			$target.removeClass('blueani');
// // 		}, 2500)
// // 	}, 2500)
// 	// $.ajax({
// 	// 	url: '',
// 	// 	error: function (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// });

// // });

// // function main(devices) {
// // 	console.log(devices);
// // }

// // fetch(`http://192.168.1.219:8031/api/devices`).then(data => data.json()).then(main);