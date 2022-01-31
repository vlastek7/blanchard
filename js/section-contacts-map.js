ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map(
    "section-contacts-map",
    {
      center: [55.756932091729546,37.601869582423596],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "330px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "250px", right: "20px" }
    }
  );

  var myPlacemark = new ymaps.Placemark([55.758175357498054,37.600796698817625 ], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/mark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}
