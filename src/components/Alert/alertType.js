export function getAlertType(type) {
    switch (type) {
        case "danger":
            return {
                icon: "⚠",
                color: "#857824",
                background_color: "#FFF7C3"
            }

        case "success": 
            return {
                icon: "✅",
                color: "#2F8849",
                background_color: "#C5FFC3"
            }

        case "error":
            return {
                icon: "❗",
                color: "#882F2F",
                background_color: "#FFC3C3"
            }

        case "promo":
            return {
                icon: "🔥",
                color: "#2F6888",
                background_color: "#C3F1FF"
            }

        default:
            break;
    }
}