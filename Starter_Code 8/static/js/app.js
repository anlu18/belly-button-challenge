// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    var PANEL = d3.select("#sample-metadata");
    PANEL.html(""); // Clear any existing metadata

    // Loop through each key-value pair in the filtered metadata and append new tags
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    var samples = data.samples;

    // Filter the samples for the object with the desired sample number
    var sampleArray = samples.filter(sampleObj => sampleObj.id == sample);
    var sampleresult = sampleArray[0];
    // Get the otu_ids, otu_labels, and sample_values
    var otuIds = sampleresult.otu_ids;
    var otuLabels = sampleresult.otu_labels;
    var sampleValues = sampleresult.sample_values;
    
    // Build a Bubble Chart
    var yticks = otuIds.map(id => `OTU ${id}`).slice(0, 10).reverse();
    var trace = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth'
      }
    };

    var data = [trace];

    var layout = {
      title: 'Bubble Chart',
      showlegend: false,
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      // Adjust the size of the bubble chart by setting the height and width
  height: 600, // Set the height to 600 pixels
  width: 800   // Set the width to 800 pixels
    };

    Plotly.newPlot('bubble-chart', data, layout);

    // Render the Bubble Chart
    // Build a Bar Chart
    var trace = {
      x: sampleValues.slice(0, 10).reverse(),
      y: yticks,
      type: 'bar',
      orientation: 'h'
    };

    var data = [trace];

    var layout = {
      title: 'Top 10 OTUs Found',
      xaxis: { title: 'Number of Bacteria' },
      yaxis: { title: 'OTU ID' }
    };
// Render the Bar Chart
Plotly.newPlot('bar-chart', data, layout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // Build a Bar Chart
    var trace = {
      x: sampleValues.slice(0, 10).reverse(),
      y: yticks,
      type: 'bar',
      orientation: 'h'
    };
    
    var data = [trace];
    
    var layout = {
      title: 'Top 10 OTUs Found',
      xaxis: { title: 'Sample Values' },
      yaxis: { title: 'OTU ID' }
    };

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    var names = data.names;


    // Use d3 to select the dropdown with id of `#selDataset`
    var dropdownMenu = d3.select('#selDataset');


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((name) => {
      dropdownMenu.append("option").text(name).property("value", name);
    });


    // Get the first sample from the list
    var firstSample = names[0];


    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();