//공통 안내 팝업
function modalAlert(msg, func){
	if(msg !== undefined){
		$('#alertMsg').html(msg);
	}

	if(func !== undefined){
		$('#alertFunc').attr('onclick', func);
	}

	$('#modalAlert').modal();

	// 엔터키 눌렀을 시, 모달 닫음
	$("#modalAlert").on("shown.bs.modal", function () {
		$("#alertFunc").focus();
	});
}

//공통 확인 팝업
function modalConfirm(msg, func){
	if(msg !== undefined){
		$('#confirmMsg').html(msg);
	}

	if(func !== undefined){
		$('#confirmFunc').attr('onclick', func);
	}

	$('#modalConfirm').modal();

	// 엔터키 눌렀을 시, 모달 닫음
	$("#modalConfirm").on("shown.bs.modal", function () {
		$("#confirmFunc").focus();
	});
}

function alertTip(tar,txt) {
	var $this = $(tar),
		$delay = 1000,
		$speed = 300;

	if($this.length > 0){
		var $left = $this.offset().left,
			$top = $this.offset().top,
			$height = $this.outerHeight(),
			$tip = $('<div class="alert_tip" style="left:'+$left+'px;top:'+($top+$height)+'px;">'+txt+'</div>')

		$('body').append($tip);
		$tip.fadeIn($speed).delay($delay).fadeOut($speed,function(){
			$tip.remove();
		})
		$this.addClass('error').focus().delay($delay).queue(function(next){
			$this.removeClass('error');
			next();
		});
	}
}

// function loadingShow(){
// 	var $loading = $('<div id="loading"><div><p>G</p><p>N</p><p>I</p><p>D</p><p>A</p><p>O</p><p>L</p></div></div>'),
// 		$id = $('#loading');
//
// 	if($id.length == 0){
// 		$('body').append($loading);
// 	}
// }

// function loadingHide(){
// 	var $id = $('#loading');
// 	$id.remove();
// }