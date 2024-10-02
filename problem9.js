async function fetchData(API) {
    try {
        let response = await fetch(API);

        if (!response.ok) {
            throw new Error(`Serverda xato: ${response.status}`);
        }

        let data = await response.json();

        return data;
    } catch (error) {
        console.error("Xatolik yuz berdi:", error.message);
        return null;  
        
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
        if (data) {
            console.log("API'dan olingan ma'lumot:", data);
        } else {
            console.log("Ma'lumotni olishda xatolik yuz berdi.");
        }
    });
