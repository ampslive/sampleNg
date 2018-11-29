# Binding

##String Interpolation 
String interpolation syntax is the {{}} syntax used to display data.

Example...

`<h2>{{obj.title}}</h2>`

`<img src = "{{obj.imageUrl}}" />`

Angular in the background converts this syntax for binding.

## Property Binding
Property Binding is used for DOM elements. The above can be written as the below using property binding...

`<img [src]="obj.imageUrl" />`

Although Property Binding can be used for headings and labels, String interpolation is easier and can be used to display a title/text for headings etc.

## Class Binding
When we need to add a class based on a condition, we can use Class Binding.

''


