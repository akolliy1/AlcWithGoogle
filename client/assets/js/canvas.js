const canvas = document.querySelector('canvas');

let logo = canvas.getContext('2d');
logo.beginPath()
logo.moveTo(270, 20)
logo.lineTo(20, 20)
logo.strokeStyle = 'white'
logo.lineTo(40, 120)
// logo.lineTo(80, 120)
logo.lineTo(270, 20)

logo.stroke()

logo.beginPath()
logo.strokeStyle = 'green'
logo.arc(270, 20, 20, 0, 30, false)
logo.fillStyle = 'white'
logo.fill()
logo.rotate(20)
logo.stroke()