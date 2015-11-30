/**
 * Created by rodrigocespedes on 11/20/2015.
 */

function Player(name)
{
    this.name = name;
    this.field = new Table(3);

    this.field.draw();

}