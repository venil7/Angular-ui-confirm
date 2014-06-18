##  Angular-ui-confirm dialog directive

### what is it

Angular-UI based on Bootstrap is a great project. However if you wanted to 
use bootstrap dialog for a simple confirmation - there's plenty of code to be written.

Angular-ui-confirm is a directive that you can place on a `link` or a `button` that
would open a confirmartion dialog, and if user choses to proceed - peforms some javascript task, e.g. run a function from controller's scope.

### how to use

first off - install via `bower`

```
  bower install angular-ui-confirm
```

then add dependancy to your angular application, note there's also dependancy on
`ui.bootstrap`

```
  var app = angular.module('myapp', ['ui.bootstrap','angular-ui-confirm']);
```

then add directive to your HTML

```
  <a href='#' confirm="delete()" rel="Are you sure?">click me</a>
```

this will show a conformation dialog, then invoke `delete()` function, if user presses `OK`

![Confirmation dialog](https://raw.githubusercontent.com/venil7/Angular-ui-confirm/master/confirm.png)