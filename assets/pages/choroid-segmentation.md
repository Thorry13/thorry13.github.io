## Context
I joined [HMR Biophotonics Lab](https://biophotonics.ca/labo/) in January 2020 during my master's program to assist in developing algorithms to automatically evaluate eye's biomechanical properties. The lab had created a non-invasive method to assess ocular rigidity, that could be involved in various eye diseases including glaucoma. However, a fully autmated system still needed to perform a better choroid segmentation task on numerous Optical Coherence Tomography (OCT) images. 

## Description
The previous approach relied on a traditional graph-search algorithm, while my solution used its results to train weakly-supervised deep learning models, which significantly improved segmentation performance. The best performing model was based on a U-Net architecture with a ResNet-34 as an encoder. It showed smoother results with a better captured choroid pulsation on videos. 

## Challenges
While the Bruch's membrane is relatively easy to detect on B-Scans, the choroid layer is much darker and blurrier without a clear apparent interface with the sclera (CSI). Pre-processing to increase contrast or post-processing to smooth the segmentation sometimes helped to perform better results but were finally not retained in the last model.

I proposed also data augmentation to train models on blurrier images with mitigated results.

Choroid pulsation is captured over a sequence of B-Scans that need to be aligned thanks to a registration step.

Finally, as many models were trained with various parameters, it was important to set a training tracker. For that specific purpose, I deployed an mlflow server with a proper file structure.

## Publication
_Master Thesis_: https://publications.polymtl.ca/9124
