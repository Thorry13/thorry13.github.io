<a href="https://www.kaggle.com/competitions/inf8460-sts-bA19/overview">
  <img
    style="position: fixed; top: 0; right: 0; border: 0;"
    src="https://img.shields.io/badge/View_Project-blue?logo=kaggle"
    alt="View on GitHub">
</a>

## Context
In 2019, Polytechnique Montreal introduced INF8460, a master's level course covering the entire history of Natural Language Processing, from early bag-of-words to the newly released BERT models. 

As a practical assignment, the entire class participated in an internal Kaggle competition. The project's goal was to develop a language model capable of performing Sementic Text Similarity (STS) tasks.

<center><img src="assets/images/projects/semantic_similarity/STS_examples.png" width="500" ></center>

## Description
Together with Mathias Gonin and Wael Hamdan, we implemented multiple models-including Bag of Words, TF-IDF, word2vec, LSTM and BERT- to fit a unified pipeline. We experimented with various preprocessing techniques and scoring methods. Our best-performing model was a pre-trained XLNet, fine-tuned on 5703 sentence pairs. 

Additionally, we used a meta-regressor and an explainer model to analyze and compare the relative importance of each model. It revealed again the great performances of BERT-based models over the others.

<center>
    <button class="about-btn" onclick="window.open('./assets/pdf/poster.pdf')">
        <i class="fa-solid fa-file-pdf"></i>
        <span>View Poster</span>
    </button>
    <button class="about-btn" onclick="window.open('./assets/pdf/Article_STS_B.pdf')">
        <i class="fa-solid fa-file-pdf"></i>
        <span>View Article</span>
    </button>
</center>

## Challenges
Our primary goal was designing a flexible pipeline capable of accomadating a <b>wide range of models and transformers</b>. 

Once this was achieved, we conducted an extensive state-of-the-art research to <b>identify implementations</b> for our system. 

Finally we faced significant <b>computational constraints</b> due to the limited resources of our local machines.
