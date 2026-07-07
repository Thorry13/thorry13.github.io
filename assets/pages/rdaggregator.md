## Context
Orphanet is the one of the primary references for coding rare diseases. During my time at BNDMR, this was the standard way the identify patients' conditions. However, Orphanet is a complex hierarchical system: each ORPHAcode represents a specific disorder or symptom, which may depend on broader ORPHAcodes. As a result, two patients with the same apparent condition could be assigned different codes depending on the standards of the center, the precision level the practioner chose or the investigations conducted. 

To address this, it was essential to provide unified and relevant method when handling the unavoidable heterogeneity within the collected data to remain as precise and informative as possible. Given the large number of ORPHAcodes (more than 17'000) and their intricate relationships (more than 10'000), graph theory emerged as the most effective approach to resolve computational challenges. Since Orphanet is set to become the main European standard, we decided to consolidate these methods into an accessible R package.

## Description
The R package was designed as a toolbox to manage five key use cases:
1. Nomenclature: Enable users to find relevant data (label, synonyms, type, etc.) for any ORPHAcode.
2. Relationships: Allow users to find more or less specific entities related to a specific ORPHAcode.
3. Aggregation: Facilitate the summarization by counting a single ORPHAcode entry across all relevant associated broader entities.
4. Visualization: Allow users to navigate and visualize the complex Orphanet hierarchical structure -regardless of size- using static and dynamic visualization methods.
5. Genes: Provide an accessible interface to exploit gene information alongside ORPHAcodes.


## Challenges
The main goal was to optimise the algorithm to manage aggregation all across the network at a national scale. Another condition was a programming in R for a better integration with the current team skills and existing scripts. The `igraph` package was imported for most of the graph operations, however many functions needed to be implemented for the specific purpose of rare disease data.

Developing an R package demands robust structure and organisation to be shared on CRAN. It is still pending now for license reasons.

## Source code
https://github.com/BNDMR/RDaggregator

