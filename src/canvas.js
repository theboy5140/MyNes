/**
 * PROJECT: MyNes
 * AUTHOR :　TheBoy <theboy5140@gmail.com>
 * DATE : 2017/2/10 16:31
 */

(function(window){

    var MyNes = {};

    if(!window.MyNes)
    {
        window.MyNes = MyNes;
    }
    else
    {
        MyNes = window.MyNes;
    }

    var Canvas = function(name, width, height){

        this.name = name;
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
    };

    Canvas.prototype.check = function()
    {

    };

    MyNes.Canvas = Canvas;

})(window);