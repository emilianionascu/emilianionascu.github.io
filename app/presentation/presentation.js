angular.module('presentation', []);

angular.module('presentation').controller('PresentationController',
[
    '$scope', 'md5', 'articles',
    function ($scope, md5, articles) {
        $scope.md5 = md5;
        $scope.articles = articles;
        $scope.age = (new Date()).getFullYear() - 1984 + ((new Date().getMonth()) > 6 ? 0 : -1) + "YO";

        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 250,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                showControls: false,
                showValues: false,
                showLegend: true,
                showXAxis: false,
                tooltips: false,
                showBarLabels: true,
                xScale: function(n) {
                    debugger;
                    return o(n);
                },
                margin: {
                    left: 140
                },
                transitionDuration: 500,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function (d) {
                        return d + "Emi";
                    }
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickValues: [0, 25, 75, 100],
                    tickFormat: function (d) {
                        var mapper = {
                            0: "Beginner",
                            25: "Proficient",
                            75: "Expert",
                            100: "Master"
                        }
                        return mapper[d];
                    }
                },
                yDomain: [0, 100],
                legend: {
                    rightAlign: false
                }
            }
        };

        $scope.programmingLanguagesData = [
            {
                "key": "Programming Languages",
                "color": "#1f77b4",
                "values": [
                    {
                        "label": "C#",
                        "value": 98.00
                    },
                    {
                        "label": "Scala",
                        "value": 55
                    },
                    {
                        "label": "Python",
                        "value": 20
                    },
                    {
                        "label": "Java",
                        "value": 25
                    },
                    {
                        "label": "JavaScript",
                        "value": 90
                    }
                ]
            }
        ];

        $scope.webData = [
            {
                "key": "Web Development",
                "color": "#1f77b4",
                "values": [
                    {
                        "label": "ASP.Net",
                        "value": 98.00
                    },
                    {
                        "label": "jQuery",
                        "value": 91
                    },
                    {
                        "label": "Angular.js",
                        "value": 89
                    },
                    {
                        "label": "CSS 2.1 & 3",
                        "value": 90
                    },
                    {
                        "label": "Bootstrap 3.0",
                        "value": 85
                    }
                ]
            }
        ];

        $scope.cmsData = [
            {
                "key": "CMS Knowledge",
                "color": "#1f77b4",
                "values": [
                    {
                        "label": "Sitecore",
                        "value": 98.00
                    },
                    {
                        "label": "Umbraco",
                        "value": 45
                    },
                    {
                        "label": "Orchard",
                        "value": 75
                    }
                ]
            }
        ];

        $scope.managementData = [
            {
                "key": "Management Skills",
                "color": "#1f77b4",
                "values": [
                    {
                        "label": "Leadership",
                        "value": 100
                    },
                    {
                        "label": "Company Management",
                        "value": 80.00
                    },
                    {
                        "label": "Team Management",
                        "value": 90
                    },
                    {
                        "label": "Agile",
                        "value": 90
                    },
                    {
                        "label": "Communication",
                        "value": 100
                    }
                ]
            }
        ];
    }
]);