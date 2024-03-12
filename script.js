let month = prompt("Enter your birth month for a lucky fortune: ");

month = month.toLocaleLowerCase();

let result = document.getElementById("checkpoint");

let fortuneArray = ["This month, embrace new beginnings and opportunities that come your way. Stay focused on your goals and trust in your abilities to overcome any challenges that may arise. Remember, perseverance paves the path to success.",
"Love and friendship will flourish this month. Take the time to cherish those closest to you and nurture your relationships. Open your heart to new connections and let love guide your actions.",
"This month brings opportunities for growth and transformation. Embrace change with optimism and courage. Trust in the journey ahead and believe in your ability to adapt and thrive in any situation.",
"As the flowers bloom, so too will your creativity and inspiration. Explore new ideas and projects with enthusiasm. Trust in your intuition and allow your imagination to soar to new heights.",
"This month, focus on balance and harmony in all aspects of your life. Take time to nurture your physical, emotional, and spiritual well-being. Seek inner peace and contentment, and let positivity guide your actions.",
"Adventure awaits you this month. Embrace new experiences and step out of your comfort zone. Explore new places, meet new people, and seize every opportunity for excitement and discovery.",
"This month, focus on gratitude and appreciation for the blessings in your life. Take time to reflect on your achievements and the abundance that surrounds you. Cultivate an attitude of gratitude, and watch as blessings continue to flow your way.",
"Confidence and determination will lead you to success this month. Trust in your abilities and pursue your goals with unwavering conviction. Stay focused, stay driven, and watch as your dreams become reality.",
"This month, embrace learning and personal growth. Seek out new knowledge and skills that will enrich your life and expand your horizons. Stay curious and open-minded, and embrace every opportunity for self-improvement.",
"This month, embrace the magic of new beginnings. Let go of the past and embrace the opportunities that lie ahead. Trust in the universe to guide you on your journey, and have faith that everything is unfolding exactly as it should.",
"This month, focus on gratitude and generosity. Count your blessings and extend a helping hand to those in need. Embrace the spirit of giving, and watch as kindness and compassion enrich your life and the lives of others.",
"Joy and celebration abound this month. Take time to connect with loved ones and celebrate the blessings of the past year. Embrace the holiday spirit, spread cheer wherever you go, and enter the new year with hope and optimism.",
"Embrace the fresh start of the year with enthusiasm and determination. Set ambitious goals and take the necessary steps to turn your dreams into reality. Trust in your abilities and believe in the endless possibilities that lie ahead.",
"Love will be a guiding force this month, bringing warmth and happiness into your life. Cherish the bonds you share with others and express your affection openly. Whether romantic or platonic, let love lead the way.",
"This month encourages you to embrace change and welcome new opportunities with open arms. Trust in the journey of growth and transformation, knowing that every challenge you face will lead to personal development and fulfillment.",
"As nature blooms around you, so too will your creativity and inspiration. Take this time to explore your artistic talents and express yourself freely. Trust in your unique vision and let your creativity shine brightly.",
"Focus on nurturing your mind, body, and spirit this month. Prioritize self-care and seek balance in all aspects of your life. Take time to rest, recharge, and indulge in activities that bring you joy and inner peace.",
"Adventure awaits you this month, urging you to step out of your comfort zone and explore new horizons. Embrace spontaneity and seize every opportunity for excitement and discovery. Trust in your adventurous spirit to lead you to unforgettable experiences.",
"This month invites you to cultivate gratitude and appreciation for the abundance in your life. Take time to count your blessings and express gratitude for the blessings, big and small. Cultivating an attitude of gratitude will attract even more positivity into your life.",
"Confidence and determination will be your greatest allies this month as you pursue your goals with unwavering conviction. Trust in your abilities and believe in your potential to achieve greatness. Stay focused, stay resilient, and success will be yours."
]

let fortune = fortuneArray[Math.floor((Math.random() * 20))];

if (month === "january") {
    result.innerHTML = "♑ You're a Capricorn! " + fortune;
} else if (month === "february") {
    result.innerHTML = "♒ You're a Aquarius! " + fortune;
} else if (month === "march") {
    result.innerHTML = "♓ You're a Pisces! " + fortune;
} else if (month === "april") {
    result.innerHTML = "♈ You're a Aries! " + fortune;
} else if (month === "may") {
    result.innerHTML = "♉ You're a Taurus! " + fortune;
} else if (month === "june") {
    result.innerHTML = "♉ You're a Gemini! " + fortune;
} else if (month === "july") {
    result.innerHTML = "♋ You're a Cancer! " + fortune;
} else if (month === "august") {
    result.innerHTML = "♋ You're a Leo! " + fortune;
} else if (month === "september") {
    result.innerHTML = "♍ You're a Virgo! " + fortune;
} else if (month === "october") {
    result.innerHTML = "♎ You're a Libra! " + fortune;
} else if (month === "november") {
    result.innerHTML = "♏ You're a Scorpio! " + fortune;
} else if (month === "december") {
    result.innerHTML = "♐ You're a Sagittarius! " + fortune;
} else {
    result.innerHTML = "The stars cannot tell a fortune for the provided month!";
}








 










