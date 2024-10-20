import React from "react";
import "./Cards.css";
import data from "../../PricingCardsData/PricingCards.json"

const Cards = () => {
  return (
    <>
      {data && data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <div
              className="card"
              key={index}
              style={{
                background:
                  item.button === "Continue with Booster"
                    ? "linear-gradient(180deg, #1E429F 0%, #0B1839 100%)"
                    : "white"
              }}
            >
              <div
                className="content"
                style={{
                  background:
                    item.button === "Continue with Booster"
                      ? "linear-gradient(180deg, #1E429F 0%, #0B1839 100%)"
                      : "white"
                }}
              >
                <div
                  className="heading"
                  style={{
                    color:
                      item.button === "Continue with Booster"
                        ? "white"
                        : "#1F2A37"
                  }}
                >
                  <div className="cardTitle">{item.title}</div>
                  <div className="priceingHeading">
                    <h1 className="priceingHeadingText">
                      {item.pricingHeading.plan}
                      {(item.title === "Growth" || item.title === "Booster")
                        ? <span style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          paddingLeft:"7px",
                          textAlign: "center",
                          color:
                          item.title === "Booster"? "white" :"gray",
                          }}>/month</span>
                        : null}
                    </h1>
                  </div>
                  <p className="additionalInfo"
                  style={{
                    color:
                      item.button === "Continue with Booster"
                        ? "lightGreen"
                        : "#6b7280"
                  }}
                  >
                    {item.pricingHeading.additionalInfo}
                  </p>
                </div>

                <ul className="featuresList">
                  {item.lists1.map((feature, i) => {
                    return (
                      <li className="featureListItem" key={i}>
                        <span className="featureItemtxt"
                        style={{
                          color:
                            item.button === "Continue with Booster"
                              ? "white"
                              : "#6b7280"
                        }}
                        >
                          <span style={{ paddingRight: "5px" }}>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9974 9.61385 20.0483 7.32619 18.3611 5.63893C16.6738 3.95167 14.3861 3.00262 12 3ZM15.3363 10.8363L11.7363 14.4363C11.5675 14.605 11.3387 14.6998 11.1 14.6998C10.8614 14.6998 10.6325 14.605 10.4637 14.4363L8.6637 12.6363C8.49976 12.4666 8.40905 12.2392 8.4111 12.0032C8.41315 11.7673 8.5078 11.5415 8.67467 11.3747C8.84153 11.2078 9.06727 11.1131 9.30324 11.1111C9.53922 11.109 9.76656 11.1998 9.9363 11.3637L11.1 12.5274L14.0637 9.5637C14.2334 9.39976 14.4608 9.30904 14.6968 9.31109C14.9327 9.31314 15.1585 9.40779 15.3253 9.57466C15.4922 9.74153 15.5869 9.96726 15.5889 10.2032C15.591 10.4392 15.5002 10.6666 15.3363 10.8363Z"
                                style={{
                                  fill:
                                    item.button === "Continue with Booster"
                                      ? "white"
                                      : "#1F2A37"
                                }}
                              />
                            </svg>
                          </span>

                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <hr className="horizontalLine" />
                <div className="featuresList2">
                  <ul>
                    {item.lists2.map((feature2, i) => (
                      <li className="featureListItem" key={i}>
                        <span className="featureItemtxt"
                        style={{
                          color:
                            item.button === "Continue with Booster"
                              ? "white"
                              : "#6b7280"
                        }}
                        >{feature2}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="cardBtn"
                  style={{
                    background:
                      item.button === "Continue with Booster"
                        ? "white"
                        : "#1a56db",
                    color:
                      item.button === "Continue with Booster"
                        ? "black"
                        : "white",
                  }}
                >
                  <span className="btnText">{item.button}</span>
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1>No Data Available</h1>
      )}
    </>
  );
};

export default Cards;
