function Renderer() {

    var mainContainer = $("#main-container")

    this.renderAll = function() {

        this.renderTable();
    }

    this.renderTable = function addTable() {
        
        var myTableDiv = document.getElementById("myTable");
      
        var table = document.createElement('table');
        table.border = '1';

            var tableHead = document.createElement('th');
            tableHead.innerHTML = "name";
            table.appendChild(tableHead);

            var tableHead = document.createElement('th');
            tableHead.innerHTML = "E-mail adress";
            table.appendChild(tableHead);

            var tableHead = document.createElement('th');
            tableHead.innerHTML = "Mobile Number";
            table.appendChild(tableHead);

            var tableHead = document.createElement('th');
            tableHead.innerHTML = "Action";
            table.appendChild(tableHead);


      
        var tableBody = document.createElement('tbody');
        table.appendChild(tableBody);


      
        for (var i = 0; i < 2; i++) {

            var tr = document.createElement('tr');
            tableHead.innerHTML = "Action";
            tableBody.appendChild(tr);

      
            for (var j = 0; j < 4; j++) {

                var td = document.createElement('td');
                td.width = '75';
                td.appendChild(document.createTextNode("Name " + i + "," + j));
                tr.appendChild(td);

            }

        }

        myTableDiv.appendChild(table);

    }



}