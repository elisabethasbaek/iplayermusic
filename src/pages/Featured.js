import FeaturedCard from "../components/FeaturedCard"; /* component */
import MainNav from "../components/MainNav"; /* component */
import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import "../Variables.css"; /* css */
import "../components/style/Main.css"; /* css */
import TokenContext from "../TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as Sentry from "@sentry/react";

export default function Featured(props) {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState({});

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then(function (response) {
          setContent(response.data);
          //console.log(content.playlists?.items);
        });
    },
    [token, setContent]
  );

  return (
    <main className="main featured">
      <BreadcrumbNavigation color="var(--secondaryColor)">
        Featured
      </BreadcrumbNavigation>
      <Heading>Featured</Heading>

        {content.playlists?.items.map(function (item) {
          return (
            <Sentry.ErrorBoundary>
              <FeaturedCard
                id={item.id}
                key={item.id}
                image={item.images[0].url}
                artist={item.name}
                category={item.type}
              />
            </Sentry.ErrorBoundary>
          );
        })}

      <MainNav filterWifi="brightness(10000%)" />
    </main>
  );
}
