function Face(option) {
    var option = option || {};
    this.obj = option.obj;
    this.init();
    this.opacity = 0;
};

Face.prototype = {
    constructor: Face,
    init: function () {
        this.x = 0;
        this.y = 0;
        this.vx = Math.random() * 60 - 5;
        this.vy = Math.random() * -60 - 10;
        this.opacity = 0;
        this.obj.style.opacity = 0;
        this.obj.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px)'
    },
    animate: function () {
        if (this.opacity === 0) {
            this.obj.style.opacity = 1;
            this.opacity = 1;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.vy += Math.random() * 3 + 2;
        this.obj.style.opacity *= .9;
        this.obj.style.transform = 'translate(' + this.x + 'px,' + this.y + 'px)'
    },
};

export default Face;