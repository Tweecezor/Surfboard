ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.93848, 30.31248],
        zoom: 12,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    burger1 = new ymaps.Placemark(
      [59.93848, 30.31248],
      {
        hintContent: "Магазин бургеров №1",
        balloonContent: "BurgerShop#1",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/icons/map-marker.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
      }
    ),
    burger2 = new ymaps.Placemark(
      [59.9, 30.36],
      {
        hintContent: "Магазин бургеров №2",
        balloonContent: "BurgerShop#2",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/icons/map-marker.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
      }
    ),
    burger3 = new ymaps.Placemark(
      [59.96, 30.32],
      {
        hintContent: "Магазин бургеров №3",
        balloonContent: "BurgerShop#3",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/icons/map-marker.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
      }
    ),
    burger4 = new ymaps.Placemark(
      [59.94, 30.27],
      {
        hintContent: "Магазин бургеров №3",
        balloonContent: "BurgerShop#3",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/icons/map-marker.svg",
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
      }
    );
  myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(burger1).add(burger2).add(burger3).add(burger4);
}
