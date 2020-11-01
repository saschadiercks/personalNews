<?php

	function returnJson($httpResponseCode,$responseType,$responseMsg,$responseCnt) {
		header("Content-Type:application/json");

		if($httpResponseCode) {
			header(http_response_code ($httpResponseCode));
		} else {
			header(http_response_code (200));
		}

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
