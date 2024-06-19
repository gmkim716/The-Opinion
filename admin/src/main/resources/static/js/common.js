/**
 * common Develoment Common javascript
 */
var common = {};
/**
 * ajax
 */

common.ajax = (function(ajax) {
	// defaultOption
	var defaultOption = {
		type : 'post',
		cache : false,
		contentType : 'application/json',
		dataType : 'json',
		executeExceptionCallback : false,
		hasProgress : true
	};
	
	// common ajax module
	function ajax(option, callback) {
		$.ajax($.extend(option, {
			// 전처리
			beforeSend : function() {
				if (option.hasProgress && typeof loadingShow !== 'undefined' && typeof loadingShow === 'function') {
					loadingShow();
				}
			},
			// 후처리 : 성공시
			success : function(response) {
				console.log(response);
				if (typeof callback === 'function') {
					callback.call(this, response);
				}
			},
			// 후처리 : 통신 오류시
			error : function(e) {
				console.log(e);
				if (option.dataType === 'jsonp') return false;
				let response = e.responseJSON ? e.responseJSON : null;
				if (response && response.fieldErrors && !option.executeExceptionCallback) {
					modalAlert(response.fieldErrors[0].message);
					// modalAlert("필수항목을 모두 입력해주세요.");
					// common.error.errorMessage(response.fieldErrors);
					return false;
				}
				if (!option.executeExceptionCallback) {
					// 서버오류입니다.
					modalAlert(response && response.errorMessage ? response.errorMessage : '서버 오류가 발생했습니다.');
					if (response && response.redirectUrl) {
						window.location.href = response.redirectUrl;
					}
					return false;
				}
				response.isError = true;
				callback.call(this, response);
			},
			// 후처리 : 통신완료시
			complete : function() {
				if (option.hasProgress && typeof loadingHide !== 'undefined' && typeof loadingHide === 'function') {
					loadingHide();
				}
			}
		}));
	}
	// get method
	function get(url, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'get';
		option.url = url;
		option.data = null;
		ajax(option, callback);
	}
	
	// post method
	function post(url, data, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'post';
		option.url = url;
		option.data = JSON.stringify(data);
		ajax(option, callback);
	}

	// put method
	function put(url, data, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'put';
		option.url = url;
		option.data = JSON.stringify(data);
		ajax(option, callback);
	}

	// put method
	function patch(url, data, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'patch';
		option.url = url;
		option.data = JSON.stringify(data);
		ajax(option, callback);
	}

	// delete method
	function del(url, data, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'delete';
		option.url = url;
		option.data = JSON.stringify(data);
		ajax(option, callback);
	}

	function formData(url, data, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'post';
		option.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
		option.url = url;
		option.data = data;
		ajax(option, callback);
	}
	
	// multipart post method
	function multiPost(url, data, callback, options) {
		var option = $.extend({}, defaultOption, options);
		option.type = 'post';
		option.contentType = false;
		option.processData = false;
		option.url = url;
		option.data = data;
		ajax(option, callback);
	}
	
	return {
		get : get,
		post : post,
		put : put,
		patch : patch,
		del : del,
		formData : formData,
		multiPost : multiPost
	};
	
}(common.ajax || {}));


common.ajaxSubmit = (function(ajax) {
	// defaultOption
	var defaultOption = {
		type : 'post',
		cache : false,
		contentType : 'application/json',
		dataType : 'json',
		executeExceptionCallback : false,
		hasProgress : true
	}
	
	// common ajax module
	function ajax(option) {
		var success = typeof option.success == 'function' ? option.success : function () {};
		var error = typeof option.error == 'function' ? option.error : function () {};
		var complete = typeof option.complete == 'function' ? option.complete : function () {};
		
		$.ajax($.extend(option, {
			// 전처리
			beforeSend : function() {
				if (option.hasProgress && typeof loadingShow !== 'undefined' && typeof loadingShow === 'function') {
					loadingShow();
				}
			},
			// 후처리 : 성공시
			success : function(response) {
				success.call(this, response);
			},
			// 후처리 : 통신 오류시
			error : function(e) {
				try {
					var response = e.responseJSON ? e.responseJSON : null;
					if (response && response.fieldErrors && !option.executeExceptionCallback) {
						common.error.errorMessage(response.fieldErrors);
						return;
					}
					if (!option.executeExceptionCallback) {
						// 서버오류입니다.
						if (response && response.redirectUrl) {
							common.goPage(response.redirectUrl, {
								initMsg: response.errorMessage
							});
							return false;
						}
						
						modalAlert(response && response.errorMessage ? response.errorMessage : headParam.tryAgain);
						return false;
					}
					// executeExceptionCallback 실행
					response.isError = true;
					error.call(this, response);
				} catch (e) {
				}
				
			},
			// 후처리 : 통신완료시
			complete : function(jqXHR, textStatus) {
				if (option.hasProgress && typeof loadingHide !== 'undefined' && typeof loadingHide === 'function') {
					loadingHide();
				}
				
				complete.call(this, jqXHR, textStatus);
			}
		}));
	}
	
	// get method
	function get(url, options) {
		var option = $.extend({}, defaultOption, options)
		option.type = 'get';
		option.url = url
		ajax(option);
	}
	
	// post method
	function post(url, data, options) {
		var option = $.extend({}, defaultOption, options)
		option.type = 'post';
		option.url = url;
		option.data = JSON.stringify(data);
		ajax(option);
	}
	
	function formData(url, data, options) {
		var option = $.extend({}, defaultOption, options)
		option.type = 'post';
		option.contentType = 'application/x-www-form-urlencoded; charset=UTF-8'
		option.url = url;
		option.data = data;
		ajax(option);
	}
	return {
		get : get,
		post : post,
		formData : formData
	}
	
}(common.ajaxSubmit || {}));

/**
 * 에러 메세지
 */
common.error = (function() {
	// alertTip
	function errorMessage(fieldErrors) {
		let $delay = 3000;
		let $speed = 300;
		for (let i=0; i < fieldErrors.length; i++) {
			try {
				let regExp = /\./gi;
				let target = fieldErrors[i].field;
				if (regExp.test(target)) {
					let tArr = target.split(regExp);
					if (tArr > 0) {
						target = tArr[tArr.length-1];
					}
				}
				let el = document.getElementById(target);
				if (el) {
					let $this = $(el);
					$this.addClass('error');
					if( i == 0 )
						$('.error').delay($delay).removeClass('error').eq(0).focus();
					let $left = $this.offset().left;
					let $top = $this.offset().top;
					let $height = $this.outerHeight();
					let $tip = $('<div class="alert_tip" style="left:'+$left+'px;top:'+($top+$height)+'px;">'+fieldErrors[i].message+'</div>');
					$('body').append($tip);
				}
			} catch(e) {
				continue;
			}
		}
		// $('.error').delay($delay).removeClass('error').eq(0).focus();

		$('.alert_tip').fadeIn($speed).delay($delay).fadeOut($speed,function(){
			$('.alert_tip').remove();
		});
	}
	return {
		errorMessage : errorMessage
	}
}(common.error || {}));

/**
 * cookie
 */
common.cookie = (function(cookie) {
	// cookie set
	function set(name, value, expiredays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		
		var cookie = null;
		cookie = document.cookie;
		cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
		cookie.Path = "/";
		document.cookie = cookie;
	}
	// cookie get
	function get(name) {
		var results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		if (results) {
		    return (unescape(results[2]));
		}
	    return null;
	}
	// cookie delete
	function del(name) {
		var cookieDate = new Date ();  // current date and time
		cookieDate.setTime(cookieDate.getTime() - 1);
		document.cookie = name += "=; expires=" + cookieDate.toGMTString();
	}
	
	return {
		set : set,
		get : get,
		del : del
	};
}(common.cookie || {}));

common.file = (function(f) {
	f.preView = function(obj) {
		// 지원브라우져 체크
		if (window.File && window.FileReader) {
			// 선택된 파일이 있는지 체크
			if (obj.files && obj.files.length > 0) {
				// 이미지 파일여부체크
				if (!(/image/gi).test(obj.files[0].type)){
					modalAlert("미리보기 할 수 없는 형식의 파일입니다. image 파일만 미리보기가 가능합니다.");
					return false;
				}
				var reader = new FileReader();
				reader.onload = (function (o) {
					return function(e) {
						var $div = $(o).closest('.img');
						if ($div) {
							var $target = $div.find('img');
							if ($target.length === 0) {
								$target = $('<img id="preViewImage"/>');
								$div.find('span').remove();
								$div.prepend($target);
								
							}
							$target.attr('src', e.target.result);
						}
					};
				}(obj));
				reader.readAsDataURL(obj.files[0]);
			}
		} else {
			var $div = $(obj).closest('.img');
			if ($div) {
				$div.find('span').html('미리보기를 지원하지 <br/> 않는 브라우져입니다');
			}
		}
	};
	return f;
}(window.common.file || {}));

// 일반 페이지 이동 
common.goPage = function(url, param) {
	for (key in param) {
		common.localStorage.setItem(key, param[key]);
	}
	window.location.href = url;
};

// POST 페이지 이동
common.goPagePost = function(url, param) {
	var body = document.getElementsByTagName('body')[0];
	if (!body) return;
	var form = document.getElementById('pageForm');
	if (!form) {
		form = document.createElement('form');
	}
	form.id = "pageForm";
	form.name = "pageForm";
	form.method = "post";
	form.action = url;
	form.innerHTML = '';
	for (key in param) {
		var input = document.createElement('input');
		input.name = key;
		input.value = param[key];
		form.appendChild(input);
	}
	body.appendChild(form);
	form.submit();
	body.removeChild(form);
};

common.localStorage = {};

// 브라우저 로컬 스토리지에서 값 불러오기
common.localStorage.getItem = function(key, isNotRemove) {
	// isNotRemove == 꺼낼때 false면 삭제 O, true면 삭제 X
	var value = window.localStorage.getItem(key);
	if (!isNotRemove) {
		window.localStorage.removeItem(key);
	}
	return value;
};

// 브라우저 로컬 스토리지에 저장 
common.localStorage.setItem = function(key, value) {
	window.localStorage.setItem(key, value);
};

//multipart submit
common.multipart = {};

common.multipart.submit = function($form, callback, option) {
	var options = $.extend({
		//progressUrl : commonGlobal.progressUrl,
		// progressbar 여부
		async : false,
		dataType : 'json',
		hasProgress : true,
		executeExceptionCallback : false,
		// 전처리
		beforeSubmit: function (data, form, o) {
			
			if (o.hasProgress && typeof loadingShow !== 'undefined' && typeof loadingShow === 'function') {
				loadingShow();
			}
			//validation체크 
			return true;
		}
		// 성공시
		,success: function(response, status) {
			if(typeof response === 'string'){
				response = response.replace(/[<][^>]*[>]/gi, '');
				response = JSON.parse(response);
			}
			// 전문통신 응답 오류 or 일반 user exception 발생 시
			response.error = response.errorCode ? true : false;
			// callback
			callback.call(this, response);
		}
		// 오류시
		,error: function(e){
			var response = e.responseJSON ? e.responseJSON : null;
			if (response && response.fieldErrors && !options.executeExceptionCallback) {
				common.error.errorMessage(response.fieldErrors);
				return;
			}
			if (!options.executeExceptionCallback) {
				// 서버오류입니다.
				modalAlert(response && response.errorMessage ? response.errorMessage : '서버 오류가 발생했습니다.');
				return false;
			}
			response.isError = true;
			callback.call(this, response);
		}
		// 통신완료 후처리
		,complete : function() {
			if (options.hasProgress && typeof loadingHide !== 'undefined' && typeof loadingHide === 'function') {
				loadingHide();
			}
		}
    }, option || {});
	// jquery ajaxform
	$form.ajaxForm(options);
	$form.submit();
};

// jquery custom plugin
(function($) {
	$.fn.serializeObject = function() {
		try {
			var o = {};
			var a = this.serializeArray();
			$.each(a, function() {
				if (o[this.name]) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		} catch (e) {
			modalAlert('시스템 오류입니다. 관리자에게 문의하세요.');
		}
	};
	$.fn.getLoad = function(action, onSuccess, onError, onComplete) {
		onSuccess = onSuccess || function() {
		};
		onError = onError || function(e) {
			let response = e != null ? JSON.parse(e) : null;
			// 서버오류입니다.
			modalAlert(response && response.errorMessage ? response.errorMessage : '서버 오류가 발생했습니다.');
			if (response && response.redirectUrl) {
			    window.location.href = response.redirectUrl;
			}
			return false;
		};
		onComplete = onComplete || function() {
		};
		
		var qArr = action.split(/\?/g);
		var uri = qArr[0];
		uri += '?frag=' + this.attr('id') + (qArr.length > 1 ? '&' + qArr[1] : '');
		this.load(uri, function(response, status, xhr) {
			// Unauthorized 처리
			// if (xhr.status == 403) {
			// 	modalAlert("세션이 유효하지 않습니다.", "common.goPage('/admin/web/login')");
			// }

			if (status === 'error') {
				// 서버 미응답 처리
				if (xhr.status == 0) {
					common.goPage('/admin/web/login');
				}else {
					onError(response);
					// onError(this, response, status, xhr);
					//location.href = '/error/error';
				}
			} else {
				onSuccess(this, response);
			}
			/*
			if (status === 'error') {
				response = JSON.parse(response);
				response.isError = true;
			}
			*/
			
			onComplete(this, response);
		},{cache:false});
	};
	$.fn.postLoad = function(action, data, onSuccess, onError, onComplete) {
		onSuccess = onSuccess || function() {
		};
		onError = onError || function() {
		};
		onComplete = onComplete || function() {
		};
		
		if (typeof data !== 'object') return false;
		
		this.load(action, $.extend({}, data, {frag : this.attr('id')}), function(response, status, xhr) {
			if (status === 'error') {
				if (typeof alertTip === 'function') {
					modalAlert('시스템 오류입니다');
				}
				onError(this, response, status, xhr);
				//location.href = '/error/error';
				
			} else {
				onSuccess(this, response);
			}

			onComplete(this, response);
		});
	};
	$.fn.multipartSubmit = function() {
		// TODO : 구현
	};
	$.fn.setFilePreview = function() {
		return $.each(this, function() {
			// type check
			if ($(this).prop('tagName').toLowerCase() !== 'input' || $(this).prop('type').toLowerCase() !== 'file') return true;
			$(this).unbind('change').bind('change', function() {
				common.file.preView(this);
			});
		});
	};
	$.fn.setData = function(ds) {
		return $.each(this, (function(_ds) {
			return function() {
				//$(this).attr('data-dataset', _ds);
				if (typeof _ds !== 'object') return;
				$(this).find('[data-col]').each(function(i){
					var k = $(this).data('col');
					if (!k || !_ds[k]) return true;
					$(this).val(_ds[k]);
				});
			}
		}(ds)));
	};
	$.fn.getData = function(ds) {
		var _ds = ds || {};
		if (typeof _ds !== 'object') return;
		$(this).find('[data-col]').each(function(i){
			var k = $(this).data('col');
			_ds[k] = $(this).val();
		});
		return _ds;
	};
}($));

/***************************************************************************************************************************************************
 * Native 객체 prototype 재정의
 ***************************************************************************************************************************************************/
//String.lpad()
String.prototype.lpad = function(len, char) {
	var value = ''+this;
	for(var i = value.length; i < len; i++){
		value = char + value;
	}
	return value;
};

//Number.lpad()
Number.prototype.lpad = function(len, char) {
	var value = ''+this;
	for(var i = value.length; i < len; i++){
		value = char + value;
	}
	return value;
};

String.prototype.splitTelno = function() {
	var regExp = /^(\d{2,3})(\d{3,4})(\d{4})$/;
	if(regExp.test(this)) {
		var telArr = regExp.exec(this);
		telArr.shift();
		return telArr;
	}
	return this;
};

String.prototype.telFormat = function() {
	var regExp = /^(\d{2,3})(\d{3,4})(\d{4})$/;
	if(regExp.test(this)) {
		return this.replace(regExp, '$1-$2-$3');
	}
	return this;
};
/***************************************************************************************************************************************************
 * window unload event bind
 ***************************************************************************************************************************************************/
//window event regiter
(function(w) {
	var clearcommonObject = function() {
		var targetArr = ['PageParam', 'PageFunction', 'HeaderParam', 'HeaderFunc'];
		for (var i=0, l=targetArr.length; i < l; i++) {
			try {
				var o = eval(targetArr[i]);
				if (eval(targetArr[i])) {
					o = null;
				}
			} catch(e) {
				// undefiend object ignored
			}
		}
	}
	var clearStorage = function() {
		try {
			if (window.localStorage) {
				window.localStorage.clear();
			}
			if (window.sessionStorage) {
				window.sessionStorage.clear();
			}
		} catch(e) {
			// undefiend storage ignored
		}
	}
	if (w) {
		// window unload
		if (w.attachEvent) {
			w.attachEvent('unload', function() {
				clearcommonObject.call(this);
				//clearStorage.call(this);
			});
		} else {
			w.addEventListener('unload', function() {
				clearcommonObject.call(this);
				//clearStorage.call(this);
			}, false);
		}
	}
	
	$(document).ready(function() {
		if (typeof HeaderFunc != 'undefined' && typeof HeaderFunc.init === 'function') {
			HeaderFunc.init.call(HeaderFunc);
		}
		if (typeof PageFunction != 'undefined' && typeof PageFunction.init === 'function') {
			PageFunction.init.call(PageFunction);
		}
	});
}(window));
