const scanner = require ('sonarqube-scanner');
scanner (
 ( 
  serverURL: "http://",
      token: "tokenumber",
	  options: {
	      "sonar.sources": "./src",
		  "sonar.exclusions": "**/* .test.tsx",
		  "sonar.test": "./src",
		  "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
		  "sonar.typescript.1cov.reportPaths": "coverege/icov.info",
		  "sonar.testExcutionReportPaths": "test-report-xml",
		  "sonar.eslint.reportPaths": "eslint-report.json"
		  
		  },
	  },
	  () => process.exit()
	  
	 );
	  
