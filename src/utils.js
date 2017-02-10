/**
 * PROJECT: MyNes
 * AUTHOR :　TheBoy <theboy5140@gmail.com>
 * DATE : 2017/2/9 16:27
 */

(function(window){

    var MyNes = {};

    if(window.MyNes)
    {
        MyNes = window.MyNes;
    }
    else
    {
        window.MyNes = MyNes;
    }

    var utils = {};

    utils.testCanvasSupport = function()
    {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    utils.testWebGLSupport = function()
    {
        if(!this.testCanvasSupport())
        {
            return false;
        }
        var canvas = document.createElement("canvas");
        var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return !! (gl && gl instanceof WebGLRenderingContext);
    };

    MyNes.utils = utils;

})(window);