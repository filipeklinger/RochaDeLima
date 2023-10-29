export function openWhatsapp(msg?: string) {
    const phone = "+5521975749247";
    const msgUrlEncoded = msg ? encodeURI(msg) : "";
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msgUrlEncoded}`, "_blank");
}