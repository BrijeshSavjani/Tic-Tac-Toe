let PlayerXTurn = false 
let PlayerX = []; let Player0 = [];
class Coordinate{ constructor(id){this.x = parseInt(id[0]);this.y= parseInt(id[2]);}}
function DecsendingSort(list){return list.sort((function(a, b){return b-a}))}
function CreateBoard(Board)
{
    for (let row= 0; row < 3; row++)
    {
        var Row = document.createElement("tr")
        for (let column= 0; column < 3; column++)
        {
            var Cell = document.createElement("td");
            var CellButton = document.createElement("button");
            CellButton.id = row.toString() + "," +  column.toString();
            CellButton.setAttribute("onClick", "MakeMove( '" + CellButton.id + "')");
            CellButton.innerText = "";
            Cell.appendChild(CellButton); Row.appendChild(Cell);
        }
        Board.appendChild(Row);}}
function ChangeUser(){PlayerXTurn = !PlayerXTurn;}
function SpearmansRank(Moves)
{
    let MovesX = []; let MovesY = [];
    Moves.forEach((element) =>  {MovesX.push(element.x);MovesY.push(element.y);}) ;
    let MovesXSorted = DecsendingSort( Array.from(MovesX)); let MovesYSorted = DecsendingSort(Array.from(MovesY));
    let MovesXRanked = []; let MovesYRanked =[];
    for(let index = 0;index < Moves.length;index++)
    {
        MovesXRanked.push(MovesXSorted.indexOf(MovesX[index]) + 1);
        MovesYRanked.push(MovesYSorted.indexOf(MovesY[index]) + 1);
    }
    let MovesRankDifference = 0;
    Moves.forEach((element,index) => {MovesRankDifference += ((MovesXRanked[index]) - (MovesYRanked[index]))**2;});
    return 1 - ((6 * MovesRankDifference)/ (Moves.length * ((Moves.length**2) - 1)));
}
function CheckWinConditions(MovesMade)
{

}
function MakeMove(id)
{
    var CellValue = document.getElementById(id);
    if (CellValue.innerText == "")
    {
        if (PlayerXTurn){CellValue.innerText = "X";PlayerX.push(new Coordinate(id));}
        else{CellValue.innerText ="0"; Player0.push(new Coordinate(id));}
        ChangeUser();
        // if (CheckWinConditions(PlayerX) || CheckWinConditions(Player0)){alert("Game Over");}
    }
    else {alert("Grid is occupied");}}

