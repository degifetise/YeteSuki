let atoteCords = [7.0536, 38.46466];

    // Initialize map centered on Atote
    let map = L.map("map").setView(atoteCords, 15); // zoom 15 for close view

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add marker at Atote
    let marker = L.marker(atoteCords).addTo(map);

    // Add popup with Font Awesome icon
    marker.bindPopup(
      "<i class='fa-solid fa-location-dot' style='color:red'></i>Hawassa,  Atote, near Amme caffe, Ethiopia"
    ).openPopup();