<?php
// ###########
// # imports #
// ###########


// ###########
// # program #
// ###########

	function returnJson($responseType,$responseMsg,$responseCnt) {
		header("Content-Type:application/json");
		header('Access-Control-Allow-Origin: *');

		$response['type'] = $responseType;

		if($responseMsg) {
			$response['message'] = $responseMsg;
		}

		if($responseCnt) {
			$response['content'] = $responseCnt;
		}

		echo json_encode($response);
	}

?>
