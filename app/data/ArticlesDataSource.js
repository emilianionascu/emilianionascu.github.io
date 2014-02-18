angular.module('data.articles', []);
angular.module('data.articles').factory('articles', function () {
    var articles = {
        data: [
            {
                title: 'The Power of Yield in C#',
                fileName: 'ThePowerOfYield.html'
            },
            {
                title: 'Software Project Prerequisites - Part 1',
                fileName: 'SoftwareProjectPrerequisitesPartOne.html'
            }
        ],
        resolvePath: function (fileName) {
            return "app/data/Articles/" + fileName;
        }
    };
    return articles;
});