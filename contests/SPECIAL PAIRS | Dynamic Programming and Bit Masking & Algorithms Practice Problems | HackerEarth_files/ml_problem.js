function ml_start_polling(){var a=$("#dryrun-result"),b=$("#dryrun-result").find("#submission-result-poll-url").attr("url");a.find('[replaceData="true"]').length>0&&setTimeout(poll_ml_result.bind(this,b),1e3)}function poll_ml_result(a){$.ajax({url:a,success:function(a){$("#dryrun-result").html(a),ml_start_polling()}})};