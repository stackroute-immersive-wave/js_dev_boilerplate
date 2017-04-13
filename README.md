# JS Boilerplate Code

## Supports
- eslint
- Mocha
- Chai
- Recommended folder structure for a JS project

### How to start running
Run these commands

Install the required dependencies

	$ npm install

Install mocha globally for TDD/BDD

	$ sudo npm install mocha -g

Install gulp globally 

	$ sudo npm install gulp -g

To test the app

	$ npm run build

To run the app

	$ npm run execute

### Package structure

js_dev_boilerplate
	/css
	/html_docs
	/inputdata --Input CSV files are here
	/js --Cadet puts their data munging assignments here with  their name appended to file name
	/outputdata --Students add the generated JSON here with  their name appended to file name
	/test --I added few tests here and students added their own
		/dataMungingSpec.js  --Tests to check proper API use
		/testJsonStructureSpec.js (Uses totalObjectKeys.js and jsondiff.js of Hobbes)
		/*.js Added by student
		/ExpectedJSON -- JSON files expected to be generated