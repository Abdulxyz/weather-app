function getWeather(event) {

    event.preventDefault()

    const input = document.getElementById('inputLocation')

    if (input.checkValidity()) {

        console.log("input validated");

        const baseUrl = "http://api.weatherapi.com/v1/current.json?"
        const key = "key=" + "4f3b6d15ed024685a80120020232406"

        const locationInput = document.getElementById('inputLocation')
        const loc = locationInput.value
        let airQuality = "no"

        const url = baseUrl + key + "&q=" + loc + "&aqi=" + airQuality

        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => {

                // const weatherLocation = JSON.stringify()
                // const weatherCondition = JSON.stringify(data.current.condition.text)
                // const weatherTemp = JSON.stringify(data.current.temp_c)

                const headingElement = document.getElementById('heading')
                const localTimeElement = document.getElementById('local-time')
                const locationElement = document.getElementById('location')
                const conditionElement = document.getElementById('conditon')
                const temperatureElement = document.getElementById('temperature')
                const imageElement = document.getElementById('weatherImg')


                localTimeElement.innerText = `${data.location.localtime}`
                locationElement.innerText = `${data.location.name}` + ", "
                    + `${data.location.country}`
                conditionElement.innerText = `${data.current.condition.text}`
                temperatureElement.innerText = `${data.current.temp_c}\u00B0C`
                imgUrl = `${data.current.condition.icon}`
                imageElement.setAttribute("src", "http:" + imgUrl)
                headingElement.innerText = "Weather at " + `${data.location.name}`

            })
            .catch(error => {
                console.log("Error: ", error)
            })

    } else {
        event.preventDefault()
        console.log("input is empty");
        alert("Location is empty")
    }

}