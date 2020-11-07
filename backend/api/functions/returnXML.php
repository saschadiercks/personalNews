<?php

	function returnXML($httpResponseCode,$responseType,$responseMsg,$responseCnt) {
		header('Content-Type: application/xml; charset=utf-8');
		header('Access-Control-Allow-Origin: *');

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

		echo createXML($response);
	}

?>
