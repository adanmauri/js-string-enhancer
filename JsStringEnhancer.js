/**
 * @license
 * Copyright 2017 Adán Mauri Ungaro <adan.mauri@gmail.com>
 *                Pablo Marcelo Costanzo <costanzo_pablo@hotmail.com>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

String.prototype.union = function(anotherStr) {
	var tmpStr = this;
	var tmpAnotherStr = anotherStr;

	if (tmpStr.length < tmpAnotherStr.length) {
		tmpAnotherStr = tmpAnotherStr.substring(0,tmpStr.length);
	} else if (tmpAnotherStr.length < tmpStr.length) {
		tmpStr = tmpStr.substring(tmpStr.length-tmpAnotherStr.length, tmpStr.length);
	}

	do {
		if (tmpStr.includes(tmpAnotherStr)) {
			break;
		}
		tmpStr = tmpStr.substring(1,tmpStr.length);
		tmpAnotherStr = tmpAnotherStr.substring(0,tmpAnotherStr.length-1);
	} while (tmpStr.length > 0 & tmpAnotherStr.length > 0);
	return this + anotherStr.substring(tmpAnotherStr.length,anotherStr.length);
}

String.prototype.replaceAll = function(searchvalue, newvalue) {
	str = this;
	var re = new RegExp(searchvalue,"g");
	return str.replace(re, newvalue);
}
