## Context
In 2021, as a research assistant, I was asked to quantify Bruch's Membrane (BM) folds on Optical Tomography Coherence (OCT) images. An automated metric assessment algorithm of these deviations could help clinicians to evaluate the severity of eye diseases like macular hypotony. The BM is very bright and easy to detect on OCT images. 

## Description
OCT images were captured on 36 volumes derived from 24 patients suffering from macular hypotony. The presented method use the detected BM to trace a smooth line as a reference. Deviations of the BM from this reference is used to quantify the folds across the volume. The results show a strong Pearson correlation (0.8) between manual evaluations and my automated metric, and the improvement of eye condition after surgery.

## Challenges
There was a total of 180 images to analyze for our clinicians. In a order to collect the results, I provided a simple graphical interface, designed with Matlab App Designer.

## Publication
https://doi.org/10.1097/ijg.0000000000002161
