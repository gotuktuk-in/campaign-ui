'use strict';

/**
 * @ngdoc function
 * @name ly.services:Message
 * @description
 * # Message Resource Api service
 * Message Resource for connecting Message api
 */


angular
    .module('tuktukCamp')
    .factory('tuktukService', tuktukService);

function tuktukService($resource) {
  var url = 'https://dev-campaign.gotuktuk.in/rest/o/v1/campaign/C123/';
    return $resource(
        "",
        {id:"@id", mobile:"@mobile"},
        {
            getCamp: {
                method: 'GET',
                url:   url + 'walkin',
                isArray:false
            },
            postCamp: {
                method: 'POST',
                url:   url + 'walkin',
                isArray:false
            }
        }
    );
}