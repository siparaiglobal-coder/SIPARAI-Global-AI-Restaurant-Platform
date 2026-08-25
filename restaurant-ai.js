const restaurantAI = {
  restaurantName: "SIPARAI Restaurant",

  welcomeMessage:
    "مرحبًا! 👋 أنا موظف SIPARAI AI. كيف يمكنني مساعدتك؟",

  menu: [
    {
      name: "برغر كلاسيك",
      price: 180,
      currency: "TRY"
    },
    {
      name: "وجبة دجاج",
      price: 220,
      currency: "TRY"
    },
    {
      name: "بطاطا",
      price: 90,
      currency: "TRY"
    }
  ],

  respond(message) {
    const text = message.toLowerCase();

    if (
      text.includes("مرحبا") ||
      text.includes("السلام") ||
      text.includes("اهلا")
    ) {
      return this.welcomeMessage;
    }

    if (
      text.includes("منيو") ||
      text.includes("قائمة") ||
      text.includes("اكل") ||
      text.includes("طعام")
    ) {
      return this.showMenu();
    }

    if (
      text.includes("سعر") ||
      text.includes("كم")
    ) {
      return this.showPrices();
    }

    if (
      text.includes("طلب") ||
      text.includes("اطلب")
    ) {
      return "بالتأكيد! 🍽️ أخبرني ما الذي تريد طلبه.";
    }

    return (
      "أفهم أنك تسأل عن: " +
      message +
      "\n\nيمكنني مساعدتك في المنيو والأسعار والطلبات."
    );
  },

  showMenu() {
    return (
      "🍽️ منيو المطعم:\n\n" +
      this.menu
        .map(
          item =>
            `${item.name} — ${item.price} ${item.currency}`
        )
        .join("\n")
    );
  },

  showPrices() {
    return (
      "💰 الأسعار:\n\n" +
      this.menu
        .map(
          item =>
            `${item.name}: ${item.price} ${item.currency}`
        )
        .join("\n")
    );
  }
};

function askRestaurantAI(message) {
  return restaurantAI.respond(message);
}

if (typeof module !== "undefined") {
  module.exports = {
    restaurantAI,
    askRestaurantAI
  };
}
