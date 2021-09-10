<?php
// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function returnJson($responseMeta, $responseCnt, $responseLst) {
		header("Content-Type:application/json");
		header('Access-Control-Allow-Origin: *');

		if($responseMeta) {
			$response['meta'] = $responseMeta;
		}

		if($responseCnt) {
			$response['content'] = $responseCnt;
		}

		if($responseLst) {
			$response['channels'] = $responseLst;
		}

		echo json_encode($response);
	}
