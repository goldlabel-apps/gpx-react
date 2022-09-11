const gpxData = {
  tracks: [
    { 
      label: "Spearfishing",
      trackType: "map",
      value: {
        type: "googleMap",
        uid: "GM_0000000001",
        title: "Spearfishing",
        // subheader: "With no boat",
        path: "/spearfishing",
        icon: "spearo",
        embed:"",
        image: "/jpg/Spearfishing/Spearfishing_800.jpg",
        body: "Maltese Islands Diving Guide publishished in paperback in 1997 by Ned Middleton",
        links: [
          {
            label: "Google Map",
            value: "https://www.google.com/maps/d/edit?hl=en&mid=1XFsejc8Ly90nQ-Vng1YCcBKX0wdeSso&ll=35.94954525492767%2C14.357649241738182&z=10",
          }
        ],
      },
    },
    { 
      label: "Diving",
      trackType: "map",
      value: {
        type: "post",
        uid: "P_0000000021",
        title: "Diving",
        // subheader: "Shore or boat",
        path: "/diving",
        icon: "dive",
        image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide_800.jpg",
        body: "Based on 'Maltese Islands Diving Guide' publishished in paperback in 1997 by Ned Middleton",
      },
    },
  
    { 
      label: "Rozi",
      trackType: "map",
      value: {
        uid: "D_0000000002",
        title: "Rozi Wreck",
        // subheader: "Valetta tugboat",
        icon: "dive",
        path: "/diving/wrecks/rozi",
        image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi_800.jpg",
        body: "One of the most popular dive sites on the islands",
        meta:{
          extratext: "Rozi was a former tugboat that operated in Grand Harbour of Valletta. She was scuttled in 1992 as an underwater tourist attraction for submarine tours, and also became an artificial reef for scuba divers. Tugboat Rozi wreck is easily dived from the shore, and is located close to Patrol Boat P29 wreck.",
        }
      },
    },
    {
      label: "Anchor Bay",
      trackType: "map",
      value: {
        uid: "D_0003000002",
        title: "Anchor Bay",
        // subheader: "Cave dive",
        icon: "dive",
        path: "/diving/anchor-bay",
        image: "/jpg/Anchor-Bay/Anchor-Bay_400.jpg",
        body: "Anchor Bay Cave, also known as Scorpion Cave, is the best dive site in Anchor Bay. The cave is located on the south side of the bay, approximately 150 m from the entry/exit point at the concrete jetty",
        meta:{
          extratext: "(Popeye Village)",
        }
      },
    },

    
  ],
  langauges: [
    {
      label: "English",
      value: "en",
    },
    {
      label: "French",
      value: "fr",
    },
    {
      label: "Italian",
      value: "it",
    },
    {
      label: "Brazilian",
      value: "pt",
    },
    {
      label: "Spanish",
      value: "es",
    },
  ],
}

export { gpxData }
