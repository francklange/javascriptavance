// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  if (x != null && (typeof x === "function" || typeof x === "object")) {
    return false;
  }
  return true;
}

console.log(isPrimitive(2));
