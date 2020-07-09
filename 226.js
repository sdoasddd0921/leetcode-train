// 第一个错误的版本
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function(n) {
		// （73%）
		let L = 0
		let R = n
		while (L + 1 !== R) {
			const m = Math.floor((L + R) / 2)
			if (isBadVersion(m)) {
				R = m
			} else {
				L = m
			}
		}
		if (R === n) return n - 1
		return R
	};
};