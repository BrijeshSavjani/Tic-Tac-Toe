let PlayerXTurn = false 
let PlayerX = []; let Player0 = [];
class Coordinate{ constructor(id){this.x = id[0];this.y= id[2];}}
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
function CheckDimension(MovesMade1Dimension)
{
    var won = false;
    MovesMade1Dimension.sort();
    MovesMade1Dimension.forEach((element,index,array) =>
    {
        for(let i =0;i < array.length;i++){
            try{
                if (element == array[i] && element == array[i+1]){won = true;}
                if (Math.abs(element - array[i] - array[i+1]) == 1 ){won = true;}
            }finally{}
    }}); 
    return won;}
function CheckWinConditions(MovesMade)
{
    let MovesMadeX = []; let MovesMadeY = [];
    var won = false;
    MovesMade.forEach((element) =>  {MovesMadeX.push(element.x);MovesMadeY.push(element.y);}) ;
    won = CheckDimension(MovesMadeX) || CheckDimension(MovesMadeY);
    return won;}
function MakeMove(id)
{
    var CellValue = document.getElementById(id);
    if (CellValue.innerText == "")
    {
        if (PlayerXTurn){CellValue.innerText = "X";PlayerX.push(new Coordinate(id));}
        else{CellValue.innerText ="0"; Player0.push(new Coordinate(id));}
        ChangeUser();
        if (CheckWinConditions(PlayerX) || CheckWinConditions(Player0)){alert("Game Over");}
    }
    else {alert("Grid is occupied");}}

