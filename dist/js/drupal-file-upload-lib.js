!function(r){r.fn.simpleFileInput=function(l){return r("html").addClass("sfi-js"),this.each(function(){function s(i){i.preventDefault(),e.trigger("click")}var n=r.extend({placeholder:"Pick your file",wrapperClass:"sfi-container",validClass:"sfi-valid",errorClass:"sfi-error",disabledClass:"sfi-disabled",buttonText:"Pick your file",allowedExts:!1,width:300,onInit:function(){},onFileSelect:function(){},onError:function(){}},l),e=r(this),i=r('<div class="sfi-wrapper '+n.wrapperClass+(e.is(":disabled")?" sfi-disabled":"")+'"></div>'),a=r('<span class="sfi-filename empty">'+n.placeholder+"</span>"),t=r('<a href="#" class="sfi-trigger">'+n.buttonText+"</a>");if(n.onInit(),!r(this).next(".sfi-wrapper").length){if(i.insertAfter(e),i.attr("tabindex",e.attr("tabindex")||"0"),0!=n.width&&i.css("width",n.width+"px"),a.appendTo(i),t.appendTo(i),e.hide(),e.is(":disabled"))return void i.addClass(".sfi-disabled");t.unbind("click").bind("click",function(i){s(i)}),a.unbind("click").bind("click",function(i){s(i)}),e.bind("change",function(){_val=r(this).val(),1==function(i){i=void 0===i?"":i;var s=n.allowedExts,e=i.split(".").pop();return""==e||0==s||-1!==r.inArray(e,s)}(_val)?(a.text(function(i){var s=0<=i.indexOf("\\")?i.lastIndexOf("\\"):i.lastIndexOf("/"),e=i.substring(s);return 0!==e.indexOf("\\")&&0!==e.indexOf("/")||(e=e.substring(1)),e}(_val)),n.onFileSelect(),i.removeClass(n.errorClass),i.addClass(n.validClass)):(n.onError(),e.val(""),i.removeClass(n.validClass),i.addClass(n.errorClass))})}})}}(jQuery);
//# sourceMappingURL=maps/drupal-file-upload-lib.js.map
