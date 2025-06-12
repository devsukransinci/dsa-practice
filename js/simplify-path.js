/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  //   The path starts with a single slash '/'.
  // Any two directories are separated by a single slash '/'.
  // The path does not end with a trailing '/'.
  // The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')


  /**
   * Algorithm
   * 
   * 1. Splith on /
   * 2. Iterate
   * 3. If elemnt is . or whitespace then skip
   * 4. If its .. then remove last eent
   * 5. Else insert current element
   * 6. Returnsting with / at the start
   */
  let newPath = [];
  let paths = path.split('/');
  for (let i = 0; i < paths.length; i++) {
    let temp = paths[i];
    if (temp === '.' || temp == '') continue;
    if (temp === '..') {
      newPath.pop();
      continue;
    }
    newPath.push(temp);
  }
  return '/' + newPath.join('/');
};

console.log(simplifyPath('/a//b////c/d//././/..'));
console.log(simplifyPath('/a/./b/../../c/'));

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../abc/def'));
