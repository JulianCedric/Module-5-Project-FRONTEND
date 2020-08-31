<style type="text/css">

/* Shaded */
.demo .grid.shaded.examples .row {
  position: relative;
}
.demo .grid.shaded.examples .grid > .column {
  position: relative;
  z-index: 11;
}
.demo .grid.shaded.examples .grid .column:not(.row):after {
  background-color: #AAAAAA;
  content: "";
  display: block;
  min-height: 1em;
}

.demo .grid.divided.examples .grid .column:not(.row):after {
  background-color: rgba(0, 0, 0, 0.1);
  content: "";
  display: block;
  min-height: 1em;
}

.demo .grid.nested.examples .grid .grid {
  box-shadow: 0px 0px 0px 1px #F0F0F0 inset;
}
.demo .grid.nested.examples .grid .grid .column:after {
  background-color: #AAAAAA;
  content: "";
  display: block;
  min-height: 1em;
}

.demo .grid.simple.examples .grid .column:not(.row):not(.grid):after {
  content: "";
  display: block;
  min-height: 50px;
}


/* Animation */
.demo .grid.examples {
  margin: 0em !important;
  padding: 0em !important;
}

</style>