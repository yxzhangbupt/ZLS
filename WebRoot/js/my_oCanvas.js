//ˮ�صĹ�������������
var constructor = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {

        },
        advance: function () {
            if (this.height_now < this.Height) {
                this.height_now += 1;
            }
            else {
                this.height_now = 0;
            }
        },
        draw: function () {
            var canvas = this.core.canvas,
                origin = this.getOrigin(),
                x = this.abs_x - origin.x,
                y = this.abs_y - origin.y;

            canvas.beginPath();
            canvas.strokeStyle = "#000";
            if (this.trail_flag == 1) {
                canvas.moveTo(this.trail[0].x_t, this.trail[0].y_t);
                for (var i = 1; i < this.trail.length; i++) {
                    canvas.lineTo(this.trail[i].x_t, this.trail[i].y_t);
                }
                canvas.lineTo(this.trail[0].x_t, this.trail[0].y_t);
                canvas.clip();
            }
            if (this.fill !== "") {
                canvas.fillStyle = this.fill;
                canvas.fillRect(x, y + this.Height - this.height_now, this.Width, this.height_now);
            }
            canvas.closePath();
        }
    }, settings);
};
//ˮ�صĹ��캯��
oCanvas.registerDisplayObject("SC", constructor, "init");


var constructor_show = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {

        },
        advance: function () {
           if(this.start==1){
               if (this.height_now < this.Height) {
                   this.height_now += 1;
               }
               else {
                   this.full = 1;
               }
           }
        },
        draw: function () {
            var canvas = this.core.canvas,
                origin = this.getOrigin(),
                x = this.abs_x - origin.x,
                y = this.abs_y - origin.y;

            canvas.beginPath();
            canvas.strokeStyle = "#000";
            if (this.trail_flag == 1) {
                canvas.moveTo(this.trail[0].x_t, this.trail[0].y_t);
                for (var i = 1; i < this.trail.length; i++) {
                    canvas.lineTo(this.trail[i].x_t, this.trail[i].y_t);
                }
                canvas.lineTo(this.trail[0].x_t, this.trail[0].y_t);
                canvas.clip();
            }
            if (this.fill !== "") {
                canvas.fillStyle = this.fill;
                canvas.fillRect(x, y + this.Height - this.height_now, this.Width, this.height_now);
            }
            canvas.closePath();
        }
    }, settings);
};
//ˮ�صĹ��캯��
oCanvas.registerDisplayObject("SC_show", constructor_show, "init");
//原来的管道绘制方法����
//var constructor_gd = function (settings, core) {
//
//    return oCanvas.extend({
//        core: core,
//        shapeType: "rectangular",
//
//        init: function () {
//            this.x_now = this.cells[0].x_cell;
//            this.y_now = this.cells[0].y_cell;
//            this.firstX = this.x_now;
//            this.firstY = this.y_now;
//            this.endHeight = 0;
//            this.beginHeight = 0;
//            this.paused = 1;
//        },
//        advance: function () {
//            var deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
//            var deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
//            var deta = Math.sqrt(deta_x * deta_x + deta_y * deta_y);
//            var flag_x = deta_x / deta;
//            var flag_y = deta_y / deta;
//            if (this.paused == 1) {
//                if (Math.abs(this.firstX - this.cells[0].x_cell) >= this.LineHeight * Math.abs(flag_x) && Math.abs(this.firstY - this.cells[0].y_cell) >= this.LineHeight * Math.abs(flag_y)) {
//                    this.firstX = this.cells[0].x_cell;
//                    this.firstY = this.cells[0].y_cell;
//                    this.beginHeight = 0;
//                }
//                else {
//                    if (this.beginHeight < this.LineHeight) {
//                        if (this.beginHeight + this.Speed >= this.LineHeight) {
//                            this.beginHeight = this.LineHeight;
//                        }
//                        else {
//                            this.beginHeight += this.Speed;
//                        }
//                        this.firstX = this.cells[0].x_cell;
//                        this.firstY = this.cells[0].y_cell;
//                    }
//                    else if (this.beginHeight == this.LineHeight) {
//                        this.firstX += flag_x * this.Speed;
//                        this.firstY += flag_y * this.Speed;
//                        //if (this.cells[0].x_cell == this.cells[1].x_cell) {
//                        //    if (this.cells[1].y_cell > this.cells[0].y_cell) {
//                        //        this.firstY += this.Speed;
//                        //    }
//                        //    else {
//                        //        this.firstY -= this.Speed;
//                        //    }
//                        //}
//                        //else {
//                        //    if (this.cells[1].x_cell > this.cells[0].x_cell) {
//                        //        this.firstX += this.Speed;
//                        //    }
//                        //    else {
//                        //        this.firstX -= this.Speed;
//                        //    }
//                        //}
//                    }
//                }
//            }
//
//        },
//        draw: function () {
//            var canvas = this.core.canvas;
//
//            this.x_now = this.firstX;
//            this.y_now = this.firstY;
//            var deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
//            var deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
//            var deta = Math.sqrt(deta_x * deta_x + deta_y * deta_y);
//            var myEnd = false;
//            var flag = {                      //��ǰ�ܵ�ˮ���ķ���,1���÷���Ϊ����-1���÷����Ϸ�����0��?ǰ�����ƶ�
//                x_flag: deta_x / deta,
//                y_flag: deta_y / deta
//            };
//            canvas.beginPath();
//
//            canvas.lineJoin = 'round';
//            this.endHeight = 0;
//            canvas.lineWidth = this.GDwidth / 4;   //���������Ŀ�ȣ��ݶ�Ϊ�ܵ���ȵ�1/4
//            canvas.strokeStyle = "#333";           //������������ɫ
//            //if (this.cells[1].x_cell - this.cells[0].x_cell > 0) {
//            //    flag.x_flag = 1;
//            //}
//            //else if (this.cells[1].x_cell - this.cells[0].x_cell < 0) {
//            //    flag.x_flag = -1;
//            //}
//            //else {
//            //    flag.x_flag = 0;
//            //}
//            //if (this.cells[1].y_cell - this.cells[0].y_cell > 0) {
//            //    flag.y_flag = 1;
//            //}
//            //else if (this.cells[1].y_cell - this.cells[0].y_cell < 0) {
//            //    flag.y_flag = -1;
//            //}
//            //else {
//            //    flag.y_flag = 0;
//            //}
//            if (this.beginHeight > 0) {
//                canvas.moveTo(this.x_now, this.y_now);
//                canvas.lineTo(this.x_now + flag.x_flag * this.beginHeight, this.y_now + flag.y_flag * this.beginHeight);
//            }
//
//            this.x_now += flag.x_flag * (this.beginHeight + this.LineHeight);
//            this.y_now += flag.y_flag * (this.beginHeight + this.LineHeight);
//            for (var i = 1; i < this.cells.length; i++) {
//                myEnd = false;
//                deta_x = this.cells[i].x_cell - this.cells[i - 1].x_cell;
//                deta_y = this.cells[i].y_cell - this.cells[i - 1].y_cell;
//                deta = Math.sqrt(deta_x * deta_x + deta_y * deta_y);
//                flag.x_flag = deta_x / deta;
//                flag.y_flag = deta_y / deta;
//                //if (this.cells[i].x_cell - this.cells[i - 1].x_cell > 0) {
//                //    flag.x_flag = 1;
//                //}
//                //else if (this.cells[i].x_cell - this.cells[i - 1].x_cell < 0) {
//                //    flag.x_flag = -1;
//                //}
//                //else {
//                //    flag.x_flag = 0;
//                //}
//                //if (this.cells[i].y_cell - this.cells[i - 1].y_cell > 0) {
//                //    flag.y_flag = 1;
//                //}
//                //else if (this.cells[i].y_cell - this.cells[i - 1].y_cell < 0) {
//                //    flag.y_flag = -1;
//                //}
//                //else {
//                //    flag.y_flag = 0;
//                //}
//                if (this.endHeight > 0) {
//                    canvas.moveTo(this.cells[i - 1].x_cell - flag.x_flag * (this.GDwidth / 8), this.cells[i - 1].y_cell - flag.y_flag * (this.GDwidth / 8));
//                    canvas.lineTo(this.cells[i - 1].x_cell + flag.x_flag * (this.endHeight ), this.cells[i - 1].y_cell + flag.y_flag * this.endHeight);
//                    this.x_now = this.cells[i - 1].x_cell + flag.x_flag * (this.LineHeight + this.endHeight);
//                    this.y_now = this.cells[i - 1].y_cell + flag.y_flag * (this.LineHeight + this.endHeight);
//                }
//                if (this.endHeight < 0) {
//                    this.endHeight = Math.abs(this.endHeight);
//                    this.x_now = this.cells[i - 1].x_cell + flag.x_flag * (this.endHeight);
//                    this.y_now = this.cells[i - 1].y_cell + flag.y_flag * (this.endHeight);
//                }
//                if (this.endHeight == 0 && i != 1) {
//                    this.x_now = this.cells[i - 1].x_cell;
//                    this.y_now = this.cells[i - 1].y_cell;
//                }
//                while (Math.abs(this.x_now - this.cells[i].x_cell) > this.LineHeight * Math.abs(flag.x_flag) || Math.abs(this.y_now - this.cells[i].y_cell) > this.LineHeight * Math.abs(flag.y_flag)) {
//                    canvas.moveTo(this.x_now, this.y_now);
//                    canvas.lineTo(this.x_now + flag.x_flag * this.LineHeight, this.y_now + flag.y_flag * this.LineHeight);
//                    this.x_now += flag.x_flag * this.LineHeight;
//                    this.y_now += flag.y_flag * this.LineHeight;
//                    if (Math.abs(this.x_now - this.cells[i].x_cell) < this.LineHeight * Math.abs(flag.x_flag) || Math.abs(this.y_now - this.cells[i].y_cell) < this.LineHeight * Math.abs(flag.y_flag)) {
//                        //if(flag.x_flag==0){
//                        //    this.endHeight = this.LineHeight  - Math.abs(this.y_now - this.cells[i].y_cell)/Math.abs(flag.y_flag);
//                        //}
//                        //else{
//                        //    this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)/Math.abs(flag.x_flag);
//                        //}
//                        //this.endHeight=this.endHeight*(-1);
//                        this.endHeight = Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(flag.y_flag) + Math.abs(flag.x_flag));
//                        myEnd = true;
//                        break;
//                    }
//                    else {
//                        this.x_now += flag.x_flag * this.LineHeight;
//                        this.y_now += flag.y_flag * this.LineHeight;
//                    }
//                }
//                if (myEnd == false && Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(flag.x_flag) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(flag.y_flag)) {
//                    canvas.moveTo(this.x_now, this.y_now);
//                    canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
//                    //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
//                    if (flag.x_flag == 0) {
//                        this.endHeight = this.LineHeight - Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(flag.y_flag);
//                    }
//                    else {
//                        this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(flag.x_flag);
//                    }
//
//                }
//            }
//            canvas.stroke();
//            canvas.closePath();
//        }
//    }, settings);
//};
//oCanvas.registerDisplayObject("GD", constructor_gd, "init");

//新的管道绘制方法（尝试版）
var constructor_gd = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.x_now = this.cells[0].x_cell;
            this.y_now = this.cells[0].y_cell;
            this.firstX = this.x_now;
            this.firstY = this.y_now;
            this.endHeight = 0;
            this.beginHeight = 0;
            this.paused = 1;

            this.cellIndex = 0;
            this.destination.x_d = this.cells[0].x_cell;
            this.destination.y_d = this.cells[0].y_cell;

            this.legacyHeight = -1;
        },
        advance: function () {
            if (this.cellIndex < this.cells.length - 1) {
                this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                this.flag_x = this.deta_x / this.deta;
                this.flag_y = this.deta_y / this.deta;
                if (this.legacyHeight >= 0) {
                    this.cellIndex++;
                    if (this.cellIndex < this.cells.length - 1) {
                        this.destination.x_d = this.cells[this.cellIndex].x_cell + this.flag_x * this.legacyHeight;
                        this.destination.y_d = this.cells[this.cellIndex].y_cell + this.flag_y * this.legacyHeight;
                        if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) > this.Speed * Math.abs(this.flag_x) || Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) > this.Speed * Math.abs(this.flag_y)) {
                            this.legacyHeight = -1;
                        }
                        else {
                            if (this.flag_x == 0) {
                                this.legacyHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                            }
                            else {
                                this.legacyHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                            }
                        }
                    }
                }
                else {
                    this.destination.x_d += this.flag_x * this.Speed;
                    this.destination.y_d += this.flag_y * this.Speed;
                    if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) >= this.Speed * Math.abs(this.flag_x) && Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) >= this.Speed * Math.abs(this.flag_y)) {
                        this.legacyHeight = -1;
                    }
                    else {
                        if (this.flag_x == 0) {
                            this.legacyHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                        }
                        else {
                            this.legacyHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                        }
                    }
                }
            }else{
                this.full=1;
            }
            this.deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
            this.deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
            this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
            this.flag_x = this.deta_x / this.deta;
            this.flag_y = this.deta_y / this.deta;
            if (this.paused == 1) {
                if (Math.abs(this.firstX - this.cells[0].x_cell) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.firstY - this.cells[0].y_cell) >= this.LineHeight * Math.abs(this.flag_y)) {
                    this.firstX = this.cells[0].x_cell;
                    this.firstY = this.cells[0].y_cell;
                    this.beginHeight = 0;
                }
                else {
                    if (this.beginHeight < this.LineHeight) {
                        if (this.beginHeight + this.Speed >= this.LineHeight) {
                            this.beginHeight = this.LineHeight;
                        }
                        else {
                            this.beginHeight += this.Speed;
                        }
                        this.firstX = this.cells[0].x_cell;
                        this.firstY = this.cells[0].y_cell;
                    }
                    else if (this.beginHeight == this.LineHeight) {
                        this.firstX += this.flag_x * this.Speed;
                        this.firstY += this.flag_y * this.Speed;
                    }
                }
            }

        },
        draw: function () {
            var canvas = this.core.canvas;

            this.x_now = this.firstX;
            this.y_now = this.firstY;
            this.deta_x = this.cells[1].x_cell - this.cells[0].x_cell;
            this.deta_y = this.cells[1].y_cell - this.cells[0].y_cell;
            this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
            var myEnd = false;
            this.flag_x = this.deta_x / this.deta;
            this.flag_y = this.deta_y / this.deta;

            canvas.beginPath();

            canvas.lineJoin = 'round';
            this.endHeight = 0;
            canvas.lineWidth = this.GDwidth / 4;
            canvas.strokeStyle = "#333";

            if (this.beginHeight > 0) {
                canvas.moveTo(this.x_now, this.y_now);
                canvas.lineTo(this.x_now + this.flag_x * this.beginHeight, this.y_now + this.flag_y * this.beginHeight);
            }

            this.x_now += this.flag_x * (this.beginHeight + this.LineHeight);
            this.y_now += this.flag_y * (this.beginHeight + this.LineHeight);
            for (var i = 1; i <= this.cellIndex; i++) {
                myEnd = false;
                this.deta_x = this.cells[i].x_cell - this.cells[i - 1].x_cell;
                this.deta_y = this.cells[i].y_cell - this.cells[i - 1].y_cell;
                this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                this.flag_x = this.deta_x / this.deta;
                this.flag_y = this.deta_y / this.deta;

                if (this.endHeight > 0) {
                    canvas.moveTo(this.cells[i - 1].x_cell - this.flag_x * (this.GDwidth / 8), this.cells[i - 1].y_cell - this.flag_y * (this.GDwidth / 8));
                    canvas.lineTo(this.cells[i - 1].x_cell + this.flag_x * (this.endHeight ), this.cells[i - 1].y_cell + this.flag_y * this.endHeight);
                    this.x_now = this.cells[i - 1].x_cell + this.flag_x * (this.LineHeight + this.endHeight);
                    this.y_now = this.cells[i - 1].y_cell + this.flag_y * (this.LineHeight + this.endHeight);
                }
                if (this.endHeight < 0) {
                    this.endHeight = Math.abs(this.endHeight);
                    this.x_now = this.cells[i - 1].x_cell + this.flag_x * (this.endHeight);
                    this.y_now = this.cells[i - 1].y_cell + this.flag_y * (this.endHeight);
                }
                if (this.endHeight == 0 && i != 1) {
                    this.x_now = this.cells[i - 1].x_cell;
                    this.y_now = this.cells[i - 1].y_cell;
                }
                while (Math.abs(this.x_now - this.cells[i].x_cell) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) >= this.LineHeight * Math.abs(this.flag_y)) {
                    canvas.moveTo(this.x_now, this.y_now);
                    canvas.lineTo(this.x_now + this.flag_x * this.LineHeight, this.y_now + this.flag_y * this.LineHeight);
                    this.x_now += this.flag_x * this.LineHeight;
                    this.y_now += this.flag_y * this.LineHeight;
                    if (Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(this.flag_y)) {
                        if (this.flag_x == 0) {
                            this.endHeight = Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(this.flag_y) - this.LineHeight;
                        }
                        else {
                            this.endHeight = Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(this.flag_x) - this.LineHeight;
                        }
                        //this.endHeight = (Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)))/2;
                        myEnd = true;
                        break;
                    }
                    else {
                        this.x_now += this.flag_x * this.LineHeight;
                        this.y_now += this.flag_y * this.LineHeight;
                    }
                }
                if (myEnd == false && Math.abs(this.x_now - this.cells[i].x_cell) <= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.cells[i].y_cell) <= this.LineHeight * Math.abs(this.flag_y)) {
                    canvas.moveTo(this.x_now, this.y_now);
                    canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
                    //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
                    if (this.flag_x == 0) {
                        this.endHeight = this.LineHeight - Math.abs(this.y_now - this.cells[i].y_cell) / Math.abs(this.flag_y);
                    }
                    else {
                        this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell) / Math.abs(this.flag_x);
                    }
                    //this.endHeight = ( this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)) - Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell)) / 2;

                }
            }
            //管道的最前片段现在是实线，后续可以改
            if (this.cellIndex < this.cells.length - 1) {
                canvas.moveTo(this.cells[this.cellIndex].x_cell,this.cells[this.cellIndex].y_cell);
                canvas.lineTo(this.destination.x_d,this.destination.y_d);
                //myEnd = false;
                //this.deta_x = this.destination.x_d - this.cells[this.cellIndex].x_cell;
                //this.deta_y = this.destination.y_d - this.cells[this.cellIndex].y_cell;
                //this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                //if (this.deta > 0) {
                //    this.flag_x = this.deta_x / this.deta;
                //    this.flag_y = this.deta_y / this.deta;
                //    if (this.endHeight > 0) {
                //        canvas.moveTo(this.cells[this.cellIndex].x_cell - this.flag_x * (this.GDwidth / 8), this.cells[this.cellIndex].y_cell - this.flag_y * (this.GDwidth / 8));
                //        canvas.lineTo(this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight ), this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight);
                //        this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * (this.LineHeight + this.endHeight);
                //        this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * (this.LineHeight + this.endHeight);
                //    }
                //    if (this.endHeight < 0) {
                //        this.endHeight = Math.abs(this.endHeight);
                //        this.x_now = this.cells[this.cellIndex].x_cell + this.flag_x * (this.endHeight);
                //        this.y_now = this.cells[this.cellIndex].y_cell + this.flag_y * (this.endHeight);
                //    }
                //    if (this.endHeight == 0 && this.cellIndex > 0) {
                //        this.x_now = this.cells[this.cellIndex].x_cell;
                //        this.y_now = this.cells[this.cellIndex].y_cell;
                //    }
                //    if (this.cellIndex == 0) {
                //        this.x_now = this.firstX;
                //        this.y_now = this.firstY;
                //        if (this.beginHeight > 0) {
                //            canvas.moveTo(this.x_now, this.y_now);
                //            canvas.lineTo(this.x_now + this.flag_x * this.beginHeight, this.y_now + this.flag_y * this.beginHeight);
                //        }
                //        this.x_now += this.flag_x * (this.beginHeight + this.LineHeight);
                //        this.y_now += this.flag_y * (this.beginHeight + this.LineHeight);
                //    }

                    //while (Math.abs(this.x_now - this.destination.x_d) >= this.LineHeight * Math.abs(this.flag_x) && Math.abs(this.y_now - this.destination.y_d) >= this.LineHeight * Math.abs(this.flag_y)) {
                    //    canvas.moveTo(this.x_now, this.y_now);
                    //    canvas.lineTo(this.x_now + this.flag_x * this.LineHeight, this.y_now + this.flag_y * this.LineHeight);
                    //    this.x_now += this.flag_x * this.LineHeight;
                    //    this.y_now += this.flag_y * this.LineHeight;
                        //if (Math.abs(this.x_now - this.destination.x_d)< this.LineHeight * Math.abs(this.flag_x)||Math.abs(this.y_now - this.destination.y_d) < this.LineHeight * Math.abs(this.flag_y)) {
                        //    if (this.flag_x == 0) {
                        //        this.endHeight = Math.abs(this.y_now - this.destination.y_d) / Math.abs(this.flag_y) - this.LineHeight;
                        //    }
                        //    else {
                        //        this.endHeight = Math.abs(this.x_now - this.destination.x_d) / Math.abs(this.flag_x) - this.LineHeight;
                        //    }
                        //    //this.endHeight = (Math.abs(this.y_now - this.cells[i].y_cell) + Math.abs(this.x_now - this.cells[i].x_cell) - this.LineHeight * (Math.abs(this.flag_y) + Math.abs(this.flag_x)))/2;
                        //    myEnd = true;
                        //    break;
                        //}
                        //else {
                        //    this.x_now += this.flag_x * this.LineHeight;
                        //    this.y_now += this.flag_y * this.LineHeight;
                        //}
                    //}
                    //if (myEnd == false && Math.abs(this.x_now - this.destination.x_d) < this.LineHeight * Math.abs(this.flag_x) || Math.abs(this.y_now - this.destination.y_d) < this.LineHeight * Math.abs(this.flag_y)) {
                    //    canvas.moveTo(this.x_now, this.y_now);
                    //    canvas.lineTo(this.destination.x_d, this.destination.y_d);
                    //    //this.endHeight = this.LineHeight - Math.abs(this.x_now - this.cells[i].x_cell)*flag.x_flag - Math.abs(this.y_now - this.cells[i].y_cell)*flag.y_flag;
                    //    if (this.flag_x == 0) {
                    //        this.endHeight = this.LineHeight - Math.abs(this.y_now - this.destination.y_d) / Math.abs(this.flag_y);
                    //    }
                    //    else {
                    //        this.endHeight = this.LineHeight - Math.abs(this.x_now - this.destination.x_d) / Math.abs(this.flag_x);
                    //    }
                    //}
                }

            //}

            canvas.stroke();
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("GD", constructor_gd, "init");

var constructor_gd1 = function (settings, core) {

    return oCanvas.extend({
        core: core,
        shapeType: "rectangular",

        init: function () {
            this.cellIndex = 0;
            this.destination.x_d = this.cells[0].x_cell;
            this.destination.y_d = this.cells[0].y_cell;

            this.endHeight = -1;
        },
        advance: function () {
            if(this.paused==1){
                if (this.cellIndex < this.cells.length - 1) {
                    this.deta_x = this.cells[this.cellIndex + 1].x_cell - this.cells[this.cellIndex].x_cell;
                    this.deta_y = this.cells[this.cellIndex + 1].y_cell - this.cells[this.cellIndex].y_cell;
                    this.deta = Math.sqrt(this.deta_x * this.deta_x + this.deta_y * this.deta_y);
                    this.flag_x = this.deta_x / this.deta;
                    this.flag_y = this.deta_y / this.deta;
                    if (this.endHeight >= 0) {
                        this.cellIndex++;
                        if (this.cellIndex < this.cells.length - 1) {
                            this.destination.x_d = this.cells[this.cellIndex].x_cell + this.flag_x * this.endHeight;
                            this.destination.y_d = this.cells[this.cellIndex].y_cell + this.flag_y * this.endHeight;
                            if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) > this.Speed * Math.abs(this.flag_x) || Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) > this.Speed * Math.abs(this.flag_y)) {
                                this.endHeight = -1;
                            }
                            else {
                                if (this.flag_x == 0) {
                                    this.endHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                                }
                                else {
                                    this.endHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                                }
                            }
                        }
                    }
                    else {
                        this.destination.x_d += this.flag_x * this.Speed;
                        this.destination.y_d += this.flag_y * this.Speed;
                        if (Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) >= this.Speed * Math.abs(this.flag_x) && Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) >= this.Speed * Math.abs(this.flag_y)) {
                            this.endHeight = -1;
                        }
                        else {
                            if (this.flag_x == 0) {
                                this.endHeight = this.Speed - Math.abs(this.destination.y_d - this.cells[this.cellIndex + 1].y_cell) / Math.abs(this.flag_y);
                            }
                            else {
                                this.endHeight = this.Speed - Math.abs(this.destination.x_d - this.cells[this.cellIndex + 1].x_cell) / Math.abs(this.flag_x);
                            }
                        }
                    }
                }
                else{
                    this.full=1;
                }
            }
        },
        draw: function () {
            var canvas = this.core.canvas;
            canvas.beginPath();
            canvas.lineJoin = 'round';
            canvas.lineWidth = this.GDwidth / 2;
            canvas.strokeStyle = "#fff";

            canvas.moveTo(this.cells[0].x_cell, this.cells[0].y_cell);
            for (var i = 1; i <= this.cellIndex; i++) {
                canvas.lineTo(this.cells[i].x_cell, this.cells[i].y_cell);
            }
            canvas.lineTo(this.destination.x_d, this.destination.y_d);
            canvas.stroke();
            canvas.closePath();
        }
    }, settings);
};
oCanvas.registerDisplayObject("GD1", constructor_gd1, "init");