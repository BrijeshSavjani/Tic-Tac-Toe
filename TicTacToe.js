let BoardValues = [new Array(3), new Array(3)];
function MakeMove(id)
{
   alert(id);
}
function CreateBoard(Board)
{
    for (let row= 0; row < BoardValues[0].length; row++)
    {
        
        var Row = document.createElement("tr")
        for (let column= 0; column < BoardValues[1].length; column++)
        {
            var Cell = document.createElement("td");
            var CellButton = document.createElement("button");
            var CellButtonId ="'" + column.toString() + "," +  row.toString() + "'";
            CellButton.setAttribute("onClick", "MakeMove(" + CellButtonId + ")");
            Cell.appendChild(CellButton);
            Row.appendChild(Cell)
        }
        Board.appendChild(Row);
    }
    
}

