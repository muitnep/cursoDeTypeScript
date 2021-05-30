window.onload = () => {

    /*
    var dayOfWeek: number;
    var textOut: string;

    dayOfWeek = 5;

    switch (dayOfWeek) {
        case 0:
            textOut = "Domingo";
            break;

        case 1:
            textOut = "Segunda-Feira";
            break;

        case 2:
            textOut = "Terça-Feira";
            break;

        case 3:
            textOut = "Quarta-Feira";
            break;

        case 4:
            textOut = "Quinta-Feira";
            break;

        case 5:
            textOut = "Sexta-Feira";
            break;

        case 6:
            textOut = "Sábado"

        default:
            break;
    }
    */
    var color: string = "Blue";
    var textOut2: string;

    switch (color) {
        case "Red":
            textOut2 = "The color selected is RED";
            break;

        case "Green":
            textOut2 = "The color selected is GREEN";
            break;
        case "Yellow":
            textOut2 = "The color selected is YELLOW";
            break;

        case "Blue":
            textOut2 = "The color selected is BLUE ";
            break;

        case "Magenta":
            textOut2 = "The color selected is MAGENTA";
            break;

        default:
            break;
    }

    document.getElementById('content').innerHTML = textOut2;
}