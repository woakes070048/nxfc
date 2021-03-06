'use strict';

//ingests service used to communicate ingests REST endpoints
angular.module('ecom').factory('Ingests', ['$resource',
	function($resource) {
		return $resource('/api/ingests/:ingestId', { ingestId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
			run: {
			    method: 'GET',
			    url: '/api/ingests/:ingestId/run'
			},
			logInfo: {
			    method: 'GET',
			    url: '/api/ingest-logs/:ingestLogId'
			},
			logEntries: {
			    method: 'GET',
			    url: '/api/ingest-logs/:ingestLogId/entries',
			    isArray: true
			},
			logsQuery: {
			    method: 'GET',
			    url: '/api/ingests/:ingestId/logs',
			    isArray: true
			}
		});
	}
]);
