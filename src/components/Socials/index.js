import * as React from "react";
import { SocialIcon } from "react-social-icons";

function Socials() {
  return (
    <div id="socials">
      <ul>
        <li>
          <button className="twitch">
            <a
              href="https://www.twitch.tv/kibarake_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="inner">
                <div id="Logo">
                  <SocialIcon
                    fgColor="#ffff"
                    network="twitch"
                    url="https://www.twitch.tv/kibarake_"
                  />
                </div>
                <h2>Twitch</h2>
              </div>
            </a>
          </button>
        </li>
        <li>
          <button className="youTube">
            <a
              href="https://www.youtube.com/channel/UCe_RKz5mY41Sh1PQhI3GtaQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="inner">
                <div id="Logo">
                  <SocialIcon
                    fgColor="#ffff"
                    network="youtube"
                    url="https://www.youtube.com/channel/UCe_RKz5mY41Sh1PQhI3GtaQ"
                  />
                </div>
                <h2>YouTube</h2>
              </div>
            </a>
          </button>
        </li>
        <li>
          <button className="discord">
            <a
              href="https://discord.gg/6CDUeyaWaQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="inner">
                <div id="Logo">
                  <SocialIcon
                    fgColor="#ffff"
                    network="discord"
                    url="https://discord.gg/6CDUeyaWaQ"
                  />
                </div>
                <h2>Discord</h2>
              </div>
            </a>
          </button>
        </li>
        <li>
          <button className="tiktok">
            <a
              href="https://www.tiktok.com/@kibarake"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="inner">
                <div id="Logo">
                  <SocialIcon
                    fgColor="#ffff"
                    network="tiktok"
                    url="https://www.youtube.com/channel/UCe_RKz5mY41Sh1PQhI3GtaQ"
                  />
                </div>
                <h2>TikTok</h2>
              </div>
            </a>
          </button>
        </li>
        <li>
          <button className="instagram">
            <a
              href="https://www.instagram.com/kibarake_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="inner">
                <div id="Logo">
                  <SocialIcon
                    fgColor="#ffff"
                    network="instagram"
                    url="https://www.instagram.com/kibarake_/"
                  />
                </div>
                <h2>Instagram</h2>
              </div>
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}


export default Socials;
