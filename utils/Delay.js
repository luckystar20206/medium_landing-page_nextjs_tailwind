const Delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


const RandomDelay = async () => {
    const Time = [500, 750, 1000, 1250, 1500, 2000, 2500]
    const Rand = Math.floor(Math.random() * 6)
    await Delay(Time[Rand])
}


export default RandomDelay