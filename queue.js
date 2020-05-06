/* https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/
function queueTime(customers, n) {
  const klienci = customers.length;
  if (klienci <= 0) {
    console.log(0);
    return 0;
  } else if (klienci == 1) {
    console.log(customers[0]);
    return customers[0];
  } else {
    const tab = new Array(n - 1);
    tab.fill(0);

    //console.log(tab);
    /*
    for (let i = 0; i <= n - 1; i++) {
      tab[i] = customers[i];
    }
    */
    function rosnaco(a, b) {
      return a - b;
    }
    for (l = 0; l <= klienci - 1; l++) {
      tab.sort(rosnaco);
      tab[0] = tab[0] + customers[l];
    }
    tab.sort(rosnaco).reverse();

    console.log(tab);
    console.log(tab[0]);
    return tab[0];
  }
}

//queueTime([], 1); // 0);
//queueTime([1, 2, 3, 4], 1); // 10);
//queueTime([10,2,3,3], 2); //10
queueTime([1, 2, 3, 4, 5], 10); // 5);
