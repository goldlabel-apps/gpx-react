import {mdBody_Rozi} from "./md/mdBody_Rozi";
import {mdBody_DiveGuide} from "./md/mdBody_DiveGuide";
import {mdBody_UmElFaroud} from "./md/mdBody_UmElFaroud";

const tracks = [
  { 
    value: {
      uid: "ABC_000000001",
      slug: "umelfaroud",
      category: "Diving",
      tags: ["shore", "wreck"],
      icon: "dive",
      title: "Um El Faroud",
      excerpt: "MV Um El Faroud was a Libyan oil tanker that was scuttled off the coast of Wied iz-Zurrieq in 1998 as an artificial reef and a scuba diving attraction, after suffering damage in an explosion at the dry docks.",
      image: "/jpg/UmElFaroud/UmElFaroud.jpg",
      bodyFormat: "md",
      body: mdBody_UmElFaroud,
      links:[
        {label: "wikipedia.org", value: "http://en.wikipedia.org/wiki/Um_El_Faroud" },
        {label: "maltadives.com", value: "https://maltadives.com/sites/umelfaroud-wiedizzurrieq" },
        {label: "wrecksite.eu", value: "http://www.wrecksite.eu/wreck.aspx?97698" },
        {label: "teesbuiltships.co.uk", value: "http://www.teesbuiltships.co.uk/view.php?ref=170647" },
        {label: "calypsosac.org", value: "http://www.calypsosac.org/um-el-faroud/" },
      ],
    },
  },
  { 
    value: {
      uid: "DM_00000asdf21",
      slug: "abcdivingmalta",
      category: "advert",
      tags: ["Shop"],
      icon: "diveshop",
      title: "ABC Diving",
      excerpt: "",
      image: "/jpg/ABCDiving/ABCDiving.jpg",
      bodyFormat: "md",
      body: "ABC Diving is a small, bespoke PADI dive centre set in an idyllic waterfront location at Turtle Bay just up from St Paul’s Bay in Malta.",
    },
  }, 
  { 
    value: {
      uid: "P_0000000021",
      title: "Maltese Islands Dive Guide",
      slug: "malta-dive-guide",
      category: "Diving",
      tags: ["by Ned Middleton"],
      icon: "dive",
      order: 10,
      excerpt: "This app is based on the book _Maltese Islands Diving Guide_ published in 1997 by Ned Middleton",
      image: "/jpg/Maltese-Islands-Diving-Guide/Maltese-Islands-Diving-Guide.jpg",
      bodyFormat: "md",
      body: mdBody_DiveGuide,
      zoom: 9.6,
      center: [14.38, 35.94],
      links:[
        {label: "Amazon", value: "https://" },
      ],
    },
  },

  {
    value: {
      uid: "D_0AB3000002",
      category: "Diving",
      tags:["Cave", "Wreck"],
      title: "Anchor Bay",
      excerpt: "AKA Scorpion Cave & Popeye Village",
      icon: "dive",
      slug: "anchor-bay",
      image: "/jpg/Anchor-Bay/Anchor-Bay.jpg",
      bodyFormat: "text",
      body: "Anchor Bay Cave, also known as Scorpion Cave, is the best dive site in Anchor Bay. The cave is located on the south side of the bay, approximately 150 m from the entry/exit point at the concrete jetty",
    },
  },
  
  { 
    value: {
      uid: "D_66RZ000002",
      slug: "rozi",
      category: "Diving",
      tags:["Wreck"],
      icon: "dive",
      title: "Rozi",
      order: 20,
      excerpt: "Rozi is one of the two wrecks in Cirkewwa on the northwest side of Malta, and one of the most popular dive sites in the Maltese islands. Rozi was a former tugboat that operated in Grand Harbour of Valletta. She was scuttled in 1992 as an underwater tourist attraction for submarine tours, and also became an artificial reef for scuba divers. Tugboat Rozi wreck is easily dived from the shore, and is located close to Patrol Boat P29 wreck.",
      image: "/jpg/The-Tugboat-Rozi/The-Tugboat-Rozi.jpg",
      bodyFormat: "md",
      body: mdBody_Rozi,
      zoom: 12,
      center: [14.18, 35.74],
      links: [
        {
          label: "Wikipedia",
          value: "https://en.wikipedia.org/wiki/MV_Rozi",
        },
        {
          label: "Wrecksite.eu",
          value: "https://www.wrecksite.eu/wreck.aspx?58012",
        },
        {
          label: "Sketchfab 3d model",
          value: "https://sketchfab.com/3d-models/mv-rozi-47a7541a59c8425e888db372739fce0f",
        },
      ],
    },
  },

    { 
      value: {
        uid: "GM_000xyz0001",   
        slug: "spearfishing",
        icon: "spearo",
        category: "spearfishing",
        tags: ["Spearo"],
        title: "Spearfishing",
        order: 40,
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
        uid: "D_001XL01001",
        
        slug: "xlendi",
        icon: "diving",
        title: "Xlendi",
        category: "diving",
        tags:["Cave", "Shore"],
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

    { 
      value: {
        uid: "SH_0000000001",
        title: "Decathlon",
        excerpt: "Buy the right gear",
        slug: "decathlon",
        icon: "shopping",
        category: "Dive Gear",
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
       
  ]

export { tracks }
