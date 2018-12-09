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

// Production
exports.getMenuMappingDev = function (_menuCategory) {
	switch (parseInt(_menuCategory)) {
		case 0: // from desk
			return '5c0da7b258920b125efbed47';
		case 1: // top stories
			return '5c0da7c858920b125efbed48';
		case 2: // income tax
			return '5c0da7dc58920b125efbed49';
		case 3: // gst
			return '5c0da7f758920b125efbed4a';
		case 4: // vat-cst
			return '5c0da81358920b125efbed4b';
		case 5: // excise
			return '5c0da82958920b125efbed4c';
		case 6: // custom
			return '5c0da83a58920b125efbed4d';
		case 7: // nbfc-rbi
			return '5c0da8bd58920b125efbed4e';
		case 8: // sebi
			return '5c0da8cb58920b125efbed4f';
		case 9: // roc-company-law
			return '5c0da8e658920b125efbed50';
		case 10: // icai
			return '5c0da90358920b125efbed51';
		case 11: // finance-budge
			return '5c0da92b58920b125efbed52';
		case 12: // general tax
			return '5c0da94058920b125efbed53';
		case 13: // others
			return '5c0da95f58920b125efbed54';
		case 14: // hidden Tab
			return '5c0da97958920b125efbed55';
		default:
			return 'NA';
	}
};
