import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -NavItems
 * Body
 *  -Search
 *  -Resraurent Container
 *  -Resturent Card
 *    -Dish name
 *    -Image
 *    -Restaurent Name
 *    -Cuisines
 *    -Time too Deliver
 * Footer
 *  -Copyrights
 *  -Links
 *  -Address
 *  -Contacts
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurant = (prop) => {
  const { resData } = prop;
  const { name, cuisines, avgRating, cloudinaryImageId } =
    resData?.card.card.info;
  const { deliveryTime } = resData?.card.card.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "744918",
          name: "Biryani Can - Biryanis & Bowls",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/8e43d297-b488-400a-8790-263cfb428a40_69638042-129a-495c-9f00-4d1dbfb9ff97.png",
          locality: "V N Puran Marg",
          areaName: "V N Puran Marg",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Kebabs", "Desserts"],
          avgRating: 4.1,
          veg: true,
          parentId: "757172",
          avgRatingString: "4.1",
          totalRatingsString: "1.3K+",
          promoted: true,
          adTrackingId:
            "cid=026a9062-e094-438b-b8dd-66a72747b48c~p=0~adgrpid=026a9062-e094-438b-b8dd-66a72747b48c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=744918~plpr=COLLECTION~eid=2a4df3be-5373-4d4e-babc-e2df419e25cf~srvts=1780305601696~collid=83639",
          sla: {
            deliveryTime: 63,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "60-70 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-02 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      theme: "",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "026a9062-e094-438b-b8dd-66a72747b48c",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=744918&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "296658",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_296658.JPG",
          locality: "CST Road",
          areaName: "Santacruz East",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.3,
          parentId: "434792",
          avgRatingString: "4.3",
          totalRatingsString: "5.6K+",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "40-50 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-02 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "70% OFF",
            subHeader: "UPTO ₹140",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=296658&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "772042",
          name: "Nothing But Chicken",
          cloudinaryImageId: "399776d7feaec9008871363659670c3f",
          locality: "Nehru Road",
          areaName: "Santacruz East",
          costForTwo: "₹400 for two",
          cuisines: [
            "Salads",
            "Biryani",
            "Kebabs",
            "Fast Food",
            "Healthy Food",
          ],
          avgRating: 4.3,
          parentId: "668",
          avgRatingString: "4.3",
          totalRatingsString: "1.9K+",
          promoted: true,
          adTrackingId:
            "cid=87d15403-34e1-4db1-940e-37c6a54fc32b~p=4~adgrpid=87d15403-34e1-4db1-940e-37c6a54fc32b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=772042~plpr=COLLECTION~eid=fcab8344-2ec1-4ae7-8f34-7c680de8897e~srvts=1780305601696~collid=83639",
          sla: {
            deliveryTime: 42,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-02 06:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                description: "EatRight",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                      description: "EatRight",
                      theme: "",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹118",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "87d15403-34e1-4db1-940e-37c6a54fc32b",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=772042&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1073472",
          name: "Charcoal Eats - Biryani & Beyond",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/17/57c9176a-f4c7-4ca3-8db3-d7d7a531d65f_993ef335-5221-48f3-9e70-2725d14a6dc8.jpg",
          locality: "Greater Mumbai Ward-L",
          areaName: "Kurla",
          costForTwo: "₹550 for two",
          cuisines: ["Biryani", "Kebabs", "North Indian"],
          avgRating: 4.3,
          parentId: "5338",
          avgRatingString: "4.3",
          totalRatingsString: "615",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-01 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                description: "Best in Biryani",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      theme: "",
                      imageId:
                        "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                      description: "Best in Biryani",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1073472&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "50111",
          name: "Hitchki",
          cloudinaryImageId: "f0c150eac69ee24c48ffafeb80bbfb6d",
          locality: "Bandra Kurla Complex",
          areaName: "Bandra East",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Chinese",
            "Continental",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.4,
          parentId: "3532",
          avgRatingString: "4.4",
          totalRatingsString: "3.2K+",
          promoted: true,
          adTrackingId:
            "cid=0cdb70e6-b6bf-4139-ac80-a03764e2480b~p=8~adgrpid=0cdb70e6-b6bf-4139-ac80-a03764e2480b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=50111~plpr=COLLECTION~eid=c3b030a9-0dfc-4afa-b93f-32b3a8f5c876~srvts=1780305601696~collid=83639",
          sla: {
            deliveryTime: 42,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-01 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "9.3K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "0cdb70e6-b6bf-4139-ac80-a03764e2480b",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=50111&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1201316",
          name: "1881 Dum House: Lucknow's Legacy",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/10/13/7a0c4cc9-087d-4db5-a142-8f7afa27fb4b_f0fa9ea7-4e34-45c8-a9ad-716ab92aab7f.jpg",
          locality: "Kurla Andheri Road",
          areaName: "Kurla",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Biryani", "Awadhi"],
          avgRating: 4.5,
          parentId: "687728",
          avgRatingString: "4.5",
          totalRatingsString: "243",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-02 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1201316&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "448491",
          name: "UBQ-Meals,Thalis & Bowls",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/5060c1f9-8358-4134-ad53-75c7c20e7760_448491.JPG",
          locality: "Kalina",
          areaName: "Bandra East",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Barbecue",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 3.8,
          parentId: "617376",
          avgRatingString: "3.8",
          totalRatingsString: "967",
          promoted: true,
          adTrackingId:
            "cid=0b1d73b1-8b3c-4afb-9497-d5c6f470fbf7~p=10~adgrpid=0b1d73b1-8b3c-4afb-9497-d5c6f470fbf7#ag7~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=448491~plpr=COLLECTION~eid=453e09f4-34f2-43c2-904a-07c684fcd74b~srvts=1780305601696~collid=83639",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "45-55 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-06-01 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "0b1d73b1-8b3c-4afb-9497-d5c6f470fbf7",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=448491&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <Restaurant key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
