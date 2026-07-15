## Context

Pompe disease (or Glycogen Storage Disease Type II) is a rare genetic disorder caused by acid maltase deficiency, leading to a range of symptoms—cardiac, muscular, and respiratory—depending on the age of onset. In children, the disease often has severe consequences, making early diagnosis and access to treatment critical.
To better understand its prevalence in France and identify patients who could benefit from emerging therapies, two key data sources exist:

- The Pompe Disease Registry, established in the 2000s.
- The French National Rare Disease Registry (BNDMR).

<center><img src="assets/images/projects/pompe_pairing/sources.png" width="500"></center>

By linking these registries, researchers can estimate the true number of patients in France and improve care coverage.

## Description

Prevalence was estimated through a 2-steps process:

1. **Record Linkage**: Pairing the records from both registries using limited non-identifying data (birth date, gender, care center, status - dead or alive) and the following sequence:

    1a. Preferences assignment using **Fellegi-Sunter algorithm** (1969).
    1b. Matching using **Gale and Shapley algorithm** (1962)

2. **Population estimation**: Once patients were identified in both sources, considered as independant from each other, we used Capture-Recapture algorithm to estimate the number of living patients suffering from Pompe disease.

In 2023, we observed the following:

- **Strong overlap** between the two registries for living patients.
- **Gaps identified**: Some patients remain unrecorded in either registry.
- **Potential for improvement**: 
  - The Pompe Disease Registry could capture 44–53 additional children and 96–114 additional adults.
  - BNDMR remains the **most exhaustive** source.

<center><img src="assets/images/projects/pompe_pairing/results.png" width="500"></center>

## Challenges

- Limited Data: Matching relied on a small set of non-identifying variables.
- Data Quality: Manual entry introduced errors, requiring validation with care centers to ensure accuracy.

