<?php
// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function returnJson($responseType, $responseMsg, $responseCnt, $responseLst) {
		header("Content-Type:application/json");
		header('Access-Control-Allow-Origin: *');

		$response['type'] = $responseType;

		if($responseMsg) {
			$response['message'] = $responseMsg;
		}

		if($responseCnt) {
			$response['content'] = $responseCnt;
		}

		if($responseLst) {
			$response['feeds'] = $responseLst;
		}

		echo json_encode($response);
	}

?>
