export const PRESETS = [
  {
    id: "farmhouse-dining-table",
    title: "How to Build a DIY Farmhouse Dining Table",
    author: "Maker DIY Woodworks",
    url: "https://www.youtube.com/watch?v=0k5i5Ua02g0",
    videoId: "0k5i5Ua02g0",
    objectName: "Rustic Farmhouse Dining Table",
    category: "Woodworking & Furniture",
    difficulty: "Intermediate",
    estimatedTime: "8-10 Hours",
    estimatedCost: "$110 - $150",
    dimensions: "72\" L x 38\" W x 30\" H (Seats 6-8 people)",
    thumbnail: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80",
    overview: "A timeless, heavy-duty farmhouse dining table built with sturdy 4x4 Douglas fir legs, breadboard ends, and edge-joined 2x10 planks. Perfect weekend build using standard home center lumber.",
    materials: [
      { item: "2x10 Douglas Fir (Tabletop planks)", quantity: "4 boards", dimensions: "8 ft length", notes: "Select the straightest pieces with minimal cupping" },
      { item: "4x4 Douglas Fir (Table legs)", quantity: "2 posts", dimensions: "8 ft length (cut to 29\")", notes: "Knot-free faces facing outward" },
      { item: "2x4 Kiln-Dried Lumber (Aprons & Stretchers)", quantity: "5 boards", dimensions: "8 ft length", notes: "For framing support under the tabletop" },
      { item: "2 1/2\" Pocket Hole Screws (Coarse thread)", quantity: "1 box (100 ct)", dimensions: "2.5 inch", notes: "Ideal for 1.5\" thick dimensional lumber" },
      { item: "Titebond II or III Wood Glue", quantity: "1 bottle (16 oz)", dimensions: "Water-resistant", notes: "Ample open working time for large glue-ups" },
      { item: "Tabletop Z-Clips or Figure-8 Fasteners", quantity: "1 pack (12 pcs)", dimensions: "Steel fasteners", notes: "Allows natural seasonal wood movement" },
      { item: "Early American Wood Stain & Polyurethane", quantity: "1 quart each", dimensions: "Matte/Satin finish", notes: "3 protective coats on tabletop" }
    ],
    tools: [
      { name: "Miter Saw or Circular Saw", category: "essential", icon: "saw" },
      { name: "Pocket Hole Jig (Kreg Jig)", category: "essential", icon: "drill" },
      { name: "Cordless Drill & Driver Bits", category: "essential", icon: "drill" },
      { name: "Parallel Bar Clamps (4-6 clamps, at least 48\")", category: "essential", icon: "clamp" },
      { name: "Random Orbital Sander (80, 120, 220 grit disks)", category: "essential", icon: "sander" },
      { name: "Speed Square & 25ft Tape Measure", category: "essential", icon: "ruler" },
      { name: "Safety Glasses & Dust Mask / Respirator", category: "safety", icon: "shield" },
      { name: "Biscuit Joiner or Dowel Jig (Optional for alignment)", category: "optional", icon: "tool" }
    ],
    safetyWarnings: [
      "Always wear eye protection and ear protection when running the miter saw and router.",
      "Wear a well-fitting dust mask (N95 or respirator) when sanding pine and applying polyurethane.",
      "Never fasten the solid tabletop rigidly to the base with glue or rigid screws; use tabletop fasteners to allow seasonal expansion.",
      "Dispose of stain-soaked rags in an airtight metal container filled with water to prevent spontaneous combustion."
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Phase 1: Lumber Selection & Prep",
        title: "Select & Acclimate the Lumber",
        timestamp: "00:45",
        seconds: 45,
        description: "Inspect 2x10 boards at the lumber yard for straightness, twist, and crown. Bring the boards into your climate-controlled workshop for 3 to 5 days to acclimate before cutting.",
        toolsUsed: ["Tape Measure", "Moisture Meter"],
        proTip: "Sight down the edge of each board like an arrow to check for bow and warp. Avoid boards with the pith (center ring of tree).",
        safetyNote: "Inspect lumber for embedded staples or grit before cutting."
      },
      {
        stepNumber: 2,
        phase: "Phase 1: Lumber Selection & Prep",
        title: "Squaring the Board Edges",
        timestamp: "02:18",
        seconds: 138,
        description: "Trim 1/4\" off both rounded factory edges of the 2x10 boards using a table saw or straight-edge guide to achieve crisp, 90-degree glue surfaces for the tabletop.",
        toolsUsed: ["Table Saw or Circular Saw with Guide", "Safety Glasses"],
        proTip: "Clean square edges ensure an invisible seam without dirt-trapping grooves.",
        safetyNote: "Use a push stick when ripping boards narrower than 6 inches."
      },
      {
        stepNumber: 3,
        phase: "Phase 2: Tabletop Glue-Up",
        title: "Dry-Fit and Arrange Grain Patterns",
        timestamp: "04:30",
        seconds: 270,
        description: "Lay out the tabletop planks side-by-side. Alternate the end-grain growth rings (smile, frown, smile) to prevent the table from cupping over time. Number the joints with chalk.",
        toolsUsed: ["Pencil / Chalk", "Speed Square"],
        proTip: "Mark a large carpenter's triangle across all boards so you can quickly restore the arrangement during glue-up.",
        safetyNote: "Keep hands clear of pinching edges when flipping heavy 2x10 planks."
      },
      {
        stepNumber: 4,
        phase: "Phase 2: Tabletop Glue-Up",
        title: "Glue-Up and Clamping the Tabletop",
        timestamp: "06:12",
        seconds: 372,
        description: "Apply generous Titebond wood glue across mating edges. Alternate bar clamps above and below the surface every 12 inches to equalize pressure. Use cauls with wax paper to keep seams flush.",
        toolsUsed: ["Parallel Clamps", "Wood Glue", "Clamping Cauls"],
        proTip: "Wipe squeeze-out with a damp rag after 20 minutes when rubbery, or scrape cleanly with a card scraper after 45 minutes.",
        safetyNote: "Ensure clamps are balanced so the assembly doesn't tip over."
      },
      {
        stepNumber: 5,
        phase: "Phase 3: Base & Leg Construction",
        title: "Cut 4x4 Legs and 2x4 Aprons",
        timestamp: "09:05",
        seconds: 545,
        description: "Square and cut the 4x4 legs to 29\" height on the miter saw. Cut the long side aprons to 60\" and the short end aprons to 26\". Drill two 1 1/2\" pocket holes on the inside face of each apron.",
        toolsUsed: ["Miter Saw", "Kreg Pocket Hole Jig", "Cordless Drill"],
        proTip: "Use a stop block on your miter saw fence to guarantee all 4 legs are identical in length down to the millimeter.",
        safetyNote: "Secure 4x4 securely against fence before making compound cuts."
      },
      {
        stepNumber: 6,
        phase: "Phase 3: Base & Leg Construction",
        title: "Assemble the Apron Frame to the Legs",
        timestamp: "11:40",
        seconds: 700,
        description: "Clamp the aprons inset 1/2\" from the exterior face of each 4x4 leg. Drive 2 1/2\" pocket hole screws with wood glue into the legs. Verify diagonal corner measurements are equal for squareness.",
        toolsUsed: ["Pocket Hole Clamp", "Impact Driver", "Tape Measure", "Speed Square"],
        proTip: "Measure diagonally corner-to-corner; if both cross-measurements match, your table base is perfectly square.",
        safetyNote: "Avoid overtightening pocket screws into soft pine; set clutch to medium."
      },
      {
        stepNumber: 7,
        phase: "Phase 4: Sanding & Surfacing",
        title: "Flatten & Sand the Tabletop",
        timestamp: "14:22",
        seconds: 862,
        description: "Remove the tabletop from clamps. Sand aggressively with 80-grit sandpaper along the grain to level any seams. Progress progressively through 120-grit and finish with 220-grit for silky smoothness.",
        toolsUsed: ["Random Orbital Sander", "80/120/220 Grit Discs", "Dust Mask"],
        proTip: "Lightly wipe down with mineral spirits before staining to spot any glue spots or sanding scratches.",
        safetyNote: "Wear a dust respirator and connect sander to vacuum collection."
      },
      {
        stepNumber: 8,
        phase: "Phase 5: Assembly & Fastening",
        title: "Attach Tabletop Using Expansion Fasteners",
        timestamp: "17:15",
        seconds: 1035,
        description: "Flip the tabletop face down on a soft blanket. Center the base on the underside. Secure with figure-8 fasteners or Z-clips slotted into the interior aprons.",
        toolsUsed: ["Drill Driver", "Z-Clips / Figure-8", "Tape Measure"],
        proTip: "Leave a 1/8\" clearance in the screw slots so the tabletop can naturally expand during humid seasons without splitting.",
        safetyNote: "Get a helper to help flip the assembled table right-side up; it weighs over 100 lbs."
      },
      {
        stepNumber: 9,
        phase: "Phase 6: Finishing & Sealing",
        title: "Stain and Apply Protective Polyurethane",
        timestamp: "19:50",
        seconds: 1190,
        description: "Apply pre-stain wood conditioner, followed by your chosen oil-based wood stain with a clean cotton rag. Seal with 3 coats of satin polyurethane, lightly scuffing with 320-grit between coats.",
        toolsUsed: ["Lint-free Cotton Rags", "Natural Bristle Brush", "320 Grit Sandpaper"],
        proTip: "The 3rd coat provides superior water and spill resistance for daily family meals.",
        safetyNote: "Ensure good cross-ventilation in your workshop when applying finish."
      }
    ]
  },
  {
    id: "waterfall-coffee-table",
    title: "How to Build a Modern Waterfall Edge Coffee Table",
    author: "Foureyes Woodworking",
    url: "https://www.youtube.com/watch?v=kY31gE1l15Q",
    videoId: "kY31gE1l15Q",
    objectName: "Modern Waterfall Coffee Table",
    category: "Hardwood Furniture",
    difficulty: "Advanced",
    estimatedTime: "6-8 Hours",
    estimatedCost: "$140 - $210",
    dimensions: "44\" L x 22\" W x 17\" H",
    thumbnail: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
    overview: "A sleek, contemporary coffee table featuring a continuous grain waterfall miter joint where the top wraps smoothly into the side leg. Made with kiln-dried Walnut or White Oak.",
    materials: [
      { item: "8/4 Kiln-Dried Hardwood (Walnut or White Oak)", quantity: "1 board", dimensions: "8 ft x 12\" wide", notes: "Continuous grain for waterfall effect" },
      { item: "Wood Biscuits (#20) or Domino Tenons", quantity: "1 pack", dimensions: "#20 Beech biscuits", notes: "Provides reinforcement inside the 45-degree miter" },
      { item: "Titebond III Ultimate Wood Glue", quantity: "1 bottle", dimensions: "8 oz", notes: "Extended open time for complex miter clamping" },
      { item: "Hardwax Oil (Rubio Monocoat or Osmo 3043)", quantity: "1 can", dimensions: "Pure Clear", notes: "Natural matte finish emphasizing natural wood grain" },
      { item: "Black Steel Hairpin Leg (Opposite side)", quantity: "2 legs", dimensions: "16 inch height", notes: "Contrasts the continuous waterfall side" }
    ],
    tools: [
      { name: "Track Saw or Table Saw with Miter Sled", category: "essential", icon: "saw" },
      { name: "Digital Angle Gauge", category: "essential", icon: "gauge" },
      { name: "Biscuit Joiner or Festool Domino", category: "essential", icon: "tool" },
      { name: "90-Degree Corner Clamps & Ratchet Straps", category: "essential", icon: "clamp" },
      { name: "Random Orbital Sander", category: "essential", icon: "sander" },
      { name: "Safety Glasses & Dust Mask", category: "safety", icon: "shield" }
    ],
    safetyWarnings: [
      "Cutting 45-degree bevels requires precise blade calibration and firm workpiece clamping to prevent kickback.",
      "Work in a well-ventilated space when buffing hardwax oils."
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Phase 1: Material Prep",
        title: "Grain Selection & Joint Mapping",
        timestamp: "01:10",
        seconds: 70,
        description: "Inspect the hardwood board and select the most striking grain section to serve as the waterfall fold. Mark the cutline where top transitions to leg.",
        toolsUsed: ["Tape Measure", "Chalk / Marking Knife"],
        proTip: "Pick a board with high figure or curl right at the fold line for breathtaking visual drama.",
        safetyNote: "Wear gloves when handling rough lumber."
      },
      {
        stepNumber: 2,
        phase: "Phase 2: Precision Miter Cuts",
        title: "Execute the 45° Miter Bevel Cut",
        timestamp: "03:45",
        seconds: 225,
        description: "Set your track saw or table saw to exactly 45.0 degrees using a digital angle gauge. Cut through the line to separate the top and leg while preserving grain alignment.",
        toolsUsed: ["Track Saw with Guide Rail", "Digital Angle Gauge"],
        proTip: "Make a test cut on scrap hardwood first and verify with a machinist square that the two 45° pieces form an exact 90° corner.",
        safetyNote: "Never stop mid-cut with a track saw; keep uniform forward speed."
      },
      {
        stepNumber: 3,
        phase: "Phase 3: Joint Reinforcement",
        title: "Cut Biscuit / Domino Mortises in Miter Faces",
        timestamp: "06:20",
        seconds: 380,
        description: "Cut matching slots for #20 biscuits or 8x50mm Dominoes along the 45° bevel. Ensure mortises are centered so they do not blow out through the outer veneer face.",
        toolsUsed: ["Biscuit Joiner", "Clamps"],
        proTip: "Reference the joiner base off the outside face of the board to guarantee exterior seam alignment.",
        safetyNote: "Secure the beveled board firmly on the workbench before plunging."
      },
      {
        stepNumber: 4,
        phase: "Phase 4: Clamping the Waterfall",
        title: "Glue-Up with 90° Corner Jigs & Ratchet Straps",
        timestamp: "08:50",
        seconds: 530,
        description: "Apply Titebond III into the mortises and along the beveled grain. Fold the joint closed, tape the exterior seam with painter's tape, and clamp with corner clamping blocks and ratchet straps.",
        toolsUsed: ["Corner Clamps", "Ratchet Strap", "Blue Painter's Tape"],
        proTip: "Stretching blue painter's tape tightly across the joint acting as a hinge pulls the outer fibers together seamlessly.",
        safetyNote: "Check squareness immediately before the glue sets."
      },
      {
        stepNumber: 5,
        phase: "Phase 5: Sanding & Opposite Leg Mounting",
        title: "Sand Smooth and Mount Steel Legs",
        timestamp: "12:15",
        seconds: 735,
        description: "Sand up to 180 grit on the entire waterfall assembly. Pre-drill and install threaded brass inserts into the underside to mount the metal hairpin legs on the opposite side.",
        toolsUsed: ["Random Orbital Sander", "Drill Press or Guide", "Threaded Inserts"],
        proTip: "Threaded inserts allow you to remove legs easily for moving or transport without stripping wood holes.",
        safetyNote: "Vacuum all fine dust before proceeding to oiling."
      },
      {
        stepNumber: 6,
        phase: "Phase 6: Finish Application",
        title: "Apply Rubio Monocoat / Hardwax Oil",
        timestamp: "14:40",
        seconds: 880,
        description: "Pour a small pool of hardwax oil and spread with a white non-abrasive pad. Let react with wood fibers for 10 minutes, then buff completely dry with micro-fiber towels.",
        toolsUsed: ["Applicator Pad", "Microfiber Towels", "Nitrile Gloves"],
        proTip: "Hardwax oil bonds molecularly with wood cellulose in a single coat, giving a natural velvety sheen.",
        safetyNote: "Lay oil-soaked rags flat to dry before disposal."
      }
    ]
  },
  {
    id: "garage-workbench",
    title: "How to Build an Ultra-Sturdy 2x4 Garage Workbench",
    author: "DIY Pete Workshop",
    url: "https://www.youtube.com/watch?v=uK8f-T2f63I",
    videoId: "uK8f-T2f63I",
    objectName: "Heavy-Duty Workshop Workbench",
    category: "Shop Projects",
    difficulty: "Beginner",
    estimatedTime: "3-4 Hours",
    estimatedCost: "$70 - $95",
    dimensions: "6 ft L x 28\" W x 36\" H",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    overview: "The quintessential DIY maker workbench. Rigid, budget-friendly 2x4 structural framework with a smooth, replaceable 3/4\" MDF or plywood work top and lower storage shelf.",
    materials: [
      { item: "2x4 SPF Dimensional Lumber", quantity: "8 boards", dimensions: "8 ft length", notes: "Lumber for legs, frame rails, and cross stretchers" },
      { item: "3/4\" Sanded Plywood or MDF Sheet", quantity: "1 sheet", dimensions: "4x8 ft (cut to size)", notes: "Top work surface and bottom shelf" },
      { item: "3\" Construction Torx-Drive Screws", quantity: "1 box (75 ct)", dimensions: "#9 x 3\"", notes: "High shear strength, no pre-drilling required" },
      { item: "1 5/8\" Wood Screws", quantity: "1 box (50 ct)", dimensions: "1.625 inch", notes: "For securing MDF top from underside or counter-sinking" },
      { item: "Heavy Duty 3\" Locking Swivel Casters (Optional)", quantity: "4 pack", dimensions: "300 lb rating each", notes: "Makes the bench easily mobile in small shops" }
    ],
    tools: [
      { name: "Circular Saw or Miter Saw", category: "essential", icon: "saw" },
      { name: "Cordless Impact Driver with T25 Torx Bit", category: "essential", icon: "drill" },
      { name: "Speed Square & 4-Foot Level", category: "essential", icon: "ruler" },
      { name: "Tape Measure & Carpenter Pencil", category: "essential", icon: "ruler" },
      { name: "Clamps (Quick-Grip style)", category: "essential", icon: "clamp" },
      { name: "Eye & Ear Protection", category: "safety", icon: "shield" }
    ],
    safetyWarnings: [
      "Wear hearing protection when using high-RPM saws and impact drivers.",
      "Support long 2x4 boards properly when cutting so offcuts do not bind the saw blade."
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Phase 1: Cutting Lumber",
        title: "Measure and Batch Cut 2x4 Stock",
        timestamp: "01:15",
        seconds: 75,
        description: "Cut four 2x4 legs to 32\" (or 35\" if not using casters). Cut four long frame rails to 69\" and six cross stretchers to 21\". Label all cuts clearly.",
        toolsUsed: ["Miter Saw or Circular Saw", "Tape Measure", "Speed Square"],
        proTip: "Cut identical pieces in pairs or with a stop block to ensure symmetrical sides.",
        safetyNote: "Keep thumb tucked away from blade path when holding stock against the fence."
      },
      {
        stepNumber: 2,
        phase: "Phase 2: Frame Assembly",
        title: "Build the Top and Bottom Ladder Frames",
        timestamp: "03:30",
        seconds: 210,
        description: "Assemble two rectangular ladder frames using the 69\" rails and 21\" cross supports spaced every 16\" on center. Drive two 3\" screws into each butt joint.",
        toolsUsed: ["Impact Driver", "3\" Screws", "Speed Square"],
        proTip: "Pre-clamp the joint flush before driving screws to keep the frame flat on your floor.",
        safetyNote: "Wear safety glasses; Torx bits can occasionally slip or chip."
      },
      {
        stepNumber: 3,
        phase: "Phase 3: Leg Attachment",
        title: "Fasten 2x4 Legs to Lower and Upper Ladders",
        timestamp: "05:45",
        seconds: 345,
        description: "Stand the frames on edge. Attach the four corner legs inside the frame corners using three 3\" screws per leg junction. Check for 90-degree squareness with a carpenter's square.",
        toolsUsed: ["Level", "Impact Driver", "Bar Clamps"],
        proTip: "Position the lower frame 4 inches off the floor to leave toe kick space and room for casters.",
        safetyNote: "Support the frame so it does not topple while driving corner screws."
      },
      {
        stepNumber: 4,
        phase: "Phase 4: Top & Shelf Installation",
        title: "Cut and Fasten 3/4\" MDF or Plywood Top",
        timestamp: "08:10",
        seconds: 490,
        description: "Rip the 3/4\" sheet to 72\" x 28\", leaving a 1.5\" overhang all around for clamping workpieces. Countersink screws every 12 inches along perimeter.",
        toolsUsed: ["Circular Saw with Guide", "Countersink Drill Bit", "Driver"],
        proTip: "The 1.5-inch overhang is crucial—it allows F-style clamps to grip anywhere around your workbench rim.",
        safetyNote: "MDF creates fine airborne particles; always wear an N95 dust mask when cutting."
      },
      {
        stepNumber: 5,
        phase: "Phase 5: Optional Casters & Finish",
        title: "Install Locking Casters & Edge Chamfer",
        timestamp: "10:30",
        seconds: 630,
        description: "Flip workbench over. Bolt heavy-duty swivel casters onto the leg corners using 5/16\" lag screws. Break all sharp top edges with 120-grit sandpaper.",
        toolsUsed: ["Socket Wrench / Driver", "120-Grit Sandpaper"],
        proTip: "Use total-lock casters that lock both wheel rotation and swivel pivot for zero workbench wobble while sawing.",
        safetyNote: "Ensure all caster bolts are torqued down firmly."
      }
    ]
  },
  {
    id: "floating-shelves",
    title: "How to Build and Install Modern Floating Shelves",
    author: "Home Modern Craft",
    url: "https://www.youtube.com/watch?v=7XwO2B3vV0w",
    videoId: "7XwO2B3vV0w",
    objectName: "Floating Wall Bookshelves",
    category: "Home Decor",
    difficulty: "Beginner",
    estimatedTime: "2-3 Hours",
    estimatedCost: "$35 - $55",
    dimensions: "36\" L x 8\" D x 2\" H (Each shelf)",
    thumbnail: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
    overview: "Clean, invisible-bracket floating shelves that mount seamlessly against drywall with high weight capacity. Hollow-core or solid wood construction with hidden internal steel support rods.",
    materials: [
      { item: "1x8 Solid Pine or Oak Board", quantity: "2 boards", dimensions: "6 ft length", notes: "Main shelf body" },
      { item: "Blind Floating Shelf Steel Rod Brackets", quantity: "4 brackets", dimensions: "1/2\" diameter x 6\" rod", notes: "Heavy-duty steel mounting posts" },
      { item: "3\" Structural Wall Screws", quantity: "8 screws", dimensions: "#10 x 3\"", notes: "To secure bracket plate directly into wall studs" },
      { item: "Wood Stain & Clear Wax", quantity: "1 can", dimensions: "Dark Walnut", notes: "Rich finish highlighting wood grain" }
    ],
    tools: [
      { name: "Electronic Stud Finder", category: "essential", icon: "search" },
      { name: "Torpedo / Long Bubble Level", category: "essential", icon: "ruler" },
      { name: "Power Drill with 1/2\" Auger or Forstner Bit", category: "essential", icon: "drill" },
      { name: "Drill Guide Block (for 90° straight holes)", category: "essential", icon: "tool" },
      { name: "Miter Saw", category: "essential", icon: "saw" },
      { name: "Safety Glasses", category: "safety", icon: "shield" }
    ],
    safetyWarnings: [
      "Always scan for hidden electrical wiring and plumbing pipes with a multi-scanner before drilling into walls.",
      "At least two mounting screws must hit solid wood wall studs to support book weight."
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Phase 1: Wall Prep & Stud Mapping",
        title: "Locate and Mark Wall Studs",
        timestamp: "00:50",
        seconds: 50,
        description: "Run the stud finder across the desired wall area. Mark the center of two 16\"-on-center wood studs using painter's tape. Use a 3-foot level to draw a level reference line.",
        toolsUsed: ["Stud Finder", "Level", "Painter's Tape", "Pencil"],
        proTip: "Tap a tiny finish nail into your marks to verify solid stud resistance before drilling large holes.",
        safetyNote: "Turn off power to the room circuit if you suspect wiring runs directly behind the area."
      },
      {
        stepNumber: 2,
        phase: "Phase 2: Shelf Drilling",
        title: "Bore Deep Blind Holes into Shelf Back Edge",
        timestamp: "02:40",
        seconds: 160,
        description: "Transfer exact stud spacing onto the back edge of your shelf board. Using a drill guide block, bore 1/2\" holes 6 inches deep perpendicular into the back edge.",
        toolsUsed: ["Cordless Drill", "1/2\" Forstner Bit", "Drill Guide Block"],
        proTip: "Wrap a strip of blue tape on your drill bit 6 inches from the tip as an instant depth stop.",
        safetyNote: "Clamp the shelf vertically in a vise so it cannot slip while boring deep holes."
      },
      {
        stepNumber: 3,
        phase: "Phase 3: Bracket Mounting",
        title: "Anchor Hidden Steel Brackets to Studs",
        timestamp: "04:55",
        seconds: 295,
        description: "Screw the steel bracket mounting plates directly into the wall studs using 3\" structural screws. Double check that the extending rods are level horizontally and front-to-back.",
        toolsUsed: ["Impact Driver", "Level", "3\" Screws"],
        proTip: "Slightly angle the rods 1 degree upward to counteract any shelf sag under heavy book loads.",
        safetyNote: "Never rely solely on drywall anchors for floating shelves carrying weight."
      },
      {
        stepNumber: 4,
        phase: "Phase 4: Slide & Lock",
        title: "Slide Shelf onto Rods & Test Fit",
        timestamp: "06:30",
        seconds: 390,
        description: "Push the shelf onto the steel rods until it fits flush against the drywall. If tight, lightly ream the holes with the drill bit. Secure with the hidden set screws underneath.",
        toolsUsed: ["Rubber Mallet", "Screwdriver"],
        proTip: "Use a scrap wood block against the shelf edge if tapping with a mallet to avoid denting the wood.",
        safetyNote: "Test load with gentle downward hand pressure before placing valuables."
      }
    ]
  },
  {
    id: "cedar-planter-box",
    title: "How to Build a Modern DIY Slatted Cedar Planter Box",
    author: "Garden & Maker Space",
    url: "https://www.youtube.com/watch?v=mY9qB_lBvM8",
    videoId: "mY9qB_lBvM8",
    objectName: "Modern Outdoor Cedar Planter Box",
    category: "Outdoor Crafts",
    difficulty: "Beginner",
    estimatedTime: "2-3 Hours",
    estimatedCost: "$45 - $65",
    dimensions: "18\" L x 18\" W x 22\" H",
    thumbnail: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
    overview: "A weather-resistant slatted planter box made from naturally rot-resistant Western Red Cedar. Features clean modern horizontal lines, elevated interior shelf, and breathable drainage liner.",
    materials: [
      { item: "Cedar 1x4 Decking / Trim Boards", quantity: "6 boards", dimensions: "8 ft length", notes: "Naturally insect and rot resistant" },
      { item: "Cedar 2x2 Square Posts", quantity: "2 posts", dimensions: "8 ft length", notes: "Internal corner cleats" },
      { item: "1 5/8\" Exterior Coated Trim Screws", quantity: "1 box (100 ct)", dimensions: "Ceramic / Stainless", notes: "Will not rust or stain cedar" },
      { item: "Porous Landscape Fabric / Geo-textile", quantity: "1 roll", dimensions: "3x10 ft", notes: "Retains potting soil while allowing free drainage" },
      { item: "Exterior Teak / Penetrating Oil", quantity: "1 can", dimensions: "UV resistant", notes: "Preserves natural cedar warm red-gold tones" }
    ],
    tools: [
      { name: "Miter Saw with Finish Blade", category: "essential", icon: "saw" },
      { name: "Cordless Drill / Driver", category: "essential", icon: "drill" },
      { name: "Heavy Duty Staple Gun (T50)", category: "essential", icon: "tool" },
      { name: "1/4\" Wood Spacers (or scrap tile)", category: "essential", icon: "ruler" },
      { name: "Tape Measure & Pencil", category: "essential", icon: "ruler" },
      { name: "Safety Glasses & Work Gloves", category: "safety", icon: "shield" }
    ],
    safetyWarnings: [
      "Cedar sawdust can cause respiratory and skin irritation for some people; wear a dust mask and gloves.",
      "Ensure proper drainage holes in the bottom shelf so water doesn't pool and drown plant roots."
    ],
    steps: [
      {
        stepNumber: 1,
        phase: "Phase 1: Cutting Cedar Slats",
        title: "Batch Cut 1x4 Slats and 2x2 Corner Cleats",
        timestamp: "01:00",
        seconds: 60,
        description: "Set a stop block on your miter saw to 18\". Cut 24 identical pieces of 1x4 cedar slats for the four sides. Cut four 2x2 corner cleats to 20\" length.",
        toolsUsed: ["Miter Saw with 60-Tooth Blade", "Tape Measure"],
        proTip: "A 60-tooth fine finish blade prevents splintering and blowout on cedar ends.",
        safetyNote: "Never reach across the saw blade until it has come to a complete stop."
      },
      {
        stepNumber: 2,
        phase: "Phase 2: Slatted Wall Assembly",
        title: "Fasten Slats to Corner Posts with Uniform Spacing",
        timestamp: "03:15",
        seconds: 195,
        description: "Place two 2x2 posts on your bench. Lay the first 1x4 flush with the top. Use 1/4\" wood spacers between consecutive slats down the post. Drive exterior trim screws into each side.",
        toolsUsed: ["Cordless Drill", "1/4\" Spacers", "Trim Screws"],
        proTip: "Use 1/4\" plywood offcuts as spacers for perfectly consistent gaps that allow wood to breathe.",
        safetyNote: "Pre-drill screw holes near cedar ends to prevent splitting."
      },
      {
        stepNumber: 3,
        phase: "Phase 3: Box Construction",
        title: "Join All Four Walls into a Square Planter",
        timestamp: "05:40",
        seconds: 340,
        description: "Stand the two assembled panels upright. Clamp the remaining horizontal slats to connect the panels into a four-sided square tower. Check squareness across diagonals.",
        toolsUsed: ["Corner Clamps", "Impact Driver"],
        proTip: "Overlap the outer slat corners in an alternating pinwheel pattern for clean shadow lines.",
        safetyNote: "Keep fingers clear of clamping pressure points."
      },
      {
        stepNumber: 4,
        phase: "Phase 4: False Bottom & Drainage",
        title: "Install Internal Drop-In Bottom Shelf",
        timestamp: "07:30",
        seconds: 450,
        description: "Fasten 1x2 cleats inside the box 12 inches below the rim. Drop in three spaced 1x4 slats to create a false bottom. This avoids needing 50 lbs of dirt and saves soil costs.",
        toolsUsed: ["Drill Driver", "Tape Measure"],
        proTip: "A false bottom 12\" deep is ideal for most flowers and herbs while keeping the planter lightweight.",
        safetyNote: "Leave 1/2\" gaps between bottom slats for water runoff."
      },
      {
        stepNumber: 5,
        phase: "Phase 5: Lining & Exterior Oil",
        title: "Attach Landscape Fabric & Apply Teak Oil",
        timestamp: "09:10",
        seconds: 550,
        description: "Line the interior with breathable geo-textile landscape fabric, securing it with stainless steel staples. Apply one coat of penetrating exterior teak oil to the outer cedar.",
        toolsUsed: ["Staple Gun", "Utility Knife", "Foam Brush"],
        proTip: "The landscape fabric prevents soil from washing out through the 1/4\" decorative gaps while allowing aeration.",
        safetyNote: "Wear disposable nitrile gloves when applying exterior wood oils."
      }
    ]
  }
];
