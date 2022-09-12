const gpxData = {
  tracks: [
    { 
      label: "Maltese Islands Diving Guide",
      trackType: "map",
      value: {
        uid: "P_0000000021",
        category: "diving",
        title: "Malta Diving Guide",
        excerpt: "Shore or boat",
        path: "/diving",
        icon: "dive",
        image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide.jpg",
        body: "Based on 'Maltese Islands Diving Guide' published in 1997 by Ned Middleton",
      },
    },
    { 
      label: "Rozi",
      trackType: "map",
      value: {
        uid: "D_6600000002",
        title: "Rozi Wreck",
        category: "diving",
        icon: "diving",
        path: "/diving/rozi",
        image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi.jpg",
        excerpt: "Valetta tugboat",
        body: "One of the most popular dive sites on the islands, Rozi was a former tugboat that operated in Grand Harbour of Valletta. She was scuttled in 1992 as an underwater tourist attraction for submarine tours, and also became an artificial reef for scuba divers. Tugboat Rozi wreck is easily dived from the shore, and is located close to Patrol Boat P29 wreck.",
      },
    },
    { 
      label: "Spearfishing",
      value: {
        category: "spearfishing",
        uid: "GM_000xyz0001",
        title: "Spearfishing",
        path: "/spearfishing",
        icon: "spearo",
        image: "/jpg/Spearfishing/Spearfishing.jpg",
        excerpt: "With no boat",
        body: "Spearfishing does not require a permit. There are specific fish that require permits to catch, such a tuna, but the sport itself requires none. Spearfishing with SCUBA equipment is illegal. You're going to free dive if you want to go spearfishing in Malta.",
        links: [
          {
            label: "Google Map",
            value: "https://www.google.com/maps/d/edit?hl=en&mid=1XFsejc8Ly90nQ-Vng1YCcBKX0wdeSso&ll=35.94954525492767%2C14.357649241738182&z=10",
          }
        ],
      },
    },
    {
      label: "Anchor Bay",
      value: {
        uid: "D_0003000002",
        category: "diving",
        title: "Anchor Bay (Popeye Village)",
        excerpt: "Also known as Scorpion Cave",
        icon: "dive",
        path: "/diving/anchor-bay",
        image: "/jpg/Anchor-Bay/Anchor-Bay.jpg",
        body: "Anchor Bay Cave, also known as Scorpion Cave, is the best dive site in Anchor Bay. The cave is located on the south side of the bay, approximately 150 m from the entry/exit point at the concrete jetty",
      },
    },
    { 
      label: "Decathlon",
      value: {
        uid: "SH_0000000001",
        title: "Decathlon",
        excerpt: "Buy the right gear",
        path: "/shopping/decathlon",
        icon: "shopping",
        category: "shopping",
        image: "/jpg/Decathlon/Decathlon.jpg",
        body: "TO SUSTAINABLY MAKE THE PLEASURE AND BENEFITS OF SPORT ACCESSIBLE TO THE MANY",
        links: [
          {
            label: "Decathlon",
            value: "https://www.decathlon.mt",
          }
        ],
      },
    },
    { 
      label: "Xlendi Caves",
      value: {
        category: "diving",
        path: "/diving/xlendi-caves",
        uid: "D_0010001001",
        icon: "diving",
        title: "Xlendi Caves",
        image: "/jpg/XlendiCaves/XlendiCaves.jpg",
        excerpt: "If you enter the water on the left hand side of the valley by the fifth ladder and following a compass heading of 300 degrees you will find the entrance to Xlendi Cave and the tunnel entrance is located just 2 metres deep on the cliff side",
        bodyFormat:"html",
        body: "<p>Ix Xledni Bay is a typical Gozitan fishing village located in a valley on the south west coast of Gozo. There are a number of bars restaurants and hotels serving the village. And the bay has a small beach, Xlendi bay is very popular with swimmers, snorkelers and divers.</p><p>If you enter the water on the left hand side of the valley by the fifth ladder and following a compass heading of 300 degrees you will find the entrance to Xlendi Cave and the tunnel entrance is located just 2 metres deep on the cliff side</p>",
        links: [
          {
            label: "paradisediving",
            value: "https://paradisediving.com/xlendi-cave/",
          }
        ],
        tags:[],
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
