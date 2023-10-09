<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined.

<i>In the code provided, there is a typographical error. The variable should be named "greeting" (with two 'e's), but it's mistakenly written as "greetign" (with 'i' instead of 'e'). As a result, JavaScript will not recognize "greetign," leading to a ReferenceError.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12".

<i>In JavaScript, when you use the plus sign with a string and a number, it sticks them together instead of adding them up. For example, if you add the number 1 to the string "2", you'll get the string "12". So, if you run the function sum(1, "2"), the result will be the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔'].

<i>In the given code, we initially assign the first element of the `food` array (which is "🍕") to the `favoriteFood` property of the `info` object. Later, we change the value of `info.favoriteFood` to "🍝". However, this change does not affect the `food` array, so when we log the `food` array, it remains unchanged and still contains the elements "🍕", "🍫", "🥑", and "🍔".</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined.

<i>In the `sayHi` function, there is a parameter `name`, which is expected to be passed when the function is called. However, when you call `sayHi()` without passing any arguments, the `name` parameter remains undefined. As a result, the function returns "Hi there, undefined" because it concatenates the undefined `name` variable to the string.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: 2.

<i>In this code, the `forEach` method iterates over each element in the `nums` array. Inside the callback function, it checks the truthiness of each `num` using the condition `if (num)`. Since 0 is considered falsy in JavaScript, it doesn't increment the `count` for the element with the value 0. However, it does increment `count` for the elements with values 1, 2, and 3, which are truthy values. Therefore, `count` becomes 3 after the loop, and the `console.log(count)` statement will output 3.</i>

</p>
</details>