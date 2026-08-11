export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Cahaya Baru Aki 2",
    url: "https://domainkamu.com",
    telephone: "+6281809833193",

    address: {
        "@type": "PostalAddress",
        streetAddress: "Jln Arwinda No.49, Tajurhalang",
        addressLocality: "Cianjur",
        addressRegion: "Jawa Barat",
        postalCode: "43281",
        addressCountry: "ID",
    },

    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
    ],
};