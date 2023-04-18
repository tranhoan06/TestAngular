import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilityCommon {

	constructor() {

	}

	randomColorThemes() {
		const listColor = [
			'primary',
			'success',
			'info',
			'warning',
			'danger',
			'dark'
		];

		return listColor[Math.floor(Math.random() * 6)];
	}

	randomColor(isRgb: boolean = false, transparent: number = 0.7) {

		if (isRgb) {
			const o = Math.round, r = Math.random, s = 255;
			return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + transparent + ')';
		}

		const color = Math.floor(0x1000000 * Math.random()).toString(16);
		return '#' + ('000000' + color).slice(-6);
	}

	toLowerCasefirst(string: string) {
		return string.charAt(0).toLowerCase() + string.slice(1);
	}

	toUpperCasefirst(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	removeUnicode(str: string) {
		str = str.toLowerCase();
		str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
		str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
		str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
		str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
		str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
		str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
		str = str.replace(/đ/g, "d");
		str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_|–|”|“|`/g, "-");

		str = str.replace(/-+-/g, "-");
		str = str.replace(/^\-+|\-+$/g, "");

		return str;
	}

	formatPrice(str: string) {
		return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	}

	print(printContents: string): void {

		const node = document.createElement("iframe");

		node.style.visibility = 'hidden';
		node.style.height = '0';
		node.style.width = '0';
		node.style.position = 'absolute';

		document.getElementsByTagName('body')[0].appendChild(node);

		node.contentWindow?.document.write(`
		  <html>
			<head>
				<title></title>
				  <style>
				  	@media print {
						@page { margin: 0; }
						body { 
							font-family: Helvetica, Arial, sans-serif;
							margin: 1.0cm; 
						}
					}
				</style>
			</head>
			<body onload="window.print();window.close()">${printContents}</body>
		  </html>`
		);

		node.contentWindow?.print();

		node.remove();
	}
}
