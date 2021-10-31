document.addEventListener(`DOMContentLoaded`, () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch(`productos.json`);
        const data = await res.json();
        console.log(data)
    } catch (error) {
        
    }
}