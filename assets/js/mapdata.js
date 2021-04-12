var simplemaps_usmap_mapdata={
    main_settings: {
     //General settings
      width: "responsive", //'700' or 'responsive'
      background_color: "#FFFFFF",
      background_transparent: "yes",
      border_color: "#ffffff",
      popups: "detect",
      
      //State defaults
      state_description: "State Description",
      state_color: "#fff",
      state_hover_color: "#275ce4",
      state_url: "",
      border_size: 1.5,
      all_states_inactive: "no",
      all_states_zoomable: "yes",
      
      //Location defaults
      location_description: "Add location markers using latitude and longitude!",
      location_color: "#2041D4",
      location_opacity: 0.8,
      location_hover_opacity: 1,
      location_url: "",
      location_size: 25,
      location_type: "square",
      location_image_source: "frog.png",
      location_border_color: "#FFFFFF",
      location_border: 2,
      location_hover_border: 2.5,
      all_locations_inactive: "no",
      all_locations_hidden: "no",
      
      //Label defaults
      label_color: "#d5ddec",
      label_hover_color: "#d5ddec",
      label_size: 22,
      label_font: "Arial",
      hide_labels: "no",
      hide_eastern_labels: "no",
      manual_zoom: "no",
      back_image: "no",
      initial_back: "no",
      initial_zoom: -1,
      initial_zoom_solo: "no",
      region_opacity: 1,
      region_hover_opacity: 0.6,
      zoom_out_incrementally: "no",
      zoom_percentage: 0.99,
      zoom_time: 0.5,
      
      //Popup settings
      popup_color: "white",
      popup_opacity: 0.9,
      popup_shadow: 1,
      popup_corners: 5,
      popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
      popup_nocss: "no",
      
      //Advanced settings
      div: "map",
      auto_load: "yes",
      url_new_tab: "yes",
      images_directory: "/static/lib/simplemaps/map_images/",
      fade_time: 0.1,
      import_labels: "no",
      link_text: "View Website",
      state_image_url: "",
      state_image_position: "",
      location_image_url: ""
    },
    state_specific: {
      HI: {
        name: "Hawaii",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      AK: {
        name: "Alaska",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      FL: {
        name: "Florida",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NH: {
        name: "New Hampshire",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      VT: {
        name: "Vermont",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      ME: {
        name: "Maine",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      RI: {
        name: "Rhode Island",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NY: {
        name: "New York",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      PA: {
        name: "Pennsylvania",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NJ: {
        name: "New Jersey",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      DE: {
        name: "Delaware",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MD: {
        name: "Maryland",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      VA: {
        name: "Virginia",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      WV: {
        name: "West Virginia",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      OH: {
        name: "Ohio",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      IN: {
        name: "Indiana",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      IL: {
        name: "Illinois",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      CT: {
        name: "Connecticut",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      WI: {
        name: "Wisconsin",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NC: {
        name: "North Carolina",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      DC: {
        name: "District of Columbia",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MA: {
        name: "Massachusetts",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      TN: {
        name: "Tennessee",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      AR: {
        name: "Arkansas",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MO: {
        name: "Missouri",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      GA: {
        name: "Georgia",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      SC: {
        name: "South Carolina",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      KY: {
        name: "Kentucky",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      AL: {
        name: "Alabama",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      LA: {
        name: "Louisiana",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MS: {
        name: "Mississippi",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      IA: {
        name: "Iowa",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MN: {
        name: "Minnesota",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      OK: {
        name: "Oklahoma",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      TX: {
        name: "Texas",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NM: {
        name: "New Mexico",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      KS: {
        name: "Kansas",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NE: {
        name: "Nebraska",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      SD: {
        name: "South Dakota",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      ND: {
        name: "North Dakota",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      WY: {
        name: "Wyoming",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MT: {
        name: "Montana",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      CO: {
        name: "Colorado",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      UT: {
        name: "Utah",
        color: "#a4b5f2",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      AZ: {
        name: "Arizona",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      NV: {
        name: "Nevada",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      OR: {
        name: "Oregon",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      WA: {
        name: "Washington",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      CA: {
        name: "California",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MI: {
        name: "Michigan",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      ID: {
        name: "Idaho",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      GU: {
        name: "Guam",
        hide: "yes",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      VI: {
        name: "Virgin Islands",
        hide: "yes",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      PR: {
        name: "Puerto Rico",
        hide: "yes",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      MP: {
        name: "Northern Mariana Islands",
        hide: "yes",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      },
      AS: {
        name: "American Samoa",
        hide: "yes",
        color: "#dedede",
        description: "<div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold</span> <span style=\"color:#f4ad00;font-weight: 600;\">5.7%</span> </div> <div class=\"item\" style=\"width: 170px;display: flex; justify-content: space-between;border-bottom: 1px solid #ccc;padding: 5px 1px;\"> <span style=\"color:#5b5b5b;font-weight: 600;\">Gold + Silver</span> <span style=\"color:#275ce4;font-weight: 600;\">74.7%</span> </div>"
      }
    },
    labels: {
      NH: {
        parent_id: "NH",
        x: "932",
        y: "183",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      VT: {
        parent_id: "VT",
        x: "883",
        y: "243",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      RI: {
        parent_id: "RI",
        x: "932",
        y: "273",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      NJ: {
        parent_id: "NJ",
        x: "883",
        y: "273",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      DE: {
        parent_id: "DE",
        x: "883",
        y: "303",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MD: {
        parent_id: "MD",
        x: "932",
        y: "303",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      DC: {
        parent_id: "DC",
        x: "884",
        y: "332",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MA: {
        parent_id: "MA",
        x: "932",
        y: "213",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      CT: {
        parent_id: "CT",
        x: "932",
        y: "243",
        pill: "yes",
        width: 45,
        display: "all",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      HI: {
        parent_id: "HI",
        x: 305,
        y: 565,
        pill: "yes",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      AK: {
        parent_id: "AK",
        x: "113",
        y: "495",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      FL: {
        parent_id: "FL",
        x: "773",
        y: "510",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      ME: {
        parent_id: "ME",
        x: "893",
        y: "85",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      NY: {
        parent_id: "NY",
        x: "815",
        y: "158",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      PA: {
        parent_id: "PA",
        x: "786",
        y: "210",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      VA: {
        parent_id: "VA",
        x: "790",
        y: "282",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      WV: {
        parent_id: "WV",
        x: "744",
        y: "270",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      OH: {
        parent_id: "OH",
        x: "700",
        y: "240",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      IN: {
        parent_id: "IN",
        x: "650",
        y: "250",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      IL: {
        parent_id: "IL",
        x: "600",
        y: "250",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      WI: {
        parent_id: "WI",
        x: "575",
        y: "155",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      NC: {
        parent_id: "NC",
        x: "784",
        y: "326",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      TN: {
        parent_id: "TN",
        x: "655",
        y: "340",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      AR: {
        parent_id: "AR",
        x: "548",
        y: "368",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MO: {
        parent_id: "MO",
        x: "548",
        y: "293",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      GA: {
        parent_id: "GA",
        x: "718",
        y: "405",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      SC: {
        parent_id: "SC",
        x: "760",
        y: "371",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      KY: {
        parent_id: "KY",
        x: "680",
        y: "300",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      AL: {
        parent_id: "AL",
        x: "655",
        y: "405",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      LA: {
        parent_id: "LA",
        x: "550",
        y: "435",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MS: {
        parent_id: "MS",
        x: "600",
        y: "405",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      IA: {
        parent_id: "IA",
        x: "525",
        y: "210",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MN: {
        parent_id: "MN",
        x: "506",
        y: "124",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      OK: {
        parent_id: "OK",
        x: "460",
        y: "360",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      TX: {
        parent_id: "TX",
        x: "425",
        y: "435",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      NM: {
        parent_id: "NM",
        x: "305",
        y: "365",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      KS: {
        parent_id: "KS",
        x: "445",
        y: "290",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      NE: {
        parent_id: "NE",
        x: "420",
        y: "225",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      SD: {
        parent_id: "SD",
        x: "413",
        y: "160",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      ND: {
        parent_id: "ND",
        x: "416",
        y: "96",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      WY: {
        parent_id: "WY",
        x: "300",
        y: "180",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MT: {
        parent_id: "MT",
        x: "280",
        y: "95",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      CO: {
        parent_id: "CO",
        x: "320",
        y: "275",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      UT: {
        parent_id: "UT",
        x: "223",
        y: "260",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      AZ: {
        parent_id: "AZ",
        x: "205",
        y: "360",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      NV: {
        parent_id: "NV",
        x: "140",
        y: "235",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      OR: {
        parent_id: "OR",
        x: "100",
        y: "120",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      WA: {
        parent_id: "WA",
        x: "130",
        y: "55",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      ID: {
        parent_id: "ID",
        x: "200",
        y: "150",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      CA: {
        parent_id: "CA",
        x: "79",
        y: "285",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MI: {
        parent_id: "MI",
        x: "663",
        y: "185",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      PR: {
        parent_id: "PR",
        x: "620",
        y: "545",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      GU: {
        parent_id: "GU",
        x: "550",
        y: "540",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      VI: {
        parent_id: "VI",
        x: "680",
        y: "519",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      MP: {
        parent_id: "MP",
        x: "570",
        y: "575",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      },
      AS: {
        parent_id: "AS",
        x: "665",
        y: "580",
        color: "#132074",
        font: "\"Montserrat\", sans-serif",
        size: "10px"
      }
    },
    regions: {},
    data: {
      data: {}
    }
  };