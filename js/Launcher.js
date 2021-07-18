class Launcher {
    constructor(bodyAInput, pointBInput) {
        var options = {
            bodyA: bodyAInput,
            pointB: pointBInput,
            stiffness: 0.004,
            length: 10
        }

        this.pointB = pointBInput
        this.launcher = Constraint.create(options);
        World.add( userWorld, this.launcher);
    }

    attach(body) {
        this.launcher.bodyA = body;

    }

    fly() {
        this.launcher.bodyA = null;
    }

    display() {

        if (this.launcher.bodyA) {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48, 22, 8);
            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);

            }
            else {

                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);

            }


            pop();
        }
    }

}