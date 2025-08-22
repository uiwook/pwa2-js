// String 객체
let str = '문자\'열입니다.';

// length : 문자열의 길이를 반환
console.log(str.length);  //length : 이터러블 하다(※이터러블 하다 : 순서가 있다.)

// charAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3)); // 3번째 글자를 가지고 오고 싶다.

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
//                           찾지 못하면 -1 반환
//                           idx는 생략 가능, 적으면 왼쪽기준으로 Index start 지점 지정
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.includes('숫자')); // 존재여부 체크할때는 includes 이용 가독성 향상

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement로 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '숫자'));

// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replaceAll('문자열', '숫자'));

// substring(startIdx, endIdx) : startIdx부터 endIdx까지 자른 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(3, 6))

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(',');
console.log(arr);

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
str = '       하  하  '
console.log(str.trim());

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'AfdvWdeSDa';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

