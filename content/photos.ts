import type { Media } from "./types";

function photo(
  id: string,
  alt: string,
  width = 1800,
  height = 1200,
): Media {
  return {
    src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`,
    alt,
    width,
    height,
  };
}

export const photos = {
  vatikaExt: photo(
    "photo-1600585154340-be6161a56a0c",
    "Low dark-timber house at dusk, warm light in the windows, a mature tree on the lawn",
  ),
  vatikaLiv: photo(
    "photo-1600210492486-724fe5c67fb0",
    "Living room with linen sofas, pale oak floors and a full-height window",
  ),
  vatikaKit: photo(
    "photo-1602028915047-37269d1a73f7",
    "Kitchen with a grey island, pendant lights and a run of built-in ovens",
  ),
  vatikaBed: photo(
    "photo-1625334782252-da92af3ad887",
    "Bedroom with white walls, framed prints and a window onto green",
  ),
  courtyardExt: photo(
    "photo-1600596542815-ffad4c1539a9",
    "Large contemporary house with a warm stone facade and clipped hedges",
  ),
  courtyardHall: photo(
    "photo-1600607687939-ce8a6c25118c",
    "Double-height hall with a staircase and a single brass pendant",
  ),
  courtyardPool: photo(
    "photo-1600585154526-990dced4db0d",
    "Covered terrace looking onto a still swimming pool",
  ),
  courtyardNight: photo(
    "photo-1600573472592-401b489a3cdc",
    "House elevation at dusk with warm interior light in the windows",
  ),
  golfExt: photo(
    "photo-1613490493576-7fde63acd811",
    "Villa with a long pool and a low garden wall under a pale sky",
  ),
  golfLawn: photo(
    "photo-1606402179428-a57976d71fa4",
    "Low glass-fronted house at dusk with a lit path along a planted verge",
  ),
  golfDin: photo(
    "photo-1600566753086-00f18fb6b3ea",
    "Dining room with a long table, plaster walls and a garden door",
  ),
  golfBath: photo(
    "photo-1552321554-5fefe8c9ef14",
    "Bathroom with stone basin, brass fittings and a linen curtain",
  ),
  hazratExt: photo(
    "photo-1460317442991-0ec209397118",
    "Mid-rise apartment block with recessed balconies in cream render",
  ),
  hazratApt: photo(
    "photo-1502672260266-1c1ef2d93688",
    "Apartment living room with a long sofa and city light in the windows",
  ),
  hazratKit: photo(
    "photo-1556912173-46c336c7fd55",
    "Compact kitchen with pale cabinets and a breakfast ledge",
  ),
  hazratBal: photo(
    "photo-1493809842364-78817add7ffb",
    "Interior looking through an arched opening to a sitting alcove",
  ),
  aliganjExt: photo(
    "photo-1545324418-cc1a3fa10c00",
    "Brick apartment towers with planted terraces",
  ),
  aliganjCourt: photo(
    "photo-1484154218962-a197022b5858",
    "Kitchen-diner with a wooden table and a garden window",
  ),
  aliganjLiv: photo(
    "photo-1560448204-e02f11c3d0e2",
    "Furnished apartment living room with a rug and a low coffee table",
  ),
  aliganjPlay: photo(
    "photo-1564013799919-ab600027ffc6",
    "House front with a small lawn and a paved path",
  ),
  indiraExt: photo(
    "photo-1486406146926-c627a92ad1ab",
    "Tall glass-and-stone building photographed from the street",
  ),
  indiraLiv: photo(
    "photo-1522708323590-d24dbb6b0267",
    "Bright apartment with a white sofa and a plant by the window",
  ),
  indiraBed: photo(
    "photo-1505693416388-ac5ce068fe85",
    "Bedroom with a timber headboard and folded grey linen",
  ),
  indiraGym: photo(
    "photo-1534438327276-14e5300c3a48",
    "Daylit gym with free weights and a timber floor",
  ),
  jankiExt: photo(
    "photo-1570129477492-45c003edd2be",
    "Low suburban houses with pitched roofs along a quiet road",
  ),
  jankiInt: photo(
    "photo-1560185007-cde436f6a4d0",
    "Sitting room with a fireplace surround and two armchairs",
  ),
  jankiKit: photo(
    "photo-1556911220-e15b29be8c8f",
    "White kitchen with open dining and a garden door at the far end",
  ),
  jankiYard: photo(
    "photo-1576941089067-2de3c901e126",
    "House with a front garden, gravel path and a single tree",
  ),
  vrindExt: photo(
    "photo-1605276374104-dee2a0ed3cd6",
    "Modern house with a timber screen and a shallow reflecting pool",
  ),
  vrindHall: photo(
    "photo-1551607895-9712a0c9260f",
    "Long panelled corridor receding towards a lit doorway",
  ),
  vrindBed: photo(
    "photo-1616594039964-ae9021a400a0",
    "Bedroom with a deep grey wall, upholstered bed and matching bedside lamps",
  ),
  vrindGreen: photo(
    "photo-1600585152915-d208bec867a1",
    "Covered walk along a planted courtyard",
  ),
  shaheedExt: photo(
    "photo-1580587771525-78b9dba3b914",
    "White villa with a terracotta roof and a palm in the driveway",
  ),
  shaheedLiv: photo(
    "photo-1582268611958-ebfd161ef9cf",
    "Open-plan living space looking onto a terrace",
  ),
  shaheedPool: photo(
    "photo-1572120360610-d971b9d7767c",
    "House photographed across a lawn with a blue sky",
  ),
  shaheedStair: photo(
    "photo-1600607687920-4e2a09cf159d",
    "Staircase with a timber handrail against a plaster wall",
  ),
  aashianaExt: photo(
    "photo-1605146769289-440113cc3d00",
    "Suburban house with a garage and a trimmed hedge",
  ),
  aashianaLiv: photo(
    "photo-1618221195710-dd6b41faaea6",
    "Neutral living room with a low sofa and a round table",
  ),
  aashianaDin: photo(
    "photo-1600210491892-03d54c0aaf87",
    "Dining alcove with a round table and a paper lantern",
  ),
  aashianaYard: photo(
    "photo-1599809275671-b5942cabc7a2",
    "Back garden with a paved sitting area and a lawn",
  ),
  vibhutiExt: photo(
    "photo-1721815693498-cc28507c0ba2",
    "Dark apartment elevation at dusk with planted balconies and lit interiors",
  ),
  vibhutiHall: photo(
    "photo-1600566752355-35792bedcfea",
    "Gallery-like hall with a long runner and high windows",
  ),
  vibhutiLiv: photo(
    "photo-1600210492493-0946911123ea",
    "Sitting room with a fireplace, bookshelves and a pale rug",
  ),
  vibhutiPool: photo(
    "photo-1600585154363-67eb9e2e2099",
    "Infinity-edge pool looking toward a low garden wall",
  ),
  awadhExt: photo(
    "photo-1568605114967-8130f3a36994",
    "Simple two-storey house with a tiled roof and a front lawn",
  ),
  awadhLiv: photo(
    "photo-1554995207-c18c203602cb",
    "Small living room with a grey sofa and a window seat",
  ),
  awadhKit: photo(
    "photo-1556911220-bff31c812dba",
    "Compact kitchen with white wall units and a counter under a window",
  ),
  awadhBed: photo(
    "photo-1611892440504-42a792e24d32",
    "Bedroom with white walls, a timber floor and a single plant",
  ),
  plan2: photo(
    "photo-1503387762-592deb58ef4e",
    "Architectural floor-plan drawing of a two-bedroom apartment laid on a desk",
    1600,
    1066,
  ),
  plan3: photo(
    "photo-1721244654392-9c912a6eb236",
    "Blueprint sheet showing stacked apartment sections in blue",
    1600,
    1066,
  ),
  plan4: photo(
    "photo-1610650394144-a778795cf585",
    "Floor-plan drawing laid out on a dark drafting surface",
    1600,
    1066,
  ),
  office: photo(
    "photo-1497366216548-37526070297c",
    "Quiet office interior with a long table, plaster walls and a street window in Gomti Nagar light",
  ),
  aboutDesk: photo(
    "photo-1524758631624-e2822e304c36",
    "Timber desk with files, a lamp and a chair in a small Lucknow office",
  ),
  aboutStreet: photo(
    "photo-1600585152220-90363fe7e115",
    "Residential street of mid-rise houses with trees along the verge",
  ),
} as const;
