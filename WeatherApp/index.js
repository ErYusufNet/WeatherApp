// Form ve input elemanlarını DOM'dan alıyoruz
const weatherForm = document.querySelector(".weatherForm");  // Hava durumu formu
const cityInput = document.querySelector(".cityInput");      // Şehir girişi
const card = document.querySelector(".card");                // Hava durumu bilgilerini göstereceğimiz kart
const apiKey = "91b883840080e4552a6d10f34de13cc5";  // OpenWeatherMap API anahtarınız

// Form gönderildiğinde (submit) çalışacak event listener
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();  // Sayfanın yeniden yüklenmesini engelliyoruz

    const city = cityInput.value;  // Input alanındaki şehir ismini alıyoruz

    // Şehir girilmiş mi diye kontrol ediyoruz
    if (city) {
        try {
            // Şehir girildiyse, hava durumu verisini alıyoruz
            const weatherData = await getWeatherData(city);
            // Veriyi ekranda göstermek için displayWeatherInfo fonksiyonunu çağırıyoruz
            displayWeatherInfo(weatherData);
        } catch (error) {
            // Hata alırsak konsola yazdırıyoruz ve kullanıcıya gösteriyoruz
            console.error(error);
            displayError(error.message);
        }
    } else {
        // Eğer şehir girilmemişse, kullanıcıya hata mesajı gösteriyoruz
        displayError("Please enter a city");
    }
});

// Hava durumu verisini OpenWeatherMap API'sinden almak için asenkron fonksiyon
async function getWeatherData(city) {
    // API URL'si, şehir adı ve API anahtarımızla URL oluşturuyoruz
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // API'den veri çekmek için fetch fonksiyonunu kullanıyoruz
        const response = await fetch(apiUrl);

        // Eğer yanıt başarılı değilse, hata mesajını alıyoruz
        if (!response.ok) {
            const errorData = await response.json();  // API'den gelen hata mesajını alıyoruz
            console.error("API Error:", errorData);  // Konsola hata bilgisini yazdırıyoruz
            // Hata mesajını kullanıcıya iletmek için hata fırlatıyoruz
            throw new Error(`Could not fetch weather data: ${errorData.message}`);
        }

        // API'den gelen veriyi JSON formatında alıyoruz
        const data = await response.json();
        console.log("Weather Data:", data);  // API yanıtını konsola yazdırıyoruz (debugging için)
        return data;  // Veriyi döndürüyoruz

    } catch (error) {
        // API isteği sırasında bir hata olursa, hatayı yakalıyoruz ve kullanıcıya bildiriyoruz
        console.error("Request failed:", error);
        throw new Error("Could not fetch weather data");  // Genel hata mesajı
    }
}

// API'den gelen hava durumu verilerini ekranda göstermek için fonksiyon
function displayWeatherInfo(data) {
    // Gelen verilerden gerekli bilgileri alıyoruz (şehir, sıcaklık, nem, açıklama, vs.)
    const { name: city, 
            main: { temp, humidity }, 
            weather: [{ description, id }] } = data;

    // Önceki hava durumu bilgilerini temizliyoruz
    card.textContent = "";
    card.style.display = "flex";  // Hava durumu kartını görünür yapıyoruz

    // Şehir, sıcaklık, nem, açıklama ve hava durumu simgesini ekranda göstermek için yeni elemanlar oluşturuyoruz
    const cityDisplay = document.createElement("h1");  // Şehir adını gösterecek eleman
    const tempDisplay = document.createElement("p");   // Sıcaklık bilgisini gösterecek eleman
    const humidityDisplay = document.createElement("p"); // Nem oranını gösterecek eleman
    const descDisplay = document.createElement("p");   // Hava durumu açıklamasını gösterecek eleman
    const weatherEmoji = document.createElement("p");  // Hava durumu emojisini gösterecek eleman

    // Ekranda gösterilecek olan metinleri yerleştiriyoruz
    cityDisplay.textContent = city;  // Şehir adını ekliyoruz
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;  // Sıcaklık bilgisini ekliyoruz (1 ondalıklı)
    humidityDisplay.textContent = `Humidity: ${humidity}%`;  // Nem oranını ekliyoruz
    descDisplay.textContent = description;  // Açıklama (örneğin "Clear sky") ekliyoruz
    weatherEmoji.textContent = getWeatherEmoji(id);  // Hava durumu id'sine göre emoji ekliyoruz

    // Her bir yeni elemanın sınıflarını belirliyoruz (CSS için)
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Yeni oluşturduğumuz elemanları karta ekliyoruz
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

// Hava durumu id'sine göre emoji belirleyen fonksiyon
function getWeatherEmoji(weatherId) {
    // Hava durumu kodlarına göre uygun emojiyi döndürüyoruz
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):  // Fırtına durumu
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):  // Hafif yağmur
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):  // Yağmur
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):  // Kar
            return "❄";
        case (weatherId >= 700 && weatherId < 800):  // Sisli hava
            return "🌫";
        case (weatherId === 800):  // Açık hava, güneşli
            return "☀";
        case (weatherId >= 801 && weatherId < 810):  // Hafif bulutlu
            return "☁";
        default:  // Tanımlanamayan hava durumu
            return "❓";
    }
}

// Hata mesajlarını ekranda göstermek için fonksiyon
function displayError(message) {
    // Hata mesajını gösterecek bir <p> elemanı oluşturuyoruz
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;  // Hata mesajını ekliyoruz
    errorDisplay.classList.add("errorDisplay");  // Hata mesajı için stil sınıfı ekliyoruz

    // Kartı temizliyoruz ve hata mesajını kartta gösteriyoruz
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
