// Auto-generated from simulator. Do not edit.
declare namespace PiCode {
    /**
     * Anda uma casa para frente
     */
    //% weight=100
    //% blockId=turtleForwardField block="Andar uma casa para frente"
    //% shim=PiCode::forwardFieldAsync promise
    function forwardField(): void;

    /**
     * Anda uma casa para trás
     */
    //% weight=100
    //% blockId=turtleBackwardField block="Andar uma casa para trás"
    //% shim=PiCode::backwardFieldAsync promise
    function backwardField(): void;

    /**
     * Girar para a direita
     */
    //% weight=99
    //% blockId=turtleTurnRightField block="Girar para a direita"
    //% shim=PiCode::turnRightFieldAsync promise
    function turnRightField(): void;

    /**
     * Girar para a esquerda
     */
    //% weight=99
    //% blockId=turtleTurnLeftField block="Girar para a esquerda"
    //% shim=PiCode::turnLeftFieldAsync promise
    function turnLeftField(): void;

    /**
     * Girar 45 para a direita
     */
    //% weight=98
    //% blockId=turtleTurnHalfRightField block="Girar 45 para a direita"
    //% shim=PiCode::turnHalfRightFieldAsync promise
    function turnHalfRightField(): void;

    /**
     * Girar 45 para a esquerda
     */
    //% weight=98
    //% blockId=turtleTurnHalfLeftField block="Girar 45 para a esquerda"
    //% shim=PiCode::turnHalfLeftFieldAsync promise
    function turnHalfLeftField(): void;

    // /**
    //  * Move the turtle forward
    //  * @param distance distance to move, eg: 80
    //  */
    // //% weight=90
    // //% blockId=turtleForward block="forward %distance steps"
    // export async function forwardAsync(distance: number) {
    //     await board().move(distance);
    // }
    // /**
    //  * Move the turtle backward
    //  * @param distance distance to move, eg: 50
    //  */
    // //% weight=85
    // //% blockId=turtleBackward block="backward %distance steps"
    // export async function backwardAsync(distance: number) {
    //     await board().move(-distance);
    // }
    // /**
    //  * Turn the turtle to the right
    //  * @param angle degrees to turn, eg: 90
    //  */
    // //% weight=80
    // //% blockId=turtleTurnRight block="turn right by %angle degrees"
    // //% angle.min=0 angle.max=360
    // export async function turnRightAsync(angle: number) {
    //     await board().turn(angle);
    // }
    // /**
    //  * Turn the turtle to the left
    //  * @param angle degrees to turn, eg: 90
    //  */
    // //% weight=75
    // //% blockId=turtleTurnLeft block="turn left by %angle degrees"
    // //% angle.min=0 angle.max=360
    // export async function turnLeftAsync(angle: number) {
    //     await board().turn(-angle);
    // }
    /**
     * Desligar caneta
     */
    //% weight=70
    //% blockId=turtlePenUp block="Desligar caneta"
    //% shim=PiCode::penUp
    function penUp(): void;

    /**
     * Ligar a caneta
     */
    //% weight=65
    //% blockId=turtlePenDown block="Ligar a caneta"
    //% shim=PiCode::penDown
    function penDown(): void;

}
declare namespace time {
    /**
     * Wait for some time
     * @param delay time to wait in seconds, eg: 5
     */
    //% weight=90
    //% blockId=timeWait block="wait for %delay seconds"
    //% shim=time::waitAsync promise
    function wait(delay: number): void;

    /**
     * Return the current date and time as seconds since epoch
     */
    //% weight=80
    //% blockId=timeNow block="current date and time"
    //% shim=time::now
    function now(): number;

    /**
     * Return the year of the given timestamp
     * @param ts timestamp
     */
    //% weight=78
    //% blockId=timeYear block="year of %ts"
    //% shim=time::year
    function year(ts: number): number;

    /**
     * Return the month of the given timestamp
     * @param ts timestamp
     */
    //% weight=77
    //% blockId=timeMonth block="month of %ts"
    //% shim=time::month
    function month(ts: number): number;

    /**
     * Return the day of the given timestamp
     * @param ts timestamp
     */
    //% weight=76
    //% blockId=timeDay block="day of %ts"
    //% shim=time::day
    function day(ts: number): number;

    /**
     * Return the hours of the given timestamp
     * @param ts timestamp
     */
    //% weight=75
    //% blockId=timeHours block="hours of %ts"
    //% shim=time::hours
    function hours(ts: number): number;

    /**
     * Return the minutes of the given timestamp
     * @param ts timestamp
     */
    //% weight=74
    //% blockId=timeMinutes block="minutes of %ts"
    //% shim=time::minutes
    function minutes(ts: number): number;

    /**
     * Return the seconds of the given timestamp
     * @param ts timestamp
     */
    //% weight=73
    //% blockId=timeSeconds block="seconds of %ts"
    //% shim=time::seconds
    function seconds(ts: number): number;

}

// Auto-generated. Do not edit. Really.
