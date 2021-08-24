/* eslint-disable no-mixed-operators */
export const getDay = lastname => {
    let str = lastname.toUpperCase().substr(0, 3);

    if (str >= 'A' && str <= 'GRO') {
        return "Viernes 27"
    } else if (str >= 'GRU' && str <= 'NUÑ') {
        return "Sabado 28"
    } else if (str >= 'O' && str <= 'ZUL') {
        return "Lunes 30"
    }

    return "hubo un error"
}

export const getHour = lastname => {
    let str = getForNumber(lastname.toUpperCase());

    if (str >= '1' && str <= '1122'
        || str >= '71922' && str <= '8514'
        || str >= '16' && str <= '17120') {
        return "8:20 A.M."
    } else if (str >= '1123' && str <= '11822'
        || str >= '8516' && str <= '92122'
        || str >= '17121' && str <= '17517') {
        return "8:40 A.M."
    } else if (str >= '1191' && str <= '2120'
        || str >= '101' && str <= '11249'
        || str >= '17518' && str <= '17520') {
        return "9:00 A.M."
    } else if (str >= '2121' && str <= '21619'
        || str >= '121' && str <= '121617'
        || str >= '17521' && str <= '172227') {
        return "9:20 A.M."
    } else if (str >= '21623' && str <= '3114'
        || str >= '121618' && str <= '13115'
        || str >= '18225' && str <= '19520') {
        return "9:40 A.M."
    } else if (str >= '3115' && str <= '352'
        || str >= '13116' && str <= '13119'
        || str >= '19521' && str <= '19927') {
        return "10:00 A.M."
    } else if (str >= '353' && str <= '3195'
        || str >= '13120' && str <= '13510'
        || str >= '19161' && str <= '19164') {
        return "10:20 A.M."
    } else if (str >= '3199' && str <= '452810'
        || str >= '13511' && str <= '13919'
        || str >= '19165' && str <= '20113') {
        return "10:40 A.M."
    } else if (str >= '452812' && str <= '452816'
        || str >= '13920' && str <= '131619'
        || str >= '20114' && str <= '20115') {
        return "11:00 A.M."
    } else if (str >= '452817' && str <= '4927'
        || str >= '131620' && str <= '132215'
        || str >= '20116' && str <= '201621') {
        return "11:20 A.M."
    } else if (str >= '416' && str <= '52017'
        || str >= '201622' && str <= '21512') {
        return "11:40 A.M."
    } else if (str >= '52018' && str <= '6512'
        || str >= '21513' && str <= '222322') {
        return "12:00 P.M."
    } else if (str >= '6513' && str <= '6199'
        || str >= '231' && str <= '23119') {
        return "12:20 P.M."
    } else if (str >= '61916' && str <= '7520'
        || str >= '23120' && str <= '231627') {
        return "12:40 P.M."
    } else if (str >= '791' && str <= '71916'
        || str >= '245' && str <= '272212') {
        return "1:00 P.M."
    }

    return "Hubo un error"
}

export const getPosgradoDay = () => {
    return "Sabado 28"
}

export const getPosgradoHour = (lastname) => {
    let str = getForNumber(lastname.toUpperCase());

    if(str >= '1' && str <= '4512') {
        return "12:20 P.M."
    } else if(str => '4513' && str <= '13127') {
        return "12:40 P.M."
    } else if(str => '135' && str <= '19163') {
        return "1:00 P.M."
    } else if(str => '19164' && str <= '272212') {
        return "1:20 P.M."
    }

    return "Hubo un error"
}

const getForNumber = lastname => {
    var name = [lastname.substr(0, 1), lastname.substr(1, 1), lastname.substr(2, 1)];

    if (name[2] === " ") {
        name[3] = lastname.substr(3, 1)
    }

    let sum = '';
    name.forEach(element => {
        if (element === 'A')
            sum += '1';
        else if (element === 'B')
            sum += '2';
        else if (element === 'C')
            sum += '3';
        else if (element === 'D')
            sum += '4';
        else if (element === 'E')
            sum += '5';
        else if (element === 'F')
            sum += '6';
        else if (element === 'G')
            sum += '7';
        else if (element === 'H')
            sum += '8';
        else if (element === 'I')
            sum += '9';
        else if (element === 'J')
            sum += '10';
        else if (element === 'K')
            sum += '11';
        else if (element === 'L')
            sum += '12';
        else if (element === 'M')
            sum += '13';
        else if (element === 'N')
            sum += '14';
        else if (element === 'Ñ')
            sum += '15';
        else if (element === 'O')
            sum += '16';
        else if (element === 'P')
            sum += '17';
        else if (element === 'Q')
            sum += '18';
        else if (element === 'R')
            sum += '19';
        else if (element === 'S')
            sum += '20';
        else if (element === 'T')
            sum += '21';
        else if (element === 'U')
            sum += '22';
        else if (element === 'V')
            sum += '23';
        else if (element === 'W')
            sum += '24';
        else if (element === 'X')
            sum += '25';
        else if (element === 'Y')
            sum += '26';
        else if (element === 'Z')
            sum += '27';
        else if (element === ' ')
            sum += '28'
    });

    return sum;
}