1.    Download Java on mac
2.    Download NodeJS on mac
3.    Setup Environment Variables on mac

exportJAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home
export PATH=${JAVA_HOME}/bin:$PATH
export PATH=$PATH:/usr/local/bin/node
export PATH=$PATH:/usr/local/bin/npm

4.    npm install nightwatch
5.    Create folder on mac (can be named somethingbesides NightwatchJS) then add folder to workspace in VSCode
6.    Create folders (bin, log, pages, reports,screenshots, tests)
7.    Put browser drivers and selenium standaloneserver jars in bin folder
8.  Createnightwatch.conf.js file

module.exports = (function(settings) {
    settings.test_workers = false;
    return settings;
  })(require('./nightwatch.json'));


9.Create nightwatch.json file

{
  "src_folders": ["tests"],
  "output_folder": "reports/XMLReports",
  "custom_commands_path": "pages",
  "custom_assertions_path": "",
  "page_objects_path": "pages",
  "launch_url": "http://www.artsyjewels.com",
  "webdriver" : {
    "start_process": true
  },
  "test_settings" : {
      "firefox": {
        "webdriver" : {
          "server_path": "bin/geckodriver"
          },
          "screenshots": {
            "enabled": true,
            "path": "screenshots/Firefox/"
          },
          "desiredCapabilities": {
            "browserName": "firefox",
            "firefoxOptions": {
              "args": [
                "window-size=1680,1200",
                "start-maximized",
                "disable-web-security",
               "ignore-certificate-errors",
               "--test-type"
              ]
            }
          }
        },
    "chrome" : {
      "webdriver":{
        "server_path": "bin/chromedriver",
        "port": 9515
        },
      "screenshots": {
        "enabled": true,
        "path": "screenshots/Chrome/"
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "safari" : { 
      "webdriver": {
        "server_path": "/usr/bin/safaridriver",
        "port": 4445,
        "use_legacy_jsonwire": false
      },     
      "screenshots": {
        "enabled": true,
        "path": "screenshots/Safari/"
      },
      "desiredCapabilities": {
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "platform": "macos 10.14.6",
        "version": "12.1.2"
      }
    },
    "edge" : {
      "webdriver":{
        "server_path": "bin/msedgedriver"
        },
      "screenshots": {
        "enabled": true,
        "path": "screenshots/MicrosoftEdge/"
      },
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}



10.  OnVSCode terminal : npm init to create package.json file
11.  OnVSCode : npm install nightwatch –save
12.  OnVSCode : npm install nightwatch-html-reporter
13.  Runtest with login alias tag with report
nightwatch -e firefox -a login –reporter html-reporter.js
14.  Rungroups of test
Nightwatch -e firefox –group artsyjewels/testcases,examples

