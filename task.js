'use strict';

function solveEquation(a, b, c) {
  if (a === 0) {
    return "Коэффициент 'a' не может быть равен нулю для квадратного уравнения.";
  }

  let discriminant = b ** 2 - 4 * a * c;

  let roots = [];

  if (discriminant < 0) {
    return roots;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  } else {
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);
    roots.push(root1, root2);
  }

  return roots;
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(4, 5, 1));
console.log(solveEquation(2, 2, 2));
