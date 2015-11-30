/**
 * Created by rodrigocespedes on 11/20/2015.
 */

function Table(size)
{
    this.size = size;
    this.emptyCell = '0';
    this.cells = [];
    this.ships = [];
    //this.init();
    this.draw();

  /*  function init()
    {
        for(var rowIndex = 0; rowIndex < this.size ; rowIndex++) {
            this.cells[rowIndex] = [];
            for (var columnIndex = 0; columnIndex < this.size; columnIndex++) {
                this.cells[rowIndex][columnIndex] = this.emptyCell;
            }
        }
    }
*/
    this.prototype.draw = function()
    {
        for(var rowIndex = 0; rowIndex < this.size ; rowIndex++) {
            console.log(this.cells[rowIndex]);
        }
    }

    this.createShips = function(qty)
    {
        for(var i = 0; i < qty ; i++) {
            this.ships[i] = new Ship(2, '');
        }
    }

    this.drawShip = function(qty)
    {

    }

}