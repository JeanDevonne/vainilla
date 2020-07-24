var signo = prompt('Introduce tu signo zodacal')

switch (signo.toLocaleLowerCase()){
    case 'aries':
        console.log('Excelente ocasión para planear algo especial. Hay familiares que desean verte, te extrañan.')
        break
    case 'tauro':
        console.log('Recibes muchas cosas buenas de tus seres queridos y eso te levanta el ánimo. Novedades en tu hogar.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Día lleno de bendiciones, será importante que expreses lo que sientes. Cuidado con los excesos.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Alejarte de tus amistades y familiares te hará sentir peor. No te dejes llevar por gente envidiosa.')
        break
    case 'leo':
        console.log('Aprovecha para hacer algo especial y dar lo mejor de ti. Es tiempo de perdonar y curar heridas.')
        break
    case 'virgo':
        console.log('Después de días agitados, vendría bien un paseo al aire libre. Este día, disfrútalo con las personas que amas.')
        break
    case 'Libra':
        console.log('Es importante que uno reconozca cuando ha cometido un error. Lo primordial es actuar de buena fe.')
        break
    case 'escorpio':
        console.log('Podrías sentirte confundido por un detalle inesperado. Da rienda suelta a tus emociones y sé feliz.')
        break
    case 'sagitario':
        console.log('A paso lento pero seguro, se llega lejos. Mide tus palabras, puedes ofender a ese amigo.')
        break
    case 'capricornio':
        console.log('Recupera energías, bebe más líquidos y descansa más. Eso le hará bien a tu organismo.')
        break
    case 'acuario':
        console.log('Día especial para ti, te sentirás mejor de ánimo luego de esos problemas. Confiesa tus sentimientos.')
        break
    case 'piscis':
        console.log('Sostendrás un encuentro inesperado. Será la oportunidad para solucionar tus problemas económicos.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}