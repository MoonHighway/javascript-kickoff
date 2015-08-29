Building a Car Bingo Card
========================
Let's build a game card for a car bingo app.

* [Demo](http://jsbin.com/viwuke/1/quiet)
* [Start](http://jsbin.com/viwuke/2/edit?js,output)

### Steps

1. Dynamically populate an array of 75 Image urls

```javascript
    ['http://www.moonhighway.com/class/assets/car-bingo/1.jpg',
    'http://www.moonhighway.com/class/assets/car-bingo/2.jpg'
    
      ...
      
    'http://www.moonhighway.com/class/assets/car-bingo/75.jpg'];
```

2. Code a function that randomly splices one item from an array

```javascript
   randomItem([2,6,4,7]);    // 2 or 6 or 4 or 7
```

3. Code a loop that generates 5 row <div> elements and adds them to the <section>
4. Create a nested loop that adds 5 col <div> elements ot each row
5. Randomly display one of the images as the cell background
6. Add <span>free space</span> to the center cell
7. Toggle Cell Clicks add <span class="chip"></span> to the innerHTML of clicked cells
