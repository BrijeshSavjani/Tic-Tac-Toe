let BoardValues = [new Array(3), new Array(3)];
function CreateBoard(Board)
{
    for (let row= 0; row < BoardValues[0].length; row++)
    {
        
        var Row = document.createElement("tr")
        for (let column= 0; column < BoardValues[1].length; column++)
        {
            var Cell = document.createElement("td");
            var CellButton = document.createElement("button");
            CellButton.id = column.toString() + "," +  row.toString();
            Cell.appendChild(CellButton);
            Row.appendChild(Cell)
        }
        Board.appendChild(Row);
    }
    
}
