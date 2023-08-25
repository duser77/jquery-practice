# JQUERY - COMPLETE NOTES
- makes Easy writing javascript

```sh
#### Basic syntax of jquery
- $('selector1').action();
 means take action on selector1
- $('selector2').action(funtion(){})
 means execute function when action happens  on selector2
- $ means jquery , and itself contain (document).ready
 example console.log($)
output : function jQuery(selector, context)
```
**USING DIFFERENT TYPE OF SELECTOR**
-  **1.  Element selector**
 $('p').click();
means click on element p
-  **2.  Class selector**
 $('.className').click();
means click on class p
-  **3.  Id selector**
 $('#idName').click();
means click on id p
**Few other selector**
 i) $("*") &nbsp;&emsp;&ensp; &emsp; &emsp;&emsp;&emsp;	Selects all elements
 ii) $(this)  &nbsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp; Selects the current HTML element
 iii) $("p.intro")  &nbsp; &ensp; &emsp;&emsp; Selects all <p> elements with class="intro"
iv) $("p:first")   &emsp;&ensp;  &emsp;&emsp;  	Selects the first <p> element
v) $("ul li:first-child")  &nbsp; Selects the first <li> element of every <ul> 
vi) $("ul li:first-child")  Selects the first <li> element of the first <ul>
vii) $("[href]") &emsp; &emsp;&nbsp;&emsp;   	Selects all elements with an href attribute
viii) $(":button")&emsp; &ensp;&emsp; Selects all <button> elements and <input> elements of type="button"
ix) $("tr:even") &nbsp;&emsp; &ensp; &emsp; Selects all even <tr> elements

**EVENTS IN JQUERY**
1. mouse events - hover, mouseenter,mouseleave, mouse leave,click , dblclick , mouseup , mousedown,
2. keyboard events - keypress , keydown, keydown
3. Form - submit, change, focus, blur
4. Document/window - laod , resize ,scroll, unload
  FEW OTHER EVENTS
  i) ('selector').on("event",function(){})  &emsp; help to attach mutiple events on a Selector
 ii) fade, fadeout, fadeTo ,fadeToggle , slideUp, slideDown, slideToggle
 
#### Template code of jquery
**1 . $(documents).ready(function(){})**
- means execute function when docoment is loaded comletely.
- $ itself contains , so no need to mention it before every command
 we can write directly $('selector').function(){}

**2. $ ('p').click()**
- click on all p element
 
**3. $ ('.userForm').click(function(){})**
- execute function when class userForm is clicked
 
**4. $('p').hide();**
- will hide clicked all p element

**5. $('button').click(function(){$('p').toggle(time)})**
- Toggle element p, when clicked on button

**6. $('button').click(function(){$('p').toggle(time)})**
- Toggle element p, when clicked on button

**7. $('button').animate({propertesWhichHaveToAnimate},time)**
- Toggle element p, when clicked on button

**8. $('button').stop()**
- Stop animation 

**9. $('button').text() &nbsp; & &nbsp; $('button').text('seting the value of selector)**
- we can get element of selector or we can maupulate value of selected element
- html can be also used instead of text
- in case of form , val is used instead of text/html

**10. $('button').empty()  &nbsp; & &nbsp; $('button').text()**
- empty makes selected element empty
- remove deletes selected element from code

**11.addClass, removeClass, toggleClass**

**12. $('selector').css('property')  &nbsp; & &nbsp; $('selector').css('property', 'value')**
- if value is provided then its set css for the property, otherwise it gives css

AJAX IN JQUERY- API REQUEST
**13. $get('url',function(){})**
**$post('url',{parameter:value},function(){})**
####  Real life jquery code examples

source: Code with harry 1hr tutorial
| Plugin | README |
| ------ | ------ |
| GitHub | [plugins/github/README.md][PlGh] |

> Note: `Adding real life example is remaining` 

   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>