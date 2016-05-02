#fhreloader <br>

fhreloader is a simple jquery plugin for make a Pre-loader before all the content inside a page load properly.
<br>
#USAGE<br> 
The usage is very simple, you just have to give a specific class to every element which have reference to the link.<br>

First, you have to included the js and css file to your document:
```
<link rel="stylesheet" href="css/fhreloader.min.css" >
<script src="js/fhreloader.min.js"></script>
```

###For custom preloader:
And if you want to use a custom preloader, you have to wrap your loader inside a div
and place it inside body of your page. it doesn't matter if you want display it or not(using css),
but we recommend you to not display it cause the plugin will automatically display it when its running.

###simple usage : <br>
```
$("").fhreloader(); //using built-in loader
$(".classname").fhreloader(); //custom preloader
```

###Options
<br>
Option Avalaible for this plugin: <br>

#####disableScroll (Default: true):
Disable all scrolling on your page before page completely loaded.
```
$(".classname").fhreloader({disableScroll: false}); //enable scrolling before page completely loaded
```
<br>

Live Example : www.fajryhamzah.com/


