import {
  mdBody_Rozi,
} from "./markdown";

const gpxData = {
  tracks: [
    { 
      value: {
        uid: "D_6600000002",
        title: "Rozi",
        category: "diving",
        icon: "diving",
        slug: "rozi",
        image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi.jpg",
        excerpt: "Valetta tugboat",
        bodyFormat: "md",
        body: mdBody_Rozi,
        zoom: 12,
        center: [14.18, 35.74],
        links: [
          {
            label: "one",
            value: "https://",
          }
        ],
      },
    },
    { 
      value: {
        uid: "P_0000000021",
        category: "diving",
        title: "Malta Diving Guide",
        excerpt: "Shore or boat",
        slug: "diving",
        icon: "dive",
        image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide.jpg",
        bodyFormat: "text",
        body: "Based on 'Maltese Islands Diving Guide' published in 1997 by Ned Middleton",
        zoom: 9.6,
        center: [14.38, 35.94],
      },
    },
    { 
      value: {
        category: "spearfishing",
        uid: "GM_000xyz0001",
        title: "Spearfishing",
        slug: "spearfishing",
        icon: "spearo",
        image: "/jpg/Spearfishing/Spearfishing.jpg",
        excerpt: "With no boat",
        bodyFormat: "text",
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
      value: {
        uid: "D_0003000002",
        category: "diving",
        title: "Anchor Bay (Popeye Village)",
        excerpt: "Also known as Scorpion Cave",
        icon: "dive",
        slug: "anchor-bay",
        image: "/jpg/Anchor-Bay/Anchor-Bay.jpg",
        bodyFormat: "text",
        body: "Anchor Bay Cave, also known as Scorpion Cave, is the best dive site in Anchor Bay. The cave is located on the south side of the bay, approximately 150 m from the entry/exit point at the concrete jetty",
      },
    },
    { 
      value: {
        uid: "SH_0000000001",
        title: "Decathlon",
        excerpt: "Buy the right gear",
        slug: "decathlon",
        icon: "shopping",
        category: "shopping",
        image: "/jpg/Decathlon/Decathlon.jpg",
        bodyFormat: "md",
        body: "> TO SUSTAINABLY MAKE THE PLEASURE AND BENEFITS OF SPORT ACCESSIBLE TO THE MANY",
        links: [
          {
            label: "Decathlon",
            value: "https://www.decathlon.mt",
          }
        ],
      },
    },
    { 
      value: {
        uid: "D_0010001001",
        weight: 1,
        slug: "xlendi",
        icon: "diving",
        title: "Xlendi",
        category: "diving",
        tags:["caves", "xlendi", "shore"],
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
        
      },
    },
  ],
}

export { gpxData }
