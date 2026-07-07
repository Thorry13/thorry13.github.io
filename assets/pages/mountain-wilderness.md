## Context
In 2016, the [Mountain Wilderness](https://www.mountainwilderness.fr/) association commissioned my school (Ecole Centrale de Lyon) to build a website for their ["Installations Obsolètes](https://www.installationsobsoletes.org/#/)" project. With Adja Seynabou, Martin Boutroux, Mathieu Perrin, Samuel Cailleaux and Romain Moravi, we formed group n°24 to achieve this goal. The association has been recensing for years abandoned installations such as old military or industrial equipments in our beloved mountains, in order to remove them and restore decent natural state. Collecting data was a long painful process (and a lot of paperwork) that needed to be simplified and embedded in an accessible interface.

## Description
The project specifications implied the following :

- Storing geographical items
- Displaying them on a map
- Retrieving position expanded data (administrative zones)
- A members management system

<center><img src="assets/images/projects/mountain_wilderness/MW_map_1-90.png" width="500" ></center>

## Challenges

There is no standard size for an obsolete equipment. One of the biggest concern was the ability of our system to store and display various kinds of shapes (points, lines, areas).
As another important feature, retrieving geographical information of such objects, in particular when located in protected areas (Natura 2000, national parks,...), was a complex task demanding strong choices and optimization.

We chose a simple HTML/CSS/Javascript website, PHP for backend, a MySQL database for its built-in geographical functions and Leaflet as a light map-manager to display GeoJSON objects.
We extracted data from various sources and applied many conversions (filetypes and projections) with GDAL library and QGIS to reach a unified system.

<center><img src="assets/images/projects/mountain_wilderness/solution_summary.png" width="500" ></center>
