var canWinNim = function (n) {
  /**
   * 
   * Algorithm
   * 
   * We are playing first
   * a erson can remove 1to3 stones
   * n -> Number of stones
   * We are using optmised solutino
   * 
   * 0 -> Loss
   * 1 -> Win (We pick 1)
   * 2 -> Win (We pick 2)
   * 3 -> Win  (We pick 3)
   * 4 -> Loss  (We pick 3, Other player 1)
   * 5 -> Win (We pick 1, Other 3, We 1)
   * 6 -> Win (We pick 1, other 3, We 2)
   * 7 -> Win (We pick 1, other 3, We 3)
   * 8 -> (??)
   * 
   * Pattern
   * [lose, win, win, win , lose, win, win, win ,lose, win, win, win ,lose.,.....]
   */
  if (n % 4 == 0) return false;
  else return true;
};

console.log(canWinNim(5));