# ATM application

We're going to build a whole application, from beginning to end using jQuery to manipulate the DOM. This application will keep track of our checking and savings accounts' balances. 

### Starter Code

You've been given an HTML template in the file `index.html`, and a group 
of assets in the folders `images`, `javascripts`, and `stylesheets`. A 
full stylesheet (`main.css`); you do your work in the `index.html` file 
(HTML) and the `main.js` file (JavaScript).

### Working Example

[Here you can see an example of what a working version would do.][example]

### Necessary Features

- Deposit money into either one of the bank accounts: checking or savings.
- Withdraw money from one of the bank accounts.
- If you try to withdraw more money than exists in the account, the ATM
  ignores the transaction and alerts the user to the error.
- The color of the bank account reflects its balance 
  (there's a CSS class called `zero` already written for this)!

### Bonus Features

- There is overdraft protection:
  - If a withdrawal can be covered by the balances in *both* accounts combined, 
    take the balance of the account withdrawn from down to $0 and take the rest 
    of the withdrawal from the other account. 
  - If the withdrawal amount is more than the combined account balance, follow 
    the process for an overdraft above.
- You can't deposit or withdraw values that are not valid currency, or 
  that are equal to zero dollars.

### Tips

1.  Think about how to model the domain.
2.  Only start working with the DOM **after you have the logic down!**
3.  Don't just assume that your click events are firing; use `console.log` to make sure!
4.  Use jQuery to manipulate the DOM

### Resources

* [DOM Intro][dom]
* [Event Listeners][listeners]

<!-- Links -->

[example]:   http://h4w5.github.io/atm-example
[dom]:       https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
[listeners]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
