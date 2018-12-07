exports.getArticleURL = function (_index) {
	switch (_index) {
		case 0:
			return '/from-desk';
		case 1:
			return '/top-stories';
		case 2:
			return '/income-tax';
		case 3:
			return '/gst';
		case 4:
			return '/vat-cst';
		case 5:
			return '/excise';
		case 6:
			return '/custom';
		case 7:
			return '/nbfc-rbi';
		case 8:
			return '/sebi';
		case 9:
			return '/roc-company-law';
		case 10:
			return '/icai';
		case 11:
			return '/finance-budget';
		case 12:
			return '/generalTax';
		case 13:
			return '/others';
	}
};

exports.getMenuMappingDev = function (_menuCategory) {
	switch (parseInt(_menuCategory)) {
		case 0: // from desk
			return '5c09f2d2ad83e006a5cbd25d';
		case 1: // top stories
			return '5c07dd78cc1f9907914e002e';
		case 2: // income tax
			return '5c07ddafcc1f9907914e002f';
		case 3: // gst
			return '5c07ddbccc1f9907914e0030';
		case 4: // vat-cst
			return '5c07ddd0cc1f9907914e0031';
		case 5: // excise
			return '5c07ddf1cc1f9907914e0032';
		case 6: // custom
			return '5c07ddf1cc1f9907914e0033';
		case 7: // nbfc-rbi
			return '5c07ddf1cc1f9907914e0034';
		case 8: // sebi
			return '5c07ddf1cc1f9907914e0035';
		case 9: // roc-company-law
			return '5c07ddf1cc1f9907914e0036';
		case 10: // icai
			return '5c07ddf1cc1f9907914e0037';
		case 11: // finance-budge
			return '5c09f46337906706d192c052';
		case 12: // general tax
			return '5c09f47a37906706d192c053';
		case 13: // others
			return '5c09f48837906706d192c054';
		default :
			return 'NA';
	}
};
