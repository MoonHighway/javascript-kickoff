Print Table Challenge
====================
Create a function that generates tables from arrays of objects

* [Demo](http://jsbin.com/zuyemo/1/quiet)
* [Start](http://jsbin.com/zuyemo/2/edit?js,output)

### Sample Usage

```javascript

    var table = createTable([
        { first: 'Alex', last: 'Banks' },
        { first: 'Eve', last: 'Porcello' },
    ], "Some People");

    document.body.appendChild(table);

```

### Sample Output

```html

    <body>

        <table>
            <caption>Some People</caption>
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alex</td>
                    <td>Banks</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Porcello</td>
                </tr>
            </tbody>    
        </table>
    
    </body>

```