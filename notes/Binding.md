# Binding

## String Interpolation 
String interpolation syntax is the {{}} syntax used to display data.

Example...

`<h2>{{obj.title}}</h2>`

`<img src = "{{obj.imageUrl}}" />`

Angular in the background converts this syntax for binding.

## Property Binding
Property Binding is used for DOM elements. The above can be written as the below using property binding...

`<img [src]="obj.imageUrl" />`

Although Property Binding can be used for headings and labels, String interpolation is easier and can be used to display a title/text for headings etc.

## Attribute Binding
Attribute Binding is to bind values to attributes of a DOM element. In 99% of the cases the properties of a DOM object are similar to attributes of HTML element. But in some cases the DOM properties do not have corresponding HTML element.

`<td [attr.colspan]="colspanValue"></td>`

Here, `attr.` signifies that we are binding to the colspan attribute of the `<td>` HTML element 

## Class Binding
When we need to add a class based on a condition, we can use Class Binding. Class Binding uses a variation of Property Binding...

`<button class="btn btn-primary" [class.active]="isActiveValue">Save</button>`

`active` is the target class. If the `isActiveValue` set from the component is true, then the target class is added and conversely removed if false.

## Style Binding
When we need to change the style of an element inline, we can use Style Binding. It is a variation of Property binding.

`<button [style.backgroundColor]="isActive : 'blue' : 'white'">Save</button>`


## Event Binding
Event binding is used to bind events like click, hover, selected, etc. Syntax of Event Binding is `()`

`<button (click)="onSave()">Save</button>`

#### In the Component...

<code>
export class MyComponent {
<br>    
    onSave() { <br>
        &nbsp;console.log('Button Clicked');
    <br>&nbsp;&nbsp;}
<br>}
</code>

### To get access to the event...

`<button (click)="onSave($event)">Save</button>`

#### In the Component...

<code>
export class MyComponent {
<br>    
    onSave($event) { <br>
        &nbsp;console.log('Button Clicked', $event);
    <br>&nbsp;&nbsp;}
<br>}
</code>

## Event Bubbling
If nested elements each have an event operation, then all the events will get propagated at once. To avoid this use `stopPropagation`.

<code>
export class MyComponent {
<br>    
    onSave($event) { <br>
        &nbsp;$event.stopPropagation();<br>
        &nbsp;console.log('Button Clicked', $event);
    <br>&nbsp;&nbsp;}
<br>}
</code>