module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        karma: {
            all: {
                configFile: "karma.conf.js",
                singleRun: true
            }
        },
        jasmine_nodejs: {
            // task specific (default) options
            options: {
                specNameSuffix: "spec.js", // also accepts an array
                helperNameSuffix: "helper.js",
                useHelpers: false,
                random: false,
                seed: null,
                defaultTimeout: null, // defaults to 5000
                stopOnFailure: false,
                traceFatal: true,
                // configure one or more built-in reporters
                reporters: {
                    console: {
                        colors: true, // (0|false)|(1|true)|2
                        cleanStack: 1, // (0|false)|(1|true)|2|3
                        verbosity: 4, // (0|false)|1|2|3|(4|true)
                        listStyle: "indent", // "flat"|"indent"
                        activity: false
                    },
                    // junit: {
                    //     savePath: "./reports",
                    //     filePrefix: "junit-report",
                    //     consolidate: true,
                    //     useDotNotation: true
                    // },
                    // nunit: {
                    //     savePath: "./reports",
                    //     filename: "nunit-report.xml",
                    //     reportName: "Test Results"
                    // },
                    // terminal: {
                    //     color: false,
                    //     showStack: false,
                    //     verbosity: 2
                    // },
                    // teamcity: true,
                    // tap: true
                },
                // add custom Jasmine reporter(s)
                customReporters: []
            },
            serverside_tests: {
                // target specific options
                options: {
                    useHelpers: false
                },
                // spec files
                specs: [
                    "server/spec/**"
                ]
            }
        },
        watch: {
            scripts: {
                files: ['server/**/*.js',
                    'public/**/*.js'
                ],
                tasks: ['test'],
                options: {
                    spawn: false,
                },
            },
        },
        // protractor: {
        //     all: {
        //         configFile: "protractor-conf.js",
        //         keepAlive: true
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-jasmine-nodejs');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("test", ["karma", 'jasmine_nodejs']);
};
