import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import "vanilla-cookieconsent/dist/cookieconsent.js";

export default function CookieConsent() {
  useEffect(() => {
    const cc = window.initCookieConsent();

    cc.run({
      // ...,
      languages: {
        en: {
          consent_modal: {
            title: "Title here ...",
            description: "Description here ...",
            primary_btn: {
              text: "Accept",
              role: "accept_all", // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: "Settings",
              role: "settings", // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: "Cookie preferences ...",
            save_settings_btn: "Save settings",
            accept_all_btn: "Accept all",
            blocks: [
              {
                title: "First block title ...",
                description: "First block description ...",
              },
              {
                title: "Second block title ...",
                description: "Second block description ...",
                toggle: {
                  value: "my_category1",
                  enabled: true,
                  readonly: true,
                },
              },
              {
                title: "Third block title ...",
                description: "Third block description ...",
                toggle: {
                  value: "my_category2",
                  enabled: false,
                  readonly: false,
                },
              },
            ],
          },
        },
        it: {
          consent_modal: {
            title: "Title in italian here ...",
            description: "Description in italian here ...",
            primary_btn: {
              text: "Accept in italian",
              role: "accept_all", //'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: "Settings",
              role: "settings", //'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: "Cookie preferences ...",
            save_settings_btn: "Save settings in italian",
            accept_all_btn: "Accept all",
            blocks: [
              {
                title: "First block title in italian ...",
                description: "First block description in italian ...",
              },
              {
                title: "Second block title in italian ...",
                description: "Second block description in italian...",
                toggle: {
                  value: "my_category1",
                  enabled: true,
                  readonly: true,
                },
              },
              {
                title: "Third block title in italian ...",
                description: "Third block description in italian...",
                toggle: {
                  value: "my_category2",
                  enabled: false,
                  readonly: false,
                },
              },
            ],
          },
        },
      },
    });
  }, []);

  return null;
}
