//condition statements for temperature gauge
const temperature = degrees;
switch (temperature) {
    // If degree is 20 or greater
    case degrees >= 20:
        console.log("normal");
        
        break;
        //If degree is 37 or greater
        case degrees >= 37:
            console.log("above normal");
            break;
            //if degree is 40 or greater
            case degrees >= 40:
                console.log("erratic");
                break;

    default:
        break;
}
