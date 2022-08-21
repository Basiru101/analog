const secondHand = document.getElementById('second-hand')
const minutesHand = document.getElementById('minutes-hand')
const hourHand = document.getElementById('hours-hand')


function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6


    console.log(seconds)
    secondHand.style.transform = 'rotate('+(seconds * timeInterval)+'deg)'
    minutesHand.style.transform = 'rotate('+(minutes * timeInterval + seconds / 10)+'deg)'
    hourHand.style.transform = 'rotate('+(hours * 30 + minutes /2)+'deg)'
}

setInterval(getTime, 1000)

