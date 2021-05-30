declare function calcCircleArea(radius);

module Module1.Calculator {
    export class CalcAreas {
        getArea(radius) {

            var area = calcCircleArea(radius);
            console.log("Area " + area);
            return area;
        }
    }
}