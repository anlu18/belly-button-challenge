# Belly Button Challenge: Advanced Data Visualization Project

The **Belly Button Challenge** is a hands-on project focused on applying advanced data visualization techniques using JavaScript and HTML. This project was guided by expert instructions (provided below) and aimed to utilize cutting-edge tools to create insightful visualizations from a complex dataset. The challenge was designed to encourage exploration of new approaches to data analysis and to push the limits of current technologies in the field of data visualization.

## Project Instructions

### Data Source
- Use the D3.js library to read in the dataset from the following URL:  
  [samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

### Visualizations

1. **Horizontal Bar Chart with Dropdown Menu**
   - Create a dynamic bar chart that updates based on the selected individual from a dropdown menu.
   - The chart should display the **Top 10 OTUs** (Operational Taxonomic Units) found in that individual.
   - **Values**: Use `sample_values` as the bar chart values.
   - **Labels**: Use `otu_ids` as the labels for the chart.
   - **Hover Text**: Use `otu_labels` to display descriptive hovertext for each bar.

2. **Bubble Chart**
   - Create a bubble chart to visualize each sample in the dataset.
   - **X-axis Values**: Use `otu_ids` for the x-axis.
   - **Y-axis Values**: Use `sample_values` for the y-axis.
   - **Marker Size**: Use `sample_values` to determine the size of the markers.
   - **Marker Colors**: Use `otu_ids` to set the color of the markers.
   - **Hover Text**: Use `otu_labels` to provide hovertext for each bubble.

3. **Demographic Information**
   - Display the demographic information for the selected individual from the dataset.
   - Extract key-value pairs from the metadata JSON object and display them on the page, showing individual demographic details.

## Summary
This project involves creating interactive visualizations using D3.js to represent complex biological data. The goal is to help users explore the relationship between individuals and the OTUs present in their belly button microbiomes through dynamic and engaging visualizations.
