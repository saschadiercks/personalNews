<?php

	function answerRequest($httpResponseCode,$responseType,$responseMsg,$responseCnt) {
		header("Content-Type:application/json");
		header(http_response_code ($httpResponseCode));
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
