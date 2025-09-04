// user의 deeps는 1이다. (name쪽 1, friends안의 id쪽 2)
const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

// Shallow copy(얕은 복사) : 최상위 계층의 요소만 독립적으로 복사,
// 그 외 계층은 참조형태로 복사 
// const shallowCopy = {...user};
// shallowCopy.friends.id = 100;
// console.log(user.friends.id, shallowCopy.friends.id);


// deep copy(깊은 복사) : 모든 계층의 요소를 독립적으로 복사
// JSON은 symbol이나 함수는 복제하지 못한다.
const jasonCopy = JSON.parse(JSON.stringify(user));
jasonCopy.friends.id = 200;

// 최신브라우저에서만 사용가능.
const cloneCopy = structuredClone(user);
cloneCopy.friends.id = 200;
console.log(cloneCopy);


// ------------------------
// Destructuring 문법
// ------------------------
const arr = ['hong', 20];

// const [name, age] = arr;
// const [name2] = arr;
// const [, age2] = arr;

const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

const {name, friends} = user2;
console.log(name, friends);