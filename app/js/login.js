import { footer } from "../components/footer.js";



document.addEventListener("DOMContentLoaded", () => {
    let a = document.getElementById("main")
    a.innerHTML+=footer()
});