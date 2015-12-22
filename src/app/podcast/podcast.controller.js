(function () {

    'use strict';

    angular
        .module('angPodcast')
        .controller('PodcastController', PodcastController);


    /** @ngInject */
    function PodcastController($http, $log, x2js) {
        var vm = this;
        vm.foo = 'bar';
        $http.get('app/podcast/podcast-original.xml')
            .then(function(response) {
               //$log.log(response.data);
                var json = x2js.xml_str2json(response.data);
                //$log.log(json);
                //vm.dataSet = json.rss.item;
                //vm.dataSet = json;
                vm.title = json.rss.channel.title;
                vm.itemList = json.rss.channel.item;
                vm.date = json.rss.channel.pubDate;
                $log.log(moment(vm.date, "ddd, DD MMM YYYY HH:mm:ss ZZ"));
                vm.mdate = moment(vm.date, "ddd, DD MMM YYYY HH:mm:ss ZZ");
                $log.log(vm.mdate.format("MM/DD/YYYY"));
                // ddd, DD MMM YYYY HH:mm:ss ZZ

            });

        vm.displayDate = function(title) {
            //var inputFormat = "ddd, DD MMM YYYY HH:mm:ss ZZ";
            //Armstrong and Getty September 11, 2015 Hour
            //TODO - tokenize item.title into an object to better
            // control the display
            var titleInfo = {};
            var tokens = title.split(" ");
            // Verify it looks like what we expect
            // 8 tokens should be normal
            if (tokens.length === 8 && tokens[0] === 'Armstrong') {
                titleInfo.month = tokens[3];
                titleInfo.day = tokens[4];
                titleInfo.year = tokens[5];
                titleInfo.showHour = tokens[7];
                titleInfo.message = titleInfo.month + ' ' + titleInfo.day + ' ' +
                        titleInfo.year + ' Hour: ' + titleInfo.showHour;
            } else {
                titleInfo.message = title;
            }

            //$log.log(titleInfo);
            //$log.log('title: ', title);
            //$log.log('tokens: ', tokens);
            //for (t in tokens) {
            //    $log.log(t);
            //}

            //var inputFormat = "ddd, DD MMM YYYY HH:mm:ss ZZ";
            //var displayFormat = "MM/DD/YYYY";
            //var mDate = moment(dateRaw, inputFormat);
            //return mDate.format(displayFormat);
            //return "to be determined";
            return titleInfo.message;
        };

        $log.log('PodcastController');
        //This is the callback function
        //var setData = function(data) {
        //    vm.dataSet = data;
        //}
        //
        //XmlJson.get(setData);
        //var xmlText = "<MyOperation><test>Success</test><test2><item>ddsfg</item><item>dsdgfdgfd</item></test2></MyOperation>";
        //var jsonObj = x2js.xml_str2json( xmlText );

        //$log.log(jsonObj);
    }
})();
